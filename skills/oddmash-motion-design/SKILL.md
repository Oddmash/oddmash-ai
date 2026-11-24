---
name: oddmash-motion-design
description: Design Oddmash motion for boundary changes, state confirmation, navigation, and control feedback. Use when selecting a motion pattern, timing, or reduced-motion equivalent.
---

# Oddmash motion design

Specify the trigger, what the user should notice, the committed state, and what remains usable. Tie a brand gesture to the outcome the user is inspecting. For a comparison, stage both states in the same location and call out the specific content that changed.

| Pattern | When it earns its place | Starting point |
| --- | --- | --- |
| Edge measure | The user changes a boundary and needs to track its position | A marker follows the actual edge, 160–200 ms ease-out, retarget on new input |
| Folded response | A change moves an identifiable item to another region | A continuous fold leads the eye to the destination, then settles once |
| Control acknowledgement | A control needs immediate feedback on hover, press, or focus | 1–3 px or a color change in 90–140 ms |

Keep text and controls readable. State, measurement, and focus changes take effect as soon as they are ready. For reduced motion, preserve the same meaning with an immediate state, clear shape, focus indicator, or copy.

Use the [implementation skill](../oddmash-motion-implementation/SKILL.md) to keep the chosen movement interruptible and verify both motion preferences.

- Specify loading shimmer, progress, transition interruption and motion-free equivalents only when meaningful. Never delay data or error feedback for animation; avoid flicker, excessive motion and indefinite decorative loops. Use [accessibility](../oddmash-accessibility/SKILL.md) for applicable pause and flashing requirements.

## Specialist patterns

- [Content transitions](../oddmash-motion-content-transition/SKILL.md): auto-changing examples, rotating text and scene transitions.
- [Entrance and reveal](../oddmash-motion-entrance-reveal/SKILL.md): staged hero, stagger and viewport entry.
- [Layout transitions](../oddmash-motion-layout-transition/SKILL.md): measured reflow, before/after replay and resize.
- [Control microinteractions](../oddmash-motion-microinteraction/SKILL.md): buttons, tabs, toggles and selection.
- [Feedback motion](../oddmash-motion-feedback/SKILL.md): copy toast, status, loading and progress.

Select the smallest relevant pattern; combine only when each movement communicates a real change. Document the trigger, timing, interruption, committed state and reduced-motion equivalent.
