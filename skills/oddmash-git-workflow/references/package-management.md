# Ecosystem-aware package management

Read the package management section of the [organization agreements](https://github.com/Oddmash/.github/blob/main/AGENTS.md) and repository agreements. Use the language-appropriate tool and project-declared version; the organization policy owns the default pnpm pin.

- Inventory independent package roots, existing lockfiles, workspace membership, scripts, CI, deployment, release workflows, docs and open PRs before migration. Preserve in-flight work and use a focused PR.
- Default JS/TS roots to pnpm. Declare the exact version in `package.json#packageManager` and commit the matching `pnpm-lock.yaml`. Use the project's documented compatibility exception when applicable; do not forcibly convert other ecosystems.
- For other languages, retain ecosystem-appropriate tools, version declarations and lockfiles or equivalent reproducible dependency metadata. Mixed-language repositories may use multiple appropriate tools at distinct roots.
- Use locked or frozen installations where supported in CI and deployment, with correct workdirs and lockfile cache keys. Review dependency build-script permissions and workspace boundaries. For pnpm use `pnpm install --frozen-lockfile`.
- Preserve resolved dependency versions and integrity, runtime support, consumer compatibility fixtures and existing publishing channels. For pnpm-managed roots use pnpm for internal scripts and contributor setup; preserve external npm, Yarn and Bun examples.
- Run applicable clean locked install, lint, typecheck, tests, build, runtime/browser matrix, packaging and non-publishing release validation. Review exact-head CI and findings. A changed lockfile or workflow is not eligible for unattended merging simply because its checks pass.
