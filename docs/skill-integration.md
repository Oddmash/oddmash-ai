# Shared skill integration

The organization [working agreements](https://github.com/Oddmash/.github/blob/main/AGENTS.md) and [AI review policy](https://github.com/Oddmash/.github/blob/main/docs/AI-CODE-REVIEW.md) define the operational boundaries. The [skills catalog](../catalog/README.md) defines reusable methods. Product repositories define their own contracts and verification commands.

## Runtime sources

Each assessment uses the compact runtime advisory section of an Oddmash skill. The deployed bundle records one full unified repository commit SHA and the exact `catalog/skills/.../SKILL.md` path for each role. The service reads the bundled text locally. It does not fetch the catalog during a review or load the hands-on procedures and references intended for interactive coding agents.

| Role | Shared skill |
| --- | --- |
| Lead | `oddmash-code-review-collaboration` |
| QA | `oddmash-quality-assurance` |
| Docs | `oddmash-developer-documentation` |
| Impact | `oddmash-product-planning`, Impact guidance |
| Triage | `oddmash-product-planning`, Triage guidance |
| Architect | `oddmash-technical-architecture` |
| Release | `oddmash-release-management` |

Lead also reads the organization agreements and review policy. For PR work, each role reads the project root `AGENTS.md` and eligible guidance along the directories of its selected changed files at the exact PR base SHA. Triage uses the root guide at the verified default-branch commit. QA and Release preparation use the root guide at the verified main candidate. Project guidance must match the returned Git blob hash. Model requests use the existing privacy filters and byte limits. Project guidance reads prioritize the root guide and are limited to forty files for Lead and twelve per specialist assessment. A missing project guide leaves the remaining approved guidance available. Lead stops when GitHub reports an error other than a missing guide.

## Upgrade procedure

1. Review the changes to the relevant runtime advisory sections in the catalog. Fix shared guidance in the catalog first so all consumers can reference the same decision criteria.
2. Set `revision` in `scripts/agent-skill-source.json` to the exact approved unified commit. The commit must be an ancestor of the checked-out revision. Use a full Git history checkout and regenerate the bundle.

   ```sh
   node scripts/bundle-agent-skills.mjs
   node scripts/bundle-agent-skills.mjs --check
   ```

3. Run `node --test scripts/agent-skill-guidance.test.mjs` then review the generated diff and run the offline tests and type check. Open a ready-for-review PR recording the source revision, affected roles, compatibility and evidence. Deploy only through the existing release process.
4. Roll back by reverting the source manifest and bundle update and releasing the reviewed rollback, or rolling back the production deployment through the approved process.

Catalog edits and installation do not automatically change the runtime. A reviewed manifest update and a separately authorized agent release are required. The generator reads Git objects, not mutable working-tree files, and the catalog runtime check compares the committed bundle byte for byte.

## Authority and failure handling

Skills never grant invocation, repository access, posting, merging, or deployment rights. Keep credentials and private source out of shared guidance and review output. If an approved reference is unavailable, report the missing guidance rather than substituting an unreviewed version. Existing reviewer policy, repository authorization, and deployment controls remain unchanged.

## Recurring quality feedback

Use the catalog's [skill improvement proposal workflow](https://github.com/Oddmash/oddmash-skills/blob/main/docs/skill-improvement-proposals.md) for recurring confirmed non-security feedback across separate product PRs. This is a maintainer-reviewed improvement queue, not a change to review, advisory or deployment behavior. Agent comments can supply evidence, but they do not authorize publication or mutate guidance.

Run the proposal helper from this repository using the maintainer's existing authenticated GitHub CLI session. Categorize two to eight distinct public merged PRs, read their review discussions, confirm the same actionable quality problem and inspect the currently owning skill for a genuine shared gap. For example, use the following format with real, verified PR numbers:

```sh
pnpm skills:proposal ui-feedback Oddmash/juliya#123 Oddmash/oddmash-ui#456
````

The command previews the issue or novel evidence comment without writing. After independently verifying the evidence and the proposed gap, rerun the same command with `--confirm-gap --publish` only if authorized to post. The fixed categories are `ui-feedback`, `visual-layout`, `docs-examples`, `test-coverage`, `compatibility`, and `maintainability`. Do not infer that a merged PR validates a particular finding; a maintainer confirms that from the source discussion.

The helper verifies active public product repositories and merged PR identity, rejects private and unsupported references, and uses only fixed text plus public PR permalinks. It identifies the catalog issue by stable skill/category marker, adds only new references, and does not reopen closed issues or publish if history is ambiguous or incomplete. Serialize publication by category and inspect the catalog issue list if a request fails; GitHub issue creation is not atomic with lookup. Do not grant deployed GitHub Apps additional cross-repository access to run this helper.
