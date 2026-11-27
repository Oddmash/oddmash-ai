# Unified source migration

This repository is the integration target for Oddmash Agents and Oddmash Skills. It is not yet the production deployment source.

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

## Remaining migration

- Establish an explicit catalog/runtime compatibility contract and reviewed immutable bundles.
- Update repository identity references, scoped CI and independent release channels in separate reviewed changes.
- Preserve existing release records, open work and installation paths.
- Verify the new production target separately before switching any existing deployment or archiving the original repositories.

The original agents deployment remains authoritative until the maintainer approves the verified cutover. No new application permissions or secrets are required for this source import.
