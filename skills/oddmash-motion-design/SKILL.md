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
