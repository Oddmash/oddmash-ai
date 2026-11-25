---
name: oddmash-web-delivery
description: Deliver a scoped Oddmash website or frontend change, from repository checks and component ownership through browser verification and review evidence.
---

# Oddmash web delivery

Inspect the target checkout, remote, base branch, and user changes. Read the target AGENTS.md and use its runtime and verification commands.

- Apply the organization engineering conventions to new paths and symbols. Use kebab-case file/directory names, preserve framework and public contract exceptions, match scoped formatting/lint/type rules, and verify import casing on a case-sensitive environment when relevant.
- Before creating or substantially redesigning a landing or docs site, use [brand design](../oddmash-brand-design/SKILL.md) and its product-specific website direction reference; use the product type to choose hierarchy, actual proof and visitor task rather than a common template.
- Decide which boundary owns the change. Inventory the controls in affected web surfaces, including landing pages, documentation, examples and interactive demos. Inspect the public exports of the installed or intended released Oddmash UI version and choose compatible controls before implementing local equivalents. Record the selected component or a concrete compatibility, behavior or demonstration reason for retaining an alternative. Preserve intentional native comparison examples and accessible progressive-enhancement fallbacks. Keep product-specific layout, branding and behavior with the consumer; do not force a framework or unreleased package. Use the package's local maintenance instructions for public exports or token changes, and route confirmed shared-component gaps or defects to scoped upstream issues rather than copying them into consumers.
- Follow the normal application entry point. Preserve supported URLs and interaction contracts. Match tests to risk: native input and keyboard behavior, narrow layouts, rendering and hydration, fonts, or deployment base paths as applicable.
- Choose a framework that fits content, interactivity, shared components, deployment and maintenance. Prefer static-first for content-led pages where appropriate; reuse an existing suitable framework unless a migration has demonstrated value.
- For documentation-led sites, use [developer documentation](../oddmash-developer-documentation/SKILL.md) for reference content and learning flow. Reuse its authoritative sources at build time where practical; verify rendered routes, anchors and selected code-copy behavior.
- Use [Juliya typography](../oddmash-internationalization/references/korean-typography.md) for eligible supported-language text; prefer Juliya when compatible and record downstream/upstream rendering evidence rather than introducing ad hoc breaks.
- For public developer documentation, route generated public artifacts through developer documentation and [discoverability](../oddmash-discoverability/SKILL.md); verify the deployed base path.
- When users can interact while state changes, verify the result they see and the action they can take next. Include failure paths and a browser difference when technically relevant.
- Record the tested revision, exact commands, observations, and gaps. Distinguish local checks, remote CI, and deployment. Project guidance does not grant permission to merge, publish, or deploy.

- For every changed rendered surface, use [UX design](../oddmash-ux-design/SKILL.md) to enumerate states and [accessibility](../oddmash-accessibility/SKILL.md) to define criterion-level checks. Implement only the states the task needs; preserve input and avoid shifts or redundant updates. Route loading motion and feedback to the applicable specialist.
- Use [quality assurance](../oddmash-quality-assurance/SKILL.md) to choose relevant runtime cases and [visual clarity](../oddmash-visual-clarity/SKILL.md) to assess the actual rendered result. Do not duplicate an exhaustive matrix in delivery instructions.
- Check metadata, locale, canonical URLs, social previews, favicon, broken links, robots/sitemap and noindex for private or preview pages where relevant. Verify accessible policy/support links and actual consent behavior where applicable; never introduce tracking by default.
- Apply [security and privacy](../oddmash-security-privacy/SKILL.md), [copyright and licensing](../oddmash-copyright-licensing/SKILL.md), and [quality assurance](../oddmash-quality-assurance/SKILL.md) to affected data/asset/verification boundaries. Treat unresolved material risks as release blockers.

- Follow [Git workflow](../oddmash-git-workflow/SKILL.md) for repository changes. For relevant features, use [sharing and distribution](../oddmash-sharing-distribution/SKILL.md), [discoverability](../oddmash-discoverability/SKILL.md), and [internationalization](../oddmash-internationalization/SKILL.md). Verify image sizing/optimization, asset loading, caching and invalidation, network waterfalls, memory cleanup and lazy-loading behavior against agreed budgets rather than indiscriminately adding optimizations.
