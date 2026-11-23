---
name: oddmash-ux-design
description: Design or assess Oddmash user journeys, navigation, information architecture, task flows, onboarding, interaction states, and usability before visual styling.
---

# Oddmash UX design

Read the product brief and inspect the actual current workflow. Identify the user, their goal, entry point, first useful action, and what success looks like.

- Map the shortest coherent task path and the decisions the user must make. Keep frequent actions discoverable and place contextual controls near their consequences. Preserve learned navigation and supported behavior unless evidence warrants a change.
- Specify empty, loading, error, success, disabled, and recovery states where they affect the task. For consequential actions, communicate what will change, preserve drafts when possible, and provide recovery or explicit confirmation.
- Prefer familiar controls and clear labels; use icons as supporting signals where meaning is not obvious. Design keyboard access, focus order, responsive layouts, touch targets, and localized label lengths from the beginning.
- Compare alternatives using real tasks, not visual preference alone. Separate observed usability evidence from assumptions. Define acceptance for task completion, errors, clarity, and accessibility; do not claim user research that was not conducted.
- Deliver a reviewable flow, key states, open decisions, and verification plan. Use [brand design](../oddmash-brand-design/SKILL.md) for visual identity and [motion design](../oddmash-motion-design/SKILL.md) when movement has a functional role.

- Produce a state inventory for each asynchronous surface: initial loading, refreshing with existing data, partial success, empty/no-match, offline, timeout, retry, permission denied, expired session, stale data, and fatal error. Explicitly mark inapplicable states.
- Specify skeletons only when content structure is predictable: reserve final layout dimensions, hide decorative placeholders from assistive technology, avoid fake controls, stop shimmer for reduced motion, and replace indefinite loading with a meaningful error/retry. Keep existing data visible during refresh when safe; use determinate progress when real progress is known.
- Define hover, focus-visible, pressed, selected, disabled, pending, invalid and read-only states; explain disabled actions where useful. Include keyboard, touch, drag alternatives, copy/paste, long content, overflow, safe areas, and zoom. Prevent duplicate submissions and preserve form input after recoverable errors.
- Design confirmations proportional to consequences, undo where feasible, clear field errors, accessible announcements and predictable focus after navigation, dialog closure or deletion. Avoid destructive defaults, deceptive consent, forced sign-up and misleading urgency.
- Check onboarding, first run, account settings, cancellation, sign-out and account deletion when applicable; ensure every user journey has an exit and recovery path.
- Read [accessibility](../oddmash-accessibility/SKILL.md) and [security and privacy](../oddmash-security-privacy/SKILL.md) for acceptance criteria before handoff.
