---
name: oddmash-motion-microinteraction
description: Design hover, press, focus, selection, toggle, tab, accordion and small interface microinteractions that communicate immediate feedback.
---

# Control microinteractions

Use [motion design](../oddmash-motion-design/SKILL.md) to name the user's action, response and committed state.

- Map every relevant state before animating: default, hover, focus-visible, pressed, selected, disabled, pending and error. Keep focus and semantic state immediate; never rely only on motion or color.
- Use short explicit transitions, usually 100 to 180 ms, for color, border, opacity or an inner visual transform. Prefer 1 to 3 px press travel and subtle indicator movement. Do not animate the control's hit target.
- For tabs and segmented controls, move or blend the active indicator while the new panel becomes usable immediately; keep selected semantics, keyboard navigation, focus and copy targets consistent with the actual panel. Preserve layout while content changes.
- Avoid decorative hover loops and hover-only information. Account for touch, keyboard, disabled and reduced-motion users.
- Test keyboard and pointer interactions, rapid toggles, interruption, focus ring contrast, accessible state and static no-motion feedback. Use the actual component states instead of adding motion to every surface.
