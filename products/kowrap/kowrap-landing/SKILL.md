---
name: kowrap-landing
description: Change or verify the Kowrap landing, typography, live CSS comparison, or documentation site. Use for Kowrap browser measurements and static site delivery, including the width ruler.
---

# Kowrap landing and docs

Read Kowrap's AGENTS.md and CONTRIBUTING.md. Preserve Next.js static export, the configured deployment base path, and the boundary between site presentation and the published engine.

- Make the first view identify Kowrap as a Korean line-breaking library, then show actual CSS keep-all and WrapText results simultaneously, at equal measured widths and font settings. Use realistic copy with a visible change in a complete word. Keep the editor and synchronized code discoverable; expose forced breaks as an optional Kowrap-only control. If viewport constraints clamp a requested width, show the measured width rather than implying the requested one is rendered.
- Keep display typography and decoration separate from the text used for the comparison. Record font source, license, transfer size, fallback, and font-ready remeasurement. When heading glyphs are subsetted, update the subset with the copy.
- Treat width as committed input. Animate the measuring marker independently and match the settled marker to the rendered width. A before/after replay must derive its movement from both rendered word positions; keep the results visible, use a static destination cue for reduced motion, and verify rapid input.
- Keep the first view editorial and product-specific: use moderate Korean text weights and let the live line breaking carry the visual emphasis rather than numbered cards. Prefer stable side-by-side results and naturally transitioning distinct real text examples. Do not force an endless replay or duplicate controls. If automatic movement needs controls under accessibility requirements, provide them or use user-triggered transitions. For word movement, animate each rendered word on an independent transform layer rather than overlaying duplicate text; keep a static reduced-motion result. Show real pixel measurement in the Core example and visible copy success/failure feedback.
- Use the public API docs as the source for the agent-readable index and Markdown variants, following [agent-readable docs](../../../skills/oddmash-discoverability/references/agent-readable-docs.md). Validate package exports, examples, static base path and fallback text.
- Verify with the repository's static build and Chromium, Firefox, and WebKit. Include the landing workflow and relevant documentation routes. Check font failure, code disclosure and copy, and the configured base path when affected.

- Use [content transitions](../../../skills/oddmash-motion-content-transition/SKILL.md), [entrance and reveal](../../../skills/oddmash-motion-entrance-reveal/SKILL.md) and [layout transitions](../../../skills/oddmash-motion-layout-transition/SKILL.md) to stage a meaningful hero sequence. Keep actual word measurement boxes stable and prove the motion in a browser. Do not replace meaningful motion with a generic fade-only effect.
- Use [feedback motion](../../../skills/oddmash-motion-feedback/SKILL.md) for successful and failed copies, with immediate local feedback and a compact visual toast without duplicate announcements. Use [control microinteractions](../../../skills/oddmash-motion-microinteraction/SKILL.md) for framework and package-manager tabs. Copy only the currently selected command or snippet and keep the code body compact.
