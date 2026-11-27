---
name: oddmash-motion-layout-transition
description: Implement measured layout transitions, reflow, FLIP, boundary and resize feedback, comparison replay, and shared-element motion without distorting real layout.
---

# Layout and geometry transition

Use [motion implementation](../oddmash-motion-implementation/SKILL.md) and separate committed geometry from animation.

- Commit layout and the actual result immediately. Obtain real source and destination geometry under equivalent rendering constraints; calculate the motion vector from those measurements rather than invented offsets.
- For a moving item, measure its stable outer box before and after the real update. Use a FLIP-style transform on the inner visual layer when the effect is the changed layout itself: capture source geometry, commit destination, invert delta and animate to identity. Keep one displayed state if simultaneous results are not useful. Use a non-interactive decoration only when needed. For a boundary measure, move only the marker toward the true settled boundary, typically 160 to 240 ms. Do not animate the width that drives the measurement.
- Keep content and controls readable during travel. Avoid overlapping words, duplicate ghosts, changing hit targets, clipping or moving focus. If paths conflict, stagger or bound the motion, or use a measured cue or highlight. Do not fabricate text positions or force an animation to fit the demo.
- Retarget or cancel when input, font metrics, viewport or layout changes; avoid stale coordinates and excessive layout reads. Handle identical endpoints truthfully and hide unnecessary motion.
- Provide an instant final state and clear static cue for reduced motion. Test source/target alignment, final measured bounds, interruption, rapid resizing, overflow, non-overlap and all relevant browser engines.
