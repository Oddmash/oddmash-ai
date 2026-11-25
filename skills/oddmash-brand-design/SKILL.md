---
name: oddmash-brand-design
description: Establish or review Oddmash visual direction for websites and product interfaces, including product-specific landing pages, brand geometry, semantic color, multilingual typography, and responsive hierarchy.
---

# Oddmash brand design

Read the product's visual baseline. For interfaces using Oddmash UI, inspect the shared tokens and the product's semantic overrides. Treat the individual product's identity as the primary design system: derive its palette, typography, geometry, imagery, layout rhythm, and visual examples from its purpose, audience, and existing assets. Use shared Oddmash tokens and components as adaptable defaults, not a mandatory visual theme or fixed composition. If no identity exists, establish a product-specific direction before implementation. Do not copy an unrelated product's palette or use the organization ribbon as decoration by default.

For new or substantially revised landing pages, read [product-specific website direction](references/product-website-direction.md) before choosing a composition or writing code. Derive the direction from the real product and apply its rendered acceptance checks even when the request only says to make a landing page.

- Where the Oddmash ribbon is part of the product identity, study the approved mark before deriving shapes. Its distinctive cues are continuity through the folds, adjoining front and reverse planes, and the change of light at each bend. Use those cues to mark a real boundary, direction, or grouping. Review the main scene with decorative marks hidden. If the remaining layout has no product-specific focal point, revise the composition.
- Use contrast and hierarchy before extra ornament. When using the shared neutral palette, reserve blue for focus and red for errors; otherwise select accessible semantic colors that fit the product. Preserve meaningful product-specific colors and encode states in more than one visual channel where needed.
- Ground the hero in a real product artifact, such as a verified code example, actual interface or gameplay. Avoid generic marketing layouts made from repeated eyebrow labels, oversized slogans, decorative metrics, gradients, and interchangeable card grids. Do not treat this as a ban on useful cards or product-specific visual effects; choose the layout according to the actual content and task.
- Choose display, body, UI, and code faces by role. Geist Sans and Geist Mono are useful starting points in the shared system. Check actual glyph coverage, mixed-script line breaks, fallback, transfer size, and the license before committing font assets.
- For eligible Korean, English, Japanese or Simplified Chinese prose where the verified release supports the locale, apply [Juliya typography and adoption](../oddmash-internationalization/references/korean-typography.md); judge semantic line breaks with actual type and measured layout, not hardcoded line breaks or a visual guess.
- Compare real renders at narrow and desktop widths, including long labels and visible focus. Keep product-specific styling in the consumer. Promote an abstraction into Oddmash UI once more than one product demonstrates the same stable need.

For a motion brief, use the [motion design skill](../oddmash-motion-design/SKILL.md).

Use [web delivery](../oddmash-web-delivery/SKILL.md) for framework and delivery choices, [developer documentation](../oddmash-developer-documentation/SKILL.md) for public API content, and [visual clarity](../oddmash-visual-clarity/SKILL.md) for independent rendered assessment.

- Review complete interaction states using actual token pairs in every supported theme, including skeleton, disabled, pending, warning, error, success, focus and selected. Check contrast and non-color cues with [accessibility](../oddmash-accessibility/SKILL.md); document font, icon and asset rights with [copyright and licensing](../oddmash-copyright-licensing/SKILL.md).

## Shared visual language

Apply the product's existing semantic tokens first. Use these defaults for roles the product has yet to define.

- **Geometry** varies by role. Start at 6 px for compact controls, 8 px for standard buttons and inputs, 12 px for cards and code blocks, 16 px for overlays and 24 px for a prominent product preview. Use pills for elements with a meaningful capsule shape, such as compact chips. When one outlined surface sits inside another, account for the inset so their corners align.
- **Spacing** makes related elements read as a group. Keep icon and label gaps compact, give controls and containers enough inset for their content, and make the gap between groups visibly larger than the gaps inside them. Use the product spacing scale and check the rhythm with wrapped labels on narrow screens.
- **Surfaces** express hierarchy through the page background, quiet borders and elevation where overlap conveys a distinct layer, such as a menu or dialog. Keep related content on a shared surface when individual card borders add visual noise. Check surface boundaries and focus rings in each supported theme.
- **Product exceptions** follow the task. Keep precise grids, code demonstrations and dense toolbars aligned to their underlying geometry. A product can choose squarer or rounder shapes, tighter spacing or stronger surface separation when its identity or workflow needs them. Record that reason in the product guidance and compare real renders at narrow and desktop widths.
