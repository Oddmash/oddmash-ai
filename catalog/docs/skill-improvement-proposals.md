# Skill improvement proposals

Shared guidance improves through a separate maintainer-reviewed backlog in this repository. Reviewers and specialists can identify recurring quality gaps in product reviews. An individual defect belongs to the product issue or PR; repeated evidence of inadequate reusable guidance belongs here.

## When to propose

- Verify at least two distinct merged product PRs independently: inspect the source discussion, accepted fix and relevant verification. A merged PR or repeated unverified bot opinion is insufficient.
- Confirm the same ordinary product-quality problem recurs and that existing shared guidance does not already cover it adequately. Prefer correcting skill ownership, activation or conflicting defaults over adding product-specific exceptions.
- Choose one owning skill and category from the agent proposal helper. Use its fixed category and public PR permalink only; omit private repository identities, source, patch excerpts, review text, user data, logs, credentials and security findings. Discuss confidential cases privately without copying them into this backlog.

## Submission and deduplication

A maintainer can preview and then explicitly publish a candidate using the helper in [Oddmash Agents](https://github.com/Oddmash/oddmash-agents/blob/main/docs/skill-integration.md#recurring-quality-feedback). It creates an issue with one stable category and owning skill marker, or appends only new references to an existing open issue. Search the existing backlog for semantically overlapping proposals before publication; the marker deduplicates the exact category, not different phrasing or unrelated issue classes. Resolve overlapping proposals and label or link them as appropriate. Serialize publication per category, and inspect existing issues after any uncertain request outcome. Closed proposals require a fresh maintainer decision before reopening or creating a replacement.

The helper deliberately uses a maintainer's existing GitHub session, not a deployed agent token. No additional installation access, automatic skill modification, deployment, merge or approval follows from a proposal. Do not permit model-generated free-form issue bodies or automatic transfer of private review data.

## Review and adoption

1. Confirm the shared gap and owning skill. Reject unsupported generalizations or cases already covered by existing guidance; keep the product issue separate.
2. Open a focused linked PR changing the owning skill, with representative positive and negative cases. Verify instruction precedence, activation boundaries, compatibility, installation and realistic usage. Keep paths and names stable.
3. Merge under the repository's existing review and CI policy. Close the proposal only after the shared guidance change is accepted or record why it is rejected.
4. Each consumer upgrades its exact reference to the reviewed immutable revision in a separate reviewed PR with regression evidence. Runtime consumption requires its own approved implementation and deployment. Never fetch mutable remote guidance into live review prompts.
5. Revert the catalog change or affected consumer reference independently if a regression appears.
