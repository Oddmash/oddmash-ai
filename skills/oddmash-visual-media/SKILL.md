---
name: oddmash-visual-media
description: Plan, create and verify instructional videos, animated diagrams, technical illustrations, and embedded visual demonstrations that communicate a mechanism without redundant presentation UI.
---

# Visual media

Own visual explanation production. Use this skill when an article, documentation page or product needs a video, diagram, illustration, or self-running technical demonstration.

## Choose the medium

- Define the single mechanism the viewer should understand and the observable evidence that proves it.
- Use a static diagram for stable relationships, a short animation for changes over time, and an interactive example when the reader must manipulate inputs to understand the result.
- Prefer an actual recorded or reproducible implementation when demonstrating product behavior. Do not invent measured outcomes or imply a schematic is a real measurement.
- Sketch the initial state, meaningful intermediate states, outcome, and reset before producing the media.

## Compose the scene

- Make the mechanism the main subject. Keep labels, arrows, values, and cues only when they directly explain the visible behavior.
- For supplementary media embedded in prose, omit repeated titles, explanatory paragraphs, full-flow transcripts, step counters, progress bars, decorative badges, and player chrome by default. Keep surrounding prose responsible for the narrative.
- Do not replace a redundant paragraph with a redundant overlay. Include necessary scene labels and accessible text alternatives, including descriptions of visual-only information.
- Use a single coherent composition and stable bounds across frames. Preserve relevant element identity, hierarchy, contrast, and legibility in supported themes and narrow viewports.
- Retain a discreet, keyboard-accessible pause control for continuous automatic playback. Add other controls only when necessary to understand or operate the media.

## Direct motion

- Animate the actual changing attribute, position, relationship, or focus rather than repeatedly replacing or fading the entire scene.
- Make the causal sequence clear: input, response, outcome. Show the pointer arriving or the key being pressed before feedback when the input explains the result. For example, let the original selection stay visible as a dropdown opens, then change the affected fields after the selection. Keep persistent elements visible and hold the result long enough to read.
- When a simulated pointer or keystroke teaches the trigger, show the cue at rest before acting. Start with roughly one to two seconds when the cue would otherwise be easy to miss, and adjust to the scene. Keep the prior result during the cue, show the press or click, then reveal its consequence. Preserve that timing across pause and resume. Real user input should still receive immediate feedback.
- Use consistent easing and restrained durations appropriate to the content. Avoid abrupt flashes, rapid resets, gratuitous zooming, and motion that competes with reading.
- When looping, design a comprehensible reset, pause when offscreen or the page is inactive, honor reduced-motion preferences, and allow users to stop playback.
- Route content changes to oddmash-motion-content-transition and geometry or implementation details to oddmash-motion-implementation.

## Verify the artifact

- Inspect the actual appearance at the beginning, intermediate frames, outcome, and loop boundary, not only the source or a final still.
- Verify that the mechanism remains technically accurate, labels remain readable, geometry does not jump, and playback controls work by keyboard.
- Sample just before and after input. Verify the cue is visible before the action, the prior result survives the wait, and the response follows the simulated input. Keep the complete states understandable without motion.
- Check supported themes, narrow layouts, reduced motion, pause/resume, and visibility behavior where applicable.
- Route technical correctness to oddmash-developer-documentation, rendered clarity to oddmash-visual-clarity, accessibility to oddmash-accessibility, and third-party asset provenance to oddmash-copyright-licensing.
- Report unverified visual checks separately from passing build or structural checks.
