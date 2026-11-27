import assert from 'node:assert/strict';
import { test } from 'node:test';
import { collectPreparation, generatePreparation, needsReleaseQA, preparationTitle, reusablePreparation } from '../apps/worker/src/release-preparation.ts';
import { githubContentFixture } from './github-content-fixture.ts';

const base = 'a'.repeat(40);
const head = 'b'.repeat(40);
const previous = 'v0.2.0';
const files = [{ filename: 'docs/release.md' }, { filename: 'tests/release.test.ts' }];

test('QA skips only known non-runtime scope and includes renamed runtime paths', () => {
  assert.equal(needsReleaseQA(files, true), false);
  assert.equal(needsReleaseQA(files, false), true);
  assert.equal(needsReleaseQA([], true), true);
  assert.equal(needsReleaseQA([{ filename: 'src/release.ts' }], true), true);
  assert.equal(needsReleaseQA([{ filename: 'docs/old.md', previous_filename: 'src/old.ts' }], true), true);
  assert.equal(needsReleaseQA([{ filename: '.github/workflows/deploy.yml' }], true), true);
});

test('reuse requires exact successful maintainer preparation of the same range', () => {
  const run = { id: 1, actor: { id: 135234546 }, event: 'workflow_dispatch', head_sha: head, display_title: preparationTitle(previous, head), status: 'completed', conclusion: 'success' };
  assert.equal(reusablePreparation([run], previous, head, 2), run);
  assert.equal(reusablePreparation([run], previous, head, 1), undefined);
  assert.equal(reusablePreparation([run], 'v0.2.1', head, 2), undefined);
  assert.equal(reusablePreparation([{ ...run, conclusion: 'failure' }], previous, head, 2), undefined);
  assert.equal(reusablePreparation([{ ...run, actor: { id: 1 } }], previous, head, 2), undefined);
});

test('preparation verifies current main CI, filters metadata and rejects stale candidate', async () => {
  let current = head;
  let result = 'success';
  const api = async <T>(path: string): Promise<T> => {
    if (path.endsWith('/releases?per_page=100&page=1')) return [{ tag_name: 'skills-v99.0.0', draft: false, prerelease: false, published_at: '2026-11-27' }, { tag_name: previous, draft: false, prerelease: false, published_at: '2026-11-24' }] as T;
    if (path.endsWith('/commits/main')) return { sha: current } as T;
    if (path.includes('/actions/workflows/')) return { workflow_runs: [{ head_sha: head, event: 'push', status: 'completed', conclusion: result }] } as T;
    if (path.endsWith('/commits/' + previous)) return { sha: base } as T;
    if (path.includes('/compare/')) return { status: 'ahead', behind_by: 0, total_commits: 2, merge_base_commit: { sha: base }, files, commits: [{ commit: { message: 'docs: clarify release\nDo not send this body' } }, { commit: { message: 'token: synthetic-sensitive-value' } }] } as T;
    if (path === '/repos/Oddmash/oddmash-agents/contents/AGENTS.md?ref=' + head) return githubContentFixture('AGENTS.md', 'Keep the verification offline.') as T;
    throw new Error('Unexpected request');
  };
  const prepared = await collectPreparation(api, previous, head);
  assert.deepEqual(prepared.projectGuidance, { 'Oddmash/oddmash-agents/AGENTS.md': 'Keep the verification offline.' });
  assert.equal(Object.hasOwn(prepared.evidence, 'projectGuidance'), false);
  assert.deepEqual(prepared.evidence.subjects, ['docs: clarify release']);
  assert.equal(prepared.evidence.qaRequired, false);
  assert.equal(prepared.evidence.complete, false);
  current = base;
  await assert.rejects(prepared.assertCurrent(), /changed/);
  current = head;
  result = 'failure';
  await assert.rejects(collectPreparation(api, previous, head), /CI/);
});

test('model report is bounded, structured and stored only as advisory', async () => {
  const report = { en: ['Observed CI', 'Partial scope', 'Check integration', 'Manual verification'], ko: ['검사', '범위', '통합', '확인'] };
  const projectGuidance = { 'Oddmash/oddmash-agents/AGENTS.md': 'Use the existing release labels.' };
  const evidence = { subjects: ['feat: change'] };
  for (const [role, skill] of [['qa', 'oddmash-quality-assurance'], ['release', 'oddmash-release-management']] as const) {
    const request: typeof fetch = async (_url, init) => {
      const body = JSON.parse(String(init?.body));
      assert.equal(body.store, false);
      assert.equal(body.max_output_tokens, 1100);
      assert.match(body.instructions, /release range/);
      const input = JSON.parse(body.input);
      assert.deepEqual(input.evidence, evidence);
      assert.deepEqual(input.projectGuidance, projectGuidance);
      assert.ok(input.sharedSkill.path.includes(skill));
      return new Response(JSON.stringify({ status: 'completed', output: [{ content: [{ type: 'output_text', text: JSON.stringify(report) }] }] }));
    };
    assert.deepEqual(await generatePreparation(role, evidence, { model: 'test', key: 'synthetic', projectGuidance }, request), report);
  }
});

test('truncated commit or file coverage requires QA and is reported as partial', async () => {
  const api = async <T>(path: string): Promise<T> => {
    if (path.endsWith('/releases?per_page=100&page=1')) return [{ tag_name: 'skills-v99.0.0', draft: false, prerelease: false, published_at: '2026-11-27' }, { tag_name: previous, draft: false, prerelease: false, published_at: '2026-11-24' }] as T;
    if (path.endsWith('/commits/main')) return { sha: head } as T;
    if (path.includes('/actions/workflows/')) return { workflow_runs: [{ head_sha: head, event: 'push', status: 'completed', conclusion: 'success' }] } as T;
    if (path.endsWith('/commits/' + previous)) return { sha: base } as T;
    if (path.includes('/compare/')) return { status: 'ahead', behind_by: 0, total_commits: 101, merge_base_commit: { sha: base }, files, commits: Array.from({ length: 100 }, () => ({ commit: { message: 'docs: update notes' } })) } as T;
    throw new Error('Unexpected request');
  };
  const { evidence } = await collectPreparation(api, previous, head);
  assert.equal(evidence.complete, false);
  assert.equal(evidence.qaRequired, true);
  assert.equal(evidence.commitCount, 101);
  assert.equal(evidence.subjects.length, 60);
});
