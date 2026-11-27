type Api = <T>(path: string) => Promise<T>;
type Release = { tag_name: string; draft: boolean; prerelease: boolean; published_at: string | null };
type Commit = { sha: string };
type Comparison = { status: string; behind_by: number; merge_base_commit?: { sha: string } };
type Selection = { repository: string; actorId: string; event: string; ref: string; eventSha: string; tag: string; expectedCommit?: string };

export const stableAgentTag = /^v(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)$/;
const commitSha = /^[a-f0-9]{40}$/;

export async function latestAgentRelease(api: Api, root: string): Promise<Release> {
  const seen = new Set<string>();
  let latest: Release | undefined;
  const newer = (left: string, right: string): boolean => {
    const a = left.slice(1).split('.').map(BigInt);
    const b = right.slice(1).split('.').map(BigInt);
    for (let i = 0; i < 3; i++) {
      if (a[i] !== b[i]) return a[i] > b[i];
    }
    return false;
  };
  for (let page = 1; page <= 10; page++) {
    const releases = await api<Release[]>(root + '/releases?per_page=100&page=' + page);
    if (!Array.isArray(releases) || releases.length > 100) throw new Error('Invalid release collection');
    for (const release of releases) {
      if (!release || typeof release.tag_name !== 'string' || typeof release.draft !== 'boolean' || typeof release.prerelease !== 'boolean' || (release.published_at !== null && typeof release.published_at !== 'string')) throw new Error('Invalid release metadata');
      if (seen.has(release.tag_name)) throw new Error('Release collection changed during enumeration');
      seen.add(release.tag_name);
      if (release.tag_name.length > 64 || !stableAgentTag.test(release.tag_name) || release.draft || release.prerelease || !release.published_at) continue;
      if (!latest || newer(release.tag_name, latest.tag_name)) latest = release;
    }
    if (releases.length < 100) {
      if (!latest) throw new Error('No published stable Agent release is available');
      return latest;
    }
  }
  throw new Error('Release enumeration is incomplete');
}

export async function validateRelease(selection: Selection, api: Api): Promise<{ tag: string; commit: string }> {
  const { repository, actorId, event, ref, eventSha, tag, expectedCommit } = selection;
  if (repository !== 'Oddmash/oddmash-agents' || actorId !== '135234546') throw new Error('Unauthorized release repository or actor');
  if (tag.length > 64 || !stableAgentTag.test(tag)) throw new Error('Only stable vMAJOR.MINOR.PATCH release tags are supported');
  if (event === 'release' ? ref !== `refs/tags/${tag}` || !commitSha.test(eventSha) : event !== 'workflow_dispatch' || ref !== 'refs/heads/main') throw new Error('Release event or dispatch reference is ineligible');
  const root = '/repos/' + repository;
  const release = await latestAgentRelease(api, root);
  if (!release || release.tag_name !== tag || release.draft !== false || release.prerelease !== false || !release.published_at) throw new Error('Only the highest published stable Agent release can be deployed');
  const resolved = await api<Commit>(root + '/commits/' + tag);
  const commit = resolved?.sha;
  if (!commitSha.test(commit ?? '') || (event === 'release' && commit !== eventSha) || (expectedCommit && commit !== expectedCommit)) throw new Error('Release tag no longer matches the expected commit');
  const comparison = await api<Comparison>(root + '/compare/' + commit + '...main');
  if (!['ahead', 'identical'].includes(comparison.status) || comparison.behind_by !== 0 || comparison.merge_base_commit?.sha !== commit) throw new Error('Release commit is not part of main history');
  return { tag, commit };
}
