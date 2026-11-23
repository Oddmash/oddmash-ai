---
name: oddmash-web-delivery
description: Deliver a scoped Oddmash website or frontend change, from repository checks and component ownership through browser verification and review evidence.
---

# Oddmash web delivery

Inspect the target checkout, remote, base branch, and user changes. Read the target AGENTS.md and use its runtime and verification commands.

- Decide which boundary owns the change. Use existing Oddmash UI controls when their interaction contract fits, and keep product-specific layout, branding, and behavior with the consumer. Use the package's local maintenance instructions for public exports or token changes.
- Follow the normal application entry point. Preserve supported URLs and interaction contracts. Match tests to risk: native input and keyboard behavior, narrow layouts, rendering and hydration, fonts, or deployment base paths as applicable.
- When users can interact while state changes, verify the result they see and the action they can take next. Include failure paths and a browser difference when technically relevant.
- Record the tested revision, exact commands, observations, and gaps. Distinguish local checks, remote CI, and deployment. Project guidance does not grant permission to merge, publish, or deploy.

- For every changed rendered surface, use [UX design](../oddmash-ux-design/SKILL.md) to enumerate states and [accessibility](../oddmash-accessibility/SKILL.md) to define criterion-level checks. Implement stable skeleton geometry or meaningful progress for applicable loading, separate initial load from refresh, show retryable errors, preserve input, and avoid layout shift and redundant updates.
- Verify real mobile/desktop widths, touch and keyboard, light/dark/system themes where supported, long localized labels, text resize, slow/offline network, partial responses and async races. Include focus restoration, scrolling, sticky overlays, safe-area insets, image fallbacks, forms and error boundaries.
- Check metadata, locale, canonical URLs, social previews, favicon, broken links, robots/sitemap and noindex for private or preview pages where relevant. Verify accessible policy/support links and actual consent behavior where applicable; never introduce tracking by default.
- Apply [security and privacy](../oddmash-security-privacy/SKILL.md), [copyright and licensing](../oddmash-copyright-licensing/SKILL.md), and [quality assurance](../oddmash-quality-assurance/SKILL.md) to affected data/asset/verification boundaries. Treat unresolved material risks as release blockers.
