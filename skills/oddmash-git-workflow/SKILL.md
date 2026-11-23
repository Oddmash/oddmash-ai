---
name: oddmash-git-workflow
description: Follow Oddmash Git and GitHub collaboration rules for branches, commits, issues, pull requests, review, merge, tags, releases and repository hygiene.
---

# Oddmash git workflow

Read the [organization agreements](https://github.com/Oddmash/.github/blob/main/AGENTS.md), target AGENTS.md, CONTRIBUTING.md, templates and branch/release rules first. Those documents and enforced protections govern authority; this skill is a reusable workflow, not a waiver.

- Verify checkout path, remote owner/name, current branch, base revision and status before edits. Preserve existing user work, unrelated changes and authorship. Fetch using normal authorized access when available; do not assume stale local state is current.
- Link or create a relevant issue when authorized and required; use the repository templates and avoid duplicates. Use a focused branch from the verified base. Follow local naming rules; absent a convention, prefer feat/, fix/, docs/, refactor/, test/ or chore/ with a concise lowercase slug.
- Keep commits atomic and meaningful; follow repository convention, default to concise English imperative subjects. Stage intended paths only, inspect diff and status, exclude secrets, generated output unless required, and unrelated changes. Never rewrite shared history or discard user changes without explicit approval.
- Use English public issue/PR titles, bodies, review replies, commits and changelogs. Describe scope, rationale, linked issue, verification evidence, screenshots when applicable, compatibility/privacy/permissions and release implications. Open PRs ready for review by default, including while remote CI or review is pending. Only use a draft for an explicit request, materially incomplete implementation or missing essential evidence that would mislead review; record the reason and mark ready when resolved. Never treat ready status as approval or permission to merge.
- Run the target repository checks and inspect exact-head CI and review evidence. Address genuine findings with regression tests; request re-review after changes per [review collaboration](../oddmash-code-review-collaboration/SKILL.md). Never fabricate checks, bypass branch protection or approve on behalf of a reviewer.
- Use normal merge commits for PR merges unless the maintainer explicitly requests another method. Do not auto-merge external contributions. Private PRs are eligible only if the current organization policy explicitly permits their repository identity and low-risk paths; any maintainer-authorized automated merging must satisfy the separate gated policy and exact-head checks. Do not merge or publish merely because a skill was invoked.
- Derive tags/releases from the repository version policy and exact merged revision. Verify release artifacts using [release management](../oddmash-release-management/SKILL.md). Prefer a new revert or corrective PR for shared history; stop on conflicts or ambiguous destructive operations rather than force-pushing.
- Report branch, commit/PR links, exact head, checks, review state and remaining blockers. Distinguish local, remote, merged and released status.
