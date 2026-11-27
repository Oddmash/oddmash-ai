# Unified source cutover checklist

Status: source integration established on a review branch. No production target, application permission, legacy issue or PR has been changed.

## Repository identities and historical source

| Repository | Numeric ID | Treatment |
| --- | --- | --- |
| [oddmash-ai](https://github.com/Oddmash/oddmash-ai) | 1474100040 | Unified development target |
| [oddmash-agents](https://github.com/Oddmash/oddmash-agents) | 1468182609 | Existing production source until approved cutover |
| [oddmash-skills](https://github.com/Oddmash/oddmash-skills) | 1468154482 | Legacy installer and history source |

The Agents Git importer preserved branches and tags. Both original source revisions are ancestors of the integration commit documented in [source migration](unified-source-migration.md). GitHub issue numbers, PR discussion, settings, releases and installation records are not Git history. Old numbered references must be interpreted in their original repository; do not rewrite commits or assume a bare issue number now refers to the new repository.

## Code and operations ownership

| Area | Current reference | Cutover disposition |
| --- | --- | --- |
| Deployment and preparation | `.github/workflows/deploy-vercel.yml`, `.github/workflows/prepare-release.yml`, `scripts/prepare-release.mjs`, release policy and preparation modules | Preserve existing repository/actor/env gates until independent authorization. Validate the new identity and exact reviewed candidate before enabling a new deployment source. |
| App repository routing | `apps/worker/src/webhook.ts`, `review-discussion.ts`, `auto-merge.ts` | Review identity, infrastructure classification and current authorization policy separately. No automatic approval or merge eligibility is implied by migration. |
| Skill improvement queue | `apps/worker/src/skill-proposals.ts` | Redirect to the unified backlog only after existing open proposals are accounted for; preserve privacy, explicit publication and duplicate checks. |
| Adoption metrics | `.github/workflows/public-adoption-metrics.yml`, console adoption view | Preserve historical labels and retained metric semantics; verify collection is not duplicated. |
| Organization links | Oddmash/.github and product repository guides | Update canonical links after the new source is approved. Preserve historical URLs. |
| Installer | Catalog installer and local symlinks | Migrate individual existing links deliberately; do not break or overwrite an existing installation. |

## Open work snapshot

Observed 2026-11-27 KST. Recheck at cutover before transferring or closing anything.

- Agents issues: [#327](https://github.com/Oddmash/oddmash-agents/issues/327), [#309](https://github.com/Oddmash/oddmash-agents/issues/309), [#282](https://github.com/Oddmash/oddmash-agents/issues/282), [#251](https://github.com/Oddmash/oddmash-agents/issues/251). No open Agents PR was returned.
- Skills issues: [#122](https://github.com/Oddmash/oddmash-skills/issues/122), [#120](https://github.com/Oddmash/oddmash-skills/issues/120).
- Skills open PRs: [#123](https://github.com/Oddmash/oddmash-skills/pull/123), [#121](https://github.com/Oddmash/oddmash-skills/pull/121), both authored by arvynoo. Preserve the original PRs and obtain an explicit disposition before moving or taking over this work.

Move open issues only after checking claims and contributor involvement; retain original URLs and historical discussions. Complete or explicitly hand off open PRs in the original repository because Git imports do not transfer their review conversation.

## Ordered cutover gates

1. Merge the verified source integration and reviewed follow-up PRs with normal merge commits. Recheck source main revisions against the original repositories before finalizing the baseline; import any approved later changes without overwriting work.
2. Verify the unified CI aggregate, catalog-only installation, generated immutable bundle and independent release channels on the exact main candidate. Maintain the original development and release paths until this is complete.
3. Inventory existing production settings using authorized operator interfaces. Do not copy credential values into source or issue text. Confirm the existing Vercel project, service URL, queue, auth, telemetry, GitHub App identity and callback contracts.
4. Obtain a reviewed, separately authorized cutover change for the new repository identity, production environment, deployment and repository enrollment. Keep production disabled until a non-production qualification and exact-head smoke check succeed. Never infer additional access from source ownership.
5. Record the last deployed legacy tag and revision. Prepare the first unified Agent release against that baseline, validate the exact tagged main commit and retain a distinct catalog release channel.
6. Promote the verified production revision through the existing authorized procedure. Verify service health, existing console access, queue processing and bounded telemetry without changing public endpoints or increasing app permissions. Stop and revert to the known working production assignment on failure.
7. Update organization references and installation guidance, reconcile open work, and retain old release notes and PR permalinks. Only after a separately approved, verified handoff consider archiving old repositories. Never delete them as a migration shortcut.

## Rollback

Keep the original service and repository deployment settings intact until qualification. In case of a failed promotion, restore the last verified production deployment using its existing approved rollback procedure. Catalog installations and historical archive versions remain independent of runtime rollback.
