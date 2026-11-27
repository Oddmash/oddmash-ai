---
name: kowrap-landing
description: Design, change or verify the Juliya (formerly Kowrap) landing, supported-language typography, genuine browser line-break demonstrations and public developer documentation.
---

# Juliya landing and docs

Read Juliya's AGENTS.md and CONTRIBUTING.md and the latest maintainer brief. Preserve the published engine/API contract, Next.js static export, deployment base path and the site/engine boundary.

Keep the installed `kowrap-landing` identifier for compatibility; use the current product name, package exports and repository in new examples.

## Product proof and scope

- Make the benefit unmistakable: Eligible supported-language text reflows at equal real measured widths and typography when Juliya improves native wrapping. Use actual native and the current supported API layout with meaningful sample text. Include a case where native wrapping already works; never claim improvement when the measured layouts are equal. Do not invent word positions or fake a difference. Keep the engine result, visible text, code and explanation in sync.
- Choose the presentation with [product planning](../../../skills/oddmash-product-planning/SKILL.md), [UX design](../../../skills/oddmash-ux-design/SKILL.md) and [brand design](../../../skills/oddmash-brand-design/SKILL.md). The current direction favors one surface that visibly transforms from native wrapping to Juliya. Side-by-side results are useful for the detailed playground when the visitor needs simultaneous inspection. Neither panel count, viewport height nor previously implemented UI is an invariant; revise the composition when the user goal changes.
- Keep the landing's product proof and its next action distinct from the editor and docs. Expose advanced editor controls only when they help a real comparison, and show actual width if a user-requested width is clamped. Do not add example selectors, counters, progress chrome or duplicate controls merely because a previous version had them.
- When motion communicates the benefit, use [motion design](../../../skills/oddmash-motion-design/SKILL.md) and [layout transitions](../../../skills/oddmash-motion-layout-transition/SKILL.md). Measure both genuine layouts, commit the destination, and animate visual word positions without overlapping, duplicate accessible text or changing measured geometry. For a repeating sequence, use [content transitions](../../../skills/oddmash-motion-content-transition/SKILL.md) and a minimal discoverable interruption mechanism; preserve the static reduced-motion result and pause offscreen. Choose a finite sequence if continuous motion is not necessary or requested.
- Keep supported-language typography legible, preserve font provenance/fallback and remeasure when fonts load. If edited copy changes a subsetted font, update the subset. Apply [Korean typography](../../../skills/oddmash-internationalization/references/korean-typography.md) and route actual engine regressions upstream with evidence.

## Documentation and evidence

- Use [developer documentation](../../../skills/oddmash-developer-documentation/SKILL.md) for API references and real examples. Derive requirements and defaults from public TypeScript contracts; favor compact inline required marking instead of a separate badge column unless the task warrants it. Use actual pixel measurement in Core examples; copy only the selected command or code and use existing Oddmash UI feedback where useful.
- Apply [visual clarity](../../../skills/oddmash-visual-clarity/SKILL.md) and [quality assurance](../../../skills/oddmash-quality-assurance/SKILL.md) for the complete rendered site, including initial/transition/settled proof, keyboard and motion preferences, desktop and supported narrow layouts. Verify equal native/Juliya constraints, real destination geometry, actual code copy, published API/docs parity, font failure, static export and base-path links in the repository's Chromium, Firefox and WebKit checks. Do not assert previously removed buttons or panel counts as product requirements.
