---
name: oddmash-motion-microinteraction
description: Design hover, press, focus, selection, toggle, tab, accordion and small interface microinteractions that communicate immediate feedback.
---

# Control microinteractions

Use [motion design](../oddmash-motion-design/SKILL.md) to name the user's action, response and committed state.

- Only animate a control that the user actually needs. Map relevant states before animating: default, hover, focus-visible, pressed, selected, disabled, pending and error. Keep focus and semantic state immediate; never rely only on motion or color.
- Use short explicit transitions, usually 100 to 180 ms, for color, border, opacity or an inner visual transform. Prefer 1 to 3 px press travel and subtle indicator movement. Do not animate the control's hit target.
- For tabs and segmented controls, move or blend the active indicator while the new panel becomes usable immediately; keep selected semantics, keyboard navigation, focus and copy targets consistent with the actual panel. Preserve layout while content changes.
- For recognizable standalone destination icons or prominent navigation affordances, prefer a legible muted neutral at rest and the destination's actual brand color (or theme-appropriate monochrome) on hover, focus-visible and press. Preserve a distinct focus ring and pressed response; color alone must not communicate the action or state.
- When the product calls for expressive hover motion, use a restrained scale response on the inner icon or visual only. A slow, gentle pulse between approximately 1.02 and 1.07 scale may repeat while a fine pointer remains over that action; stop on pointer exit, press, disable or loss of visibility and settle smoothly. Keep the hit target and surrounding layout fixed. Do not pulse every control, text block, whole card or keyboard-focused control. Do not start this loop on load, touch or reduced-motion settings; preserve the color and focus feedback without movement. Avoid hover-only information.
- Test keyboard and pointer interactions, rapid toggles, interruption, focus ring contrast, accessible state and static no-motion feedback. Use the actual component states instead of adding motion to every surface.
