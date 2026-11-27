import assert from 'node:assert/strict';
import { test } from 'node:test';
import { runtimeGuidance } from './agent-skill-guidance.mjs';

const title = '## Runtime advisory guidance';
const path = 'catalog/skills/example/SKILL.md';

test('extracts only the bounded runtime section', () => {
  assert.equal(runtimeGuidance(['# Skill', title, '- Keep the API stable.', '## Other', '- Not included.'].join('\n'), undefined, path), '- Keep the API stable.');
});

test('extracts each named role separately', () => {
  const markdown = [title, '### Impact', '- Assess impact.', '### Triage', '- Assess urgency.'].join('\n');
  assert.equal(runtimeGuidance(markdown, 'Impact', path), '- Assess impact.');
  assert.equal(runtimeGuidance(markdown, 'Triage', path), '- Assess urgency.');
  assert.throws(() => runtimeGuidance(markdown, 'QA', path));
  assert.throws(() => runtimeGuidance(markdown, undefined, path));
});

test('rejects missing or duplicate sections, non-bullets and excessive UTF-8 bytes', () => {
  for (const markdown of ['# Skill', [title, '- One.', title, '- Two.'].join('\n'), title + '\nPlain text.', title + '\n- ' + '한'.repeat(801)]) {
    assert.throws(() => runtimeGuidance(markdown, undefined, path));
  }
});
