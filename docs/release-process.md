# Production release process

Keep feature pull requests targeting `main`. Required CI and review remain the same. A merge neither creates a preview deployment nor deploys production automatically.

1. Review all changes accumulated since the last deployed version. Decide the next stable SemVer tag (for example, `v0.2.0` or `v0.2.1`).
2. Prepare release notes from merged pull requests. Use GitHub's generated release notes as a starting point and the Oddmash Release advisor for draft wording, verification and compatibility notes. The Release advisor does not publish or deploy.
3. Publish the GitHub Release manually as the authorized maintainer, targeting the reviewed `main` commit. Use a stable `vMAJOR.MINOR.PATCH` tag. The tag, not the moving branch, identifies the deployed version.
4. The deployment workflow selects the highest published stable Agent SemVer release (the `vMAJOR.MINOR.PATCH` channel) independently of catalog releases and validates its exact tag commit, then checks that the commit belongs to `main` history. It reuses completed full type checks and tests from a successful `main` CI run on the exact release commit when the run records that revision. Otherwise it runs both checks in the deployment workflow. The workflow stages the Vercel production build, smoke-tests it and promotes only the tested build. The production environment and deployment enable switch still apply.
5. Inspect the workflow summary for the tag, commit and Vercel deployment. If the release failed, the previous production deployment remains assigned. If a higher stable Agent version has already been published, the old release cannot be redeployed or promoted by this workflow.

For an urgent fix, merge the reviewed patch and publish the next patch release immediately. To retry the latest release if tag-triggered execution is unavailable under the existing production environment rules, run the deployment workflow manually from `main` with the exact published release tag. Never bypass the environment or publish a tag from an unreviewed branch. Leave rollback to the existing authorized Vercel rollback process.

Choose a release cadence based on completed work, not on every commit. Do not publish a new version for documentation or test-only changes unless those changes are part of a user-visible release.

## Unified repository migration

The `skills-vMAJOR.MINOR.PATCH` channel is independent. Catalog versions, drafts and prereleases do not participate in Agent release selection. The selector enumerates up to ten pages of published release metadata and fails closed if the collection cannot be completely verified. The highest supported stable Agent SemVer is selected numerically, not by repository-wide latest metadata.

Imported historical agent tags remain unchanged; GitHub Release objects remain in the original repository. Establish the first new Agent release from a reviewed main candidate using the actual last deployed legacy revision as the comparison baseline and document its verification manually. The existing production repository and authorization guards remain unchanged until the reviewed cutover. Do not publish new Agent releases from the unified target before that cutover is approved.

## Release note format

Write release titles and notes in English. Use the title `vMAJOR.MINOR.PATCH - Short description` and the exact matching stable tag. Use the next patch for compatible fixes, minor for compatible capabilities, and major for breaking changes to established stable contracts; during the initial 0.x lifecycle, explicitly identify breaking changes and their migration requirements, even when the minor version changes.

Follow the [shared Oddmash release note format](https://github.com/Oddmash/.github/blob/main/docs/release-notes.md), retaining the product-specific sections below.

Start with GitHub-generated notes from the previous published tag (or the reviewed initial history for the first release). Check the actual merged PRs and tagged revision; do not copy generated notes blindly. The categories in `.github/release.yml` are the source for grouping changes.

- Summarize the most meaningful changes in one or two sentences.
- Describe outcomes, not implementation trivia. Link each material change to its merged PR (for example, `#108`); credit verified external contributors in the final acknowledgment rather than mentioning them inline.
- Use the generated category names and omit empty change categories. Avoid listing a change twice.
- Under Operations, disclose configuration opt-ins, permission or data changes, breaking changes, migration steps and known limitations when applicable. State "No configuration or migration changes" when verified and applicable. Do not include secrets or internal values.
- Under Verification, distinguish completed checks from deploy-time checks that are pending when publishing. Record the full release commit SHA. After deployment, link the workflow run and record the actual result; never claim success before it is observed.
- Include a full changelog comparison link when a previous release exists. Do not manufacture a previous tag or version.
- End the body with a single acknowledgment containing only verified external human contributor @mentions. Omit it if no external contributors participated; remove internal and bot @mentions from generated notes. GitHub renders native Contributors avatars below the body. Verify them after authorized publication.

### Copyable Markdown template

Replace all placeholders and remove unused change sections before publishing. The title is entered separately.

```markdown
## Highlights

<One or two sentences describing the release.>

## Features and improvements

- <User-facing or operational improvement> (#PR)

## Fixes

- <Corrected behavior> (#PR)

## Documentation

- <Material documentation change> (#PR)

## Maintenance and tests

- <Maintenance, CI, or test improvement> (#PR)

## Other changes

- <Other material change> (#PR)

## Operations

- <Configuration, compatibility, migration, or known limitation>

## Verification

- Release commit: `<full commit SHA>`
- CI: <actual result and link>
- Production deployment: <Pending at publication, then actual result and workflow link>

**Full changelog:** <comparison URL from previous tag to new tag, if available>

Thanks to <verified external GitHub @mentions, if applicable>.
```

The first published release, [v0.2.0](https://github.com/Oddmash/oddmash-agents/releases/tag/v0.2.0), is a historical reference. Apply this format to subsequent releases without rewriting existing release records.
