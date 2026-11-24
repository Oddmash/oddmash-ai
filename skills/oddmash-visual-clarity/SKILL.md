---
name: oddmash-visual-clarity
description: Evaluate and improve visual hierarchy, legibility, readability and discoverability in Oddmash interfaces and product graphics.
---

# Oddmash visual clarity

Inspect the rendered interface at representative desktop and narrow widths. Identify the primary task and what must be noticed first.

- Establish hierarchy through spacing, size, weight and contrast. Avoid competing accents, excessive bold text, decorative cards and repeated headings. Use product tokens and real Korean and English content.
- Preserve legibility under wrapping, zoom and localization. Check density, alignment and clipping. Keep essential information available without hover or motion.
- Distinguish actions, selection, error and success visibly without relying on color alone.
- Use intentional motion to demonstrate real changes; keep content legible and provide pause, reduced-motion and offscreen behavior.
- Compare screenshots and actual tasks. Distinguish observed defects from aesthetic preferences.

- Audit final geometry across skeleton, loading and loaded states, consistent control heights/padding/icon alignment, focus rings, truncation with accessible access to complete content, responsive spacing, safe areas, scroll and overlay layering. Compare empty/error and dense content alongside the happy path. Keep placeholders and decorative motion subordinate to meaningful content.

## Subtractive visual review

- Before adding or retaining a label, metric, badge, progress indicator, explanatory sentence or control, identify the specific user decision it supports. Remove it when the result, adjacent content or existing control communicates the same information. Keep essential accessibility semantics and measured values needed for an actual input constraint.
- Inspect the entire rendered page at desktop, representative mobile and the narrow supported breakpoint. Then inspect high-risk components at their actual allocated width, including tab lists, toolbars, copy buttons and overlays. Check both axes of internal overflow, alignment and clipping; do not accept document-level reflow alone. Reserve scrollbar behavior for intentionally scrollable content such as long code, not ordinary controls.
- Review the initial, transitioning and settled visual states. A successful interaction test is not a visual approval. Record concrete defects and resolve them before considering the surface ready.
