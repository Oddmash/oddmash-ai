---
name: oddmash-motion-design
description: Design Oddmash motion for boundary changes, state confirmation, navigation, and control feedback. Use when selecting a motion pattern, timing, or reduced-motion equivalent.
---

# Oddmash motion design

Specify the trigger, the state that changes, the visual object that moves, and what remains usable during the transition. Express the folded-ribbon identity through a pair of related movements when that reinforces the intent.

| Pattern | When it earns its place | Starting point |
| --- | --- | --- |
| Edge measure | The user changes a boundary and needs to track its position | Paired slashes, 160–200 ms ease-out, retarget on new input |
| Folded response | A discrete change benefits from a short confirmation | Offset planes settle once, 4–8 px over 160–220 ms |
| Control acknowledgement | A control needs immediate feedback on hover, press, or focus | 1–3 px or a color change in 90–140 ms |

Keep text and controls readable. State, measurement, and focus changes take effect as soon as they are ready. For reduced motion, preserve the same meaning with an immediate state, clear shape, focus indicator, or copy.

Use the [implementation skill](../oddmash-motion-implementation/SKILL.md) to keep the chosen movement interruptible and verify both motion preferences.
