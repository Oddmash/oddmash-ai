import { appendFileSync } from 'node:fs';
import { validateRelease } from '../apps/worker/src/release-policy.ts';

const token = process.env.GITHUB_TOKEN;
if (!token) throw new Error('Read-only GitHub token is required');
const api = async path => {
  const response = await fetch('https://api.github.com' + path, { headers: { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' }, redirect: 'error', signal: AbortSignal.timeout(15_000) });
  if (!response.ok) throw new Error('Release metadata could not be verified');
  return response.json();
};
const { tag, commit } = await validateRelease({ repository: process.env.GITHUB_REPOSITORY ?? '', repositoryId: process.env.GITHUB_REPOSITORY_ID ?? '', actorId: process.env.GITHUB_ACTOR_ID ?? '', event: process.env.GITHUB_EVENT_NAME ?? '', ref: process.env.GITHUB_REF ?? '', eventSha: process.env.GITHUB_SHA ?? '', tag: process.env.RELEASE_TAG ?? '', expectedCommit: process.env.EXPECTED_RELEASE_COMMIT }, api);
console.log(`Verified release ${tag} at ${commit}`);
if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `tag=${tag}\ncommit=${commit}\n`);
