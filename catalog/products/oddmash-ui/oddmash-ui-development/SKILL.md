---
name: oddmash-ui-development
description: Maintain the Oddmash UI package, including React component contracts, generated design tokens, public exports, and multilingual demo verification.
---

# Oddmash UI development

Read the repository agreements and relevant sections of CONTRIBUTING.md. Establish whether a change belongs to the package or the demo.

- Edit primitive values and semantic aliases under `tokens/`. Keep light and dark semantic keys aligned. Regenerate output and check the diff. Keep consumer-specific layout and colors outside the package.
- Preserve ESM-only output, React 18 and 19 peers, component subpath exports, and the absence of a global reset. Preserve native props, refs, class names, and styles. Update entrypoints, declarations, tests, examples, and docs together when a public contract changes.
- For behavioral work, read [the component interaction checklist](references/interactions.md). For demo or documentation work, read [the demo and localization checklist](references/demo.md) and [developer documentation](../../../skills/oddmash-developer-documentation/SKILL.md). Keep component props and examples derived from public contracts; do not prescribe consumer page composition.
- Use the project commands for token consistency, types, lint, tests, builds, bundle size, and demo build. For visual or interaction changes, run native browser checks in both themes, including keyboard focus and reduced motion. Record browser coverage and gaps.
- For release work, follow the repository's OIDC instructions and version policy. Validate the packed archive in a fresh consumer, including public imports and CSS. Change release or production state only when authorized.

- Apply the shared oddmash-accessibility and oddmash-ux-design criteria to component state contracts; verify skeleton, pending, disabled, empty, error and recovery examples as applicable. Keep data fetching, policy compliance and product-specific state orchestration with the consumer.
