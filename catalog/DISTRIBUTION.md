# Independent Skills distribution

The Skills catalog can be distributed and installed without Node.js, pnpm or a deployed agent.

## Install a catalog archive

Extract the versioned archive to a stable directory. From the extracted `oddmash-skills` directory:

```sh
python3 catalog/scripts/install.py --validate
python3 catalog/scripts/install.py --check
python3 catalog/scripts/install.py
```

The installer links skills to a directory on your machine. Keep the extracted version at a stable path. It does not overwrite existing installations; follow the [migration guide](https://github.com/Oddmash/oddmash-ai/blob/main/docs/unified-source-migration.md) before changing existing links.

## Prepare a catalog version

- Reserve `skills-vMAJOR.MINOR.PATCH` tags for the catalog. Agents retain their existing `vMAJOR.MINOR.PATCH` history and release channel.
- After review and CI, the maintainer may tag the exact approved main revision. Do not reuse published tags.
- The tag-triggered catalog workflow builds a deterministic ZIP, verifies installation and uploads the ZIP and SHA-256 checksum. It cannot publish a release or deploy a service.
- The maintainer may download these artifacts and publish a catalog release, selecting the option not to make it the latest repository release. Do not publish until independent deployment selection has been reviewed for the unified repository.
- A local packaging check is available from the repository root:

```sh
python3 catalog/scripts/package.py --revision <full-commit-sha> --output /path/to/oddmash-skills.zip
```

Use `--tag skills-vMAJOR.MINOR.PATCH` to additionally require a matching stable tag and ancestry from origin/main.

## Rollback

Retain the previously installed catalog version and archive. Restore the previous local source path after deliberate collision-safe migration. Catalog installation never updates an agent runtime bundle; agent runtime adoption and release remain independent.

The existing production Agents deployment remains on the original repository until its approved cutover.
