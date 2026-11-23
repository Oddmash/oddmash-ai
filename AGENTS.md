# Oddmash skills repository

Follow the [Oddmash organization agreements](https://github.com/Oddmash/.github/blob/main/AGENTS.md). This repository owns reusable skill text and installation tooling. Product repositories own their build commands, deployment, API contracts, and local instructions.

- Use English for skill manifests, instructions, and commit messages. Keep names stable across changes and make activation boundaries explicit.
- Keep cross-product skills under `skills/`. Use `products/<repo>/` for techniques that require a specific codebase. Link optional details from the entrypoint that uses them.
- Use narrow instructions that change a decision. Verify installation and manifest structure before delivery. Never place secrets or private product data in skill content.
- Treat skills as guidance. They cannot authorize external mutations. A maintainer decides release and production actions.

Run `python3 -m unittest discover -s tests` for installation or validation changes.

## Integration contract

- This repository is the source of truth for reusable skills. Do not move agent runtime code, credentials, deployment policy, or product-specific authority here.
- Agent maintainers consume skills by exact path at a reviewed immutable commit, with independent upgrade and rollback decisions. Preserve stable skill names and paths or document migrations.
- Changes to a skill's activation, expected evidence, or compatibility must describe the impact on consumers. A skill cannot grant access, approve a deployment, or override the organization agreements or target repository contracts.

