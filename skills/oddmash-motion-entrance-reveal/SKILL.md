---
name: oddmash-motion-entrance-reveal
description: Design and implement staged hero entrances, staggered content reveals, and scroll-triggered section introductions with readable initial content and reduced motion.
---

# Entrance and reveal

Choose a principal visual and an intentional order using [motion design](../oddmash-motion-design/SKILL.md). Make the product understandable even if scripting or animation fails.

- For a hero, order the entrance by meaning: title, supporting explanation and first action, then the actual product proof. Favor two to four groups and a complete reveal under about 700 ms. Start at a subtle 6 to 16 px translation and 180 to 420 ms ease-out, with 40 to 90 ms stagger. Adapt to the product instead of applying the same entrance everywhere.
- For scroll-triggered sections, use a one-time viewport entrance only where it helps distinguish the next section. Keep real content in normal flow; do not hide it indefinitely pending JavaScript, repeat on every scroll or tie reading to scroll position.
- Animate opacity and a separate visual transform rather than dimensions, layout-critical geometry or focus targets. Keep the primary action immediately operable and avoid shifts of surrounding content.
- Prefer CSS for simple entrance; use an observer only for meaningful viewport triggers. Cancel work on unmount, handle deep links and restored scroll positions, and use a static immediate state for reduced motion.
- Verify first paint, keyboard focus before reveal finishes, rapid scroll, mobile widths, no JS/fallback where applicable and reduced motion. Inspect actual initial and settled renders, not only the presence of CSS keyframes.
