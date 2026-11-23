---
name: vertactics-browser-verification
description: Verify Vertactics WebGL rendering and editor interactions in a real browser, capture both view modes, and record exact-commit evidence in SPEC.
---

# Vertactics browser verification

Use the production preview and relevant Playwright tests. Confirm WebGL is rendering actual terrain before judging interaction or screenshots.

- In the affected 2D and 3D modes, check pan, orbit where supported, zoom, reset, and canvas picking. Select the same object through a mode change and confirm its identity and world height survive.
- Check clipping, picking accuracy, step readability, and panel fit. Capture the actual build with the browser, viewport, and mode recorded.
- Report WebGL or browser setup blockers separately from failed assertions. Record local browser evidence and exact-head CI independently. Check off only SPEC items supported by the evidence.
