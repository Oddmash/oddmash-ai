# Install and maintain

Clone this repository into a stable local path. From the checkout, use Python 3.9 or later to run `python3 scripts/install.py` and link all shared skills into `~/.agents/skills`. Use `--target ~/.codex/skills` for an existing installation in that directory. Run the command with `--check` to check the destination without writing. [Codex local skill discovery](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)

For a product without a local copy, install the product playbook into its project skill directory. For Juliya:

```sh
python3 scripts/install.py --product juliya --target /path/to/juliya/.agents/skills
```

The legacy `--product kowrap` selector remains compatible and installs the same playbook under the existing `kowrap-landing` skill name and path. Do not install duplicate copies. The installer refuses collisions, including broken links. Back up an existing skill directory outside all discovery roots before converting it to a link. Start a new Codex session after installation. Updates to already linked skills are immediately visible through the links. After adding new shared skills, rerun the installer to create their links. Review updates before pulling them. The links depend on this clone's location.

Oddmash UI already ships its own project skills. Its central version is available for review here while the original project paths remain active. Use one active copy of each skill. To adopt a revised central playbook in a product repository, review its differences in that repository and update its local copy in a product PR. Product-specific playbooks that are maintained only in their product repository are not installed by this catalogue. Product-specific setup and approval requirements stay in that repository.

## Checks

Submit skill changes as ready-for-review PRs by default under the [shared Git workflow](skills/oddmash-git-workflow/SKILL.md); pending remote CI alone does not require a draft.

This infrastructure repository targets `main` directly from focused topic branches. Skill checks run for main-targeted PRs and cancel superseded PR runs. This Python and Markdown repository has no package dependency install, preview deployment, or production publishing workflow to optimize; adoption by agents remains a separate reviewed immutable-revision update.

```sh
python3 -m unittest discover -s tests
python3 scripts/install.py --validate
```

The validator checks the repository's manifest conventions, names, and relative skill links. Use the Codex skill creator's validator and run relevant [routing evaluation scenarios](docs/skill-evaluation.md) when adding or materially changing skills. Record actual outcomes separately from structural checks.

## Initial source inventory

Shared skills began as the five locally installed Oddmash Codex skills. The Oddmash UI playbook was reviewed against [Oddmash UI](https://github.com/Oddmash/oddmash-ui/tree/edcc43b0bab3e33662eb32c916a93fc2cc2780c9). The [Juliya playbook (formerly Kowrap)](products/kowrap/kowrap-landing/SKILL.md) captures typography and viewport checks exercised in the [landing renewal](https://github.com/Oddmash/juliya/pull/7).
