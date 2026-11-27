# Unified source migration

Oddmash AI is the unified development source for Oddmash Agents and Oddmash Skills. Source integration is complete and verified on main. It is not yet the production deployment source.

| Source | Original revision | Location |
| --- | --- | --- |
| [Agents](https://github.com/Oddmash/oddmash-agents) | `d4e2d16bfe6b637ece4d190080e03cc6f570e2da` | Root application workspace |
| [Skills](https://github.com/Oddmash/oddmash-skills) | `7c929f59afc71008c28156a2cbb5b8d93a6e2a2d` | `catalog/` |

The integration commit preserves both original commits as parents. Its catalog tree is identical to the original Skills tree. Former Skills workflows under catalog/.github remain historical source files and are not active workflows. The root CI validates the catalog independently of the existing Agents checks.

## Independent catalog installation

From the repository root:

```sh
python3 catalog/scripts/install.py --validate
python3 catalog/scripts/install.py --check
python3 catalog/scripts/install.py
```

Keep the clone at a stable path. The installer creates links to the catalog and refuses to overwrite existing skills. Existing installations pointing to the original repository must be migrated deliberately; do not delete them or archive the old repository yet.

## Completed source integration

- Both source histories are retained, with the catalog in `catalog/`.
- Root CI validates the agent workspace and catalog independently.
- The [immutable skill bundle contract](skill-integration.md) pins agent guidance to a reviewed unified commit.
- The [independent catalog release channel](../catalog/DISTRIBUTION.md) is defined separately from agent releases.
- The reviewed [cutover preparation](https://github.com/Oddmash/oddmash-ai/pull/12) passed CI and keeps deployment manual and disabled by default.

## Pending operational migration

- Maintainer configuration and explicit authorization of production qualification, staging and promotion.
- Reviewer enrollment only after the production migration is verified.
- Legacy open work, organization references and installation paths must be reconciled without disrupting contributor PRs or existing consumers.
- Preserve legacy release records and rollback until the verified handoff; do not archive either original repository beforehand.

Track the paused operational work in [issue #11](https://github.com/Oddmash/oddmash-ai/issues/11) and resume using the [cutover checklist](unified-cutover-checklist.md).

The original agents deployment remains authoritative until the maintainer approves the verified cutover. No new application permissions or secrets are required for this source import.
