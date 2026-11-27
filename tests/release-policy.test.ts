import test from 'node:test';
import assert from 'node:assert/strict';
import { latestAgentRelease, validateRelease } from '../apps/worker/src/release-policy.ts';

const commit = 'a'.repeat(40), tag = 'v0.2.0';
const selection = { repository: 'Oddmash/oddmash-agents', actorId: '135234546', event: 'release', ref: `refs/tags/${tag}`, eventSha: commit, tag };
const release = { tag_name: tag, draft: false, prerelease: false, published_at: '2026-11-24T00:00:00Z' };
const fixture = (overrides: { release?: object; sha?: string; comparison?: object } = {}) => async <T>(path: string): Promise<T> => {
  if (path.endsWith('/releases?per_page=100&page=1')) return [{ ...release, ...overrides.release }] as T;
  if (path.endsWith('/commits/' + tag)) return { sha: overrides.sha ?? commit } as T;
  if (path.endsWith('...main')) return { status: 'ahead', behind_by: 0, merge_base_commit: { sha: commit }, ...overrides.comparison } as T;
  throw new Error('Unexpected test request');
};

test('resolves the latest published authorized stable tag in main history', async () => {
  assert.deepEqual(await validateRelease(selection, fixture()), { tag, commit });
  assert.deepEqual(await validateRelease({ ...selection, event: 'workflow_dispatch', ref: 'refs/heads/main', expectedCommit: commit }, fixture()), { tag, commit });
});

test('rejects other actors, repositories, branch dispatches and unstable tags', async () => {
  for (const invalid of [{ actorId: '7' }, { repository: 'Oddmash/example' }, { tag: 'v0.2.0-beta.1' }, { tag: 'skills-v0.2.0' }, { event: 'push' }, { event: 'workflow_dispatch', ref: 'refs/heads/develop' }]) {
    await assert.rejects(validateRelease({ ...selection, ...invalid }, fixture()));
  }
});

test('fails closed when the latest release, tag commit or ancestry changes', async () => {
  for (const override of [{ release: { draft: true } }, { release: { prerelease: true } }, { release: { tag_name: 'v0.2.1' } }, { sha: 'b'.repeat(40) }, { comparison: { status: 'diverged', behind_by: 1 } }]) {
    await assert.rejects(validateRelease(selection, fixture(override)));
  }
  await assert.rejects(validateRelease({ ...selection, expectedCommit: 'b'.repeat(40) }, fixture()), /expected commit/);
});

test('catalog releases, drafts and prereleases cannot replace the highest stable Agent version', async () => {
  const api = async <T>(path: string): Promise<T> => {
    assert.match(path, /page=1$/);
    return [
      { ...release, tag_name: 'skills-v99.0.0' },
      { ...release, tag_name: 'v0.3.0', draft: true },
      { ...release, tag_name: 'v0.4.0', prerelease: true },
      { ...release, tag_name: 'v0.9.0' },
      { ...release, tag_name: 'v0.10.0' },
      { ...release, tag_name: 'v0.11.0', published_at: null },
      { ...release, tag_name: 'v00.12.0' }
    ] as T;
  };
  assert.equal((await latestAgentRelease(api, '/repos/Oddmash/oddmash-ai')).tag_name, 'v0.10.0');
});

test('enumerates pages and fails closed on incomplete or repeated metadata', async () => {
  const catalog = Array.from({ length: 100 }, (_, i) => ({ ...release, tag_name: 'skills-v1.0.' + i }));
  const paged = async <T>(path: string): Promise<T> => (path.endsWith('page=1') ? catalog : [release]) as T;
  assert.equal((await latestAgentRelease(paged, '/repos/Oddmash/oddmash-ai')).tag_name, tag);
  await assert.rejects(latestAgentRelease(async <T>() => catalog as T, '/repos/Oddmash/oddmash-ai'), /changed/);
  await assert.rejects(latestAgentRelease(async <T>(path: string) => Array.from({ length: 100 }, (_, i) => ({ ...release, tag_name: 'skills-v' + path.split('page=')[1] + '.0.' + i })) as T, '/repos/Oddmash/oddmash-ai'), /incomplete/);
  await assert.rejects(latestAgentRelease(async <T>() => [{ ...release, tag_name: 'skills-v1.0.0' }] as T, '/repos/Oddmash/oddmash-ai'), /No published stable Agent release/);
});
