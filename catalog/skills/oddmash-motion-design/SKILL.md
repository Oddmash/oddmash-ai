---
name: oddmash-motion-design
description: Design Oddmash motion for boundary changes, state confirmation, navigation, and control feedback. Use when selecting a motion pattern, timing, or reduced-motion equivalent.
---

# Oddmash motion design

Specify the trigger, what the user should notice, the committed state, and what remains usable. Tie a brand gesture to the outcome the user is inspecting. For causal transformation, show the actual state changing on one stable surface when that makes the effect clearer. Use simultaneous views when the user needs to inspect both outcomes. Select the presentation before animation; avoid prescribing panel count, controls, or a decorative cue.

| Pattern | When it earns its place | Starting point |
| --- | --- | --- |
| Edge measure | The user changes a boundary and needs to track its position | A marker follows the actual edge, 160–200 ms ease-out, retarget on new input |
| Folded response | A change moves an identifiable item to another region | A continuous fold leads the eye to the destination, then settles once |
| Control acknowledgement | A control needs immediate feedback on hover, press, or focus | 1–3 px or a color change in 90–140 ms |

Keep text and controls readable. State, measurement, and focus changes take effect as soon as they are ready. For reduced motion, preserve the same meaning with an immediate state, clear shape, focus indicator, or copy.

Use the [implementation skill](../oddmash-motion-implementation/SKILL.md) to keep the chosen movement interruptible and verify both motion preferences.

- Specify loading shimmer, progress, transition interruption and motion-free equivalents only when meaningful. Never delay data or error feedback for animation; avoid flicker, excessive motion and indefinite decorative loops. Use [accessibility](../oddmash-accessibility/SKILL.md) for applicable pause and flashing requirements.

## Cinematic hero sequencing

For an explicitly immersive or cinematic product hero, use a single coherent stage and a sequence of meaningful states: establish the real input, visibly trace the product action and show its consequence. Use restrained lighting, depth, path motion or focus choreography only where it guides attention to the actual output. Prefer the product's own geometry and mark rather than generic particle effects. Keep the headline and CTA available on first paint, reserve geometry for all localized scenes, and keep normal scrolling. Use several genuinely distinct examples when needed; hold the readable result longer than the transition. Avoid a cluster of controls, but provide one discoverable pause/resume and a way to inspect another state when required. Automatically pause offscreen, while focused or hovered over the scene, and on hidden tabs; honor reduced motion with an immediate static equivalent and no auto-advance. Test real intermediate frames, the settled states and interrupted motion on narrow and desktop widths. Route sequencing to [content transitions](../oddmash-motion-content-transition/SKILL.md) and geometry to implementation.

## Specialist patterns

- [Content transitions](../oddmash-motion-content-transition/SKILL.md): auto-changing examples, rotating text and scene transitions.
- [Entrance and reveal](../oddmash-motion-entrance-reveal/SKILL.md): staged hero, stagger and viewport entry.
- [Layout transitions](../oddmash-motion-layout-transition/SKILL.md): measured reflow, before/after replay and resize.
- [Control microinteractions](../oddmash-motion-microinteraction/SKILL.md): buttons, tabs, toggles and selection.
- [Feedback motion](../oddmash-motion-feedback/SKILL.md): copy toast, status, loading and progress.

Select the smallest relevant pattern; combine only when each movement communicates a real change. Movement is not a required feature. A meaningful automatic sequence may repeat when appropriate; use the smallest discoverable interruption mechanism required by accessibility, not a cluster of playback or example controls by default. Document the trigger, timing, interruption, committed state and reduced-motion equivalent.
