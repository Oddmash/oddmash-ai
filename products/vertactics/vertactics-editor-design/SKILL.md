---
name: vertactics-editor-design
description: Design or review the Vertactics tactical editor, focusing on canvas space, mode switching, persistent selection, tool placement, and accessible strategy workflows.
---

# Vertactics editor design

Read the UI checklist in SPEC. Walk through map selection, placement, inspection, save, and restore in the current editor.

- Place map and strategy actions where they are easiest to discover, recurring tools near the canvas, and selection-specific actions near the selected object or inspector. The current header/canvas/inspector arrangement is a preference, not an invariant; preserve actual editor behavior and selection contracts. Prioritize canvas space at narrow widths. Keep camera and visibility controls near the view they affect.
- Treat 2D and 3D as views over one workspace. Preserve selection, placement, active intent, and coordinate readouts when switching modes.
- Use named icon controls, visible active states, explicit draft replacement confirmation, and status feedback. Encode teams and analysis states with text or shape as well as color. Apply editor JSON tokens and reduced-motion behavior.
- Verify keyboard and focus, Korean and English label lengths, touch and camera gestures, picking in both modes, and save–restore. Record gaps in SPEC.
