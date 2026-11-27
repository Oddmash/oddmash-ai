import assert from 'node:assert/strict';
import { test } from 'node:test';
import { advisoryRoles } from '../apps/worker/src/advisory-agents.ts';
import { agentSkill, loadProjectGuidance } from '../apps/worker/src/agent-guidance.ts';
import { privateSensitiveText } from '../apps/worker/src/core.ts';
import { githubContentFixture as contents } from './github-content-fixture.ts';

const repository = 'Oddmash/sample';
const sha = 'a'.repeat(40);
test('all roles use bounded, pinned catalog guidance with distinct Impact and Triage criteria', () => {
  const roles = ['reviewer', ...advisoryRoles] as const;
  const skills = roles.map(agentSkill);
  assert.equal(new Set(skills.map(skill => skill.revision)).size, 1);
  for (const skill of skills) {
    assert.match(skill.revision, /^[a-f0-9]{40}$/);
    assert.match(skill.path, /^catalog\/skills\/oddmash-[a-z-]+\/SKILL\.md$/);
    assert.match(skill.text, /^- /);
    assert.ok(Buffer.byteLength(skill.text) <= 2400);
    assert.equal(privateSensitiveText(skill.text), false);
  }
  assert.equal(agentSkill('impact').path, agentSkill('triage').path);
  assert.notEqual(agentSkill('impact').text, agentSkill('triage').text);
});

test('project guidance comes only from exact base paths and omits unsafe or unavailable documents', async () => {
  const calls: string[] = [];
  const result = await loadProjectGuidance(async path => {
    calls.push(path);
    const filename = path.split('/contents/')[1].split('?')[0];
    if (filename === 'AGENTS.md') return contents(filename, 'Use the stable API contract.');
    if (filename === 'src/AGENTS.md') return contents(filename, 'password: synthetic-fixture-value');
    if (filename === 'src/missing/AGENTS.md') throw new Error('GitHub request failed (404)');
    if (filename === 'src/ui/AGENTS.md') return contents(filename, 'Preserve focus order.');
    if (filename === 'linked/AGENTS.md') return { ...contents(filename, 'unavailable'), type: 'symlink' };
    if (filename === 'alias/AGENTS.md') return { ...contents(filename, 'Unrelated private document'), sha: contents(filename, '../notes/internal.md').sha };
    if (filename === 'oversized/AGENTS.md') {
      const { size, ...file } = contents(filename, 'x'.repeat(12_001));
      return file;
    }
    return { type: 'file', encoding: 'base64', content: '/w==' };
  }, repository, sha, ['src/missing/file.ts', 'src/ui/button.ts', 'linked/file.ts', 'alias/file.ts', 'oversized/file.ts', 'malformed/file.ts', 'outside/../never.ts'].map(filename => ({ filename })), true);
  assert.deepEqual(result, {
    'Oddmash/sample/AGENTS.md': 'Use the stable API contract.',
    'Oddmash/sample/src/ui/AGENTS.md': 'Preserve focus order.'
  });
  assert.ok(calls.every(path => path.startsWith('/repos/Oddmash/sample/contents/') && path.endsWith('?ref=' + sha)));
  assert.ok(calls.every(path => !path.includes('outside')));
  assert.deepEqual(await loadProjectGuidance(async () => assert.fail('Unexpected read'), repository, 'main', [], true), {});
});

test('project guidance prioritizes root and respects the read and byte budgets', async () => {
  const calls: string[] = [];
  const read = async (path: string) => {
    calls.push(path);
    const filename = path.split('/contents/')[1].split('?')[0];
    return contents(filename, filename === 'AGENTS.md' ? '규칙' : 'extra');
  };
  const result = await loadProjectGuidance(read, repository, sha, [{ filename: 'src/file.ts' }], false, 6);
  assert.deepEqual(result, { 'Oddmash/sample/AGENTS.md': '규칙' });
  calls.length = 0;
  await loadProjectGuidance(read, repository, sha, Array.from({ length: 40 }, (_, index) => ({ filename: `package-${index}/file.ts` })), false);
  assert.equal(calls.length, 12);
});
