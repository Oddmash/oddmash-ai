---
name: oddmash-motion-content-transition
description: Design and implement timed or user-triggered content rotation, auto-changing text, carousels, scene switches and crossfades without losing reading or control.
---

# Content transition

Use [motion design](../oddmash-motion-design/SKILL.md) for the product outcome and [motion implementation](../oddmash-motion-implementation/SKILL.md) for state and geometry.

- Define the ordered scenes, the stable committed content, the automatic trigger, dwell, exit condition and manual-selection policy before implementing. Prefer a finite sequence when examples are supplementary; default to the first or final meaningful state, not an endless decoration.
- Make each scene visibly distinct and real. Change the committed state once; animate only its presentation. Keep a stable reserved region and avoid overlapping accessible text or cloning the same content for an illusion.
- For an editorial text swap, use a short opacity/position reveal, 160 to 320 ms, optionally stagger word or line visuals by 25 to 45 ms. Keep overall reading dwell separate, usually 3 to 6 seconds for short copy. Let users inspect long or interactive content without a timer.
- In repeated auto-updating interfaces provide an accessible stop or pause mechanism appropriate to the product and [accessibility](../oddmash-accessibility/SKILL.md). Pause when offscreen, hovered or focused, stop/resume according to the documented manual-selection behavior, cancel timers on disposal and respect reduced motion. Never add a control that conflicts with a deliberate finite sequence when existing selection provides the appropriate stop.
- If showing a time indicator, derive it from the same dwell schedule; reset it on scene change and stop it on pause. Do not misrepresent loading or user progress.
- Test first and last scenes, keyboard selection, rapid switching, pause and offscreen behavior, timer cleanup, narrow layouts and no-motion equivalence. Capture a real transition and verify what changes and what stays stable.

- Default to no counter, progress bar, playback status or descriptive motion caption for supplementary rotating examples. Retain visible indicators only when they materially help the task or provide necessary control. Prefer the already-selected example as the state cue. Preserve accessible interruption and reduced-motion behavior without exposing implementation telemetry.
