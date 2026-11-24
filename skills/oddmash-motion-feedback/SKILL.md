---
name: oddmash-motion-feedback
description: Design and implement success/error toasts, copy feedback, progress, loading skeletons and async state transitions with accurate nonblocking status.
---

# Feedback motion

Use [motion design](../oddmash-motion-design/SKILL.md) and [accessibility](../oddmash-accessibility/SKILL.md). Feedback represents a real state, never a simulated success.

- For clipboard or simple confirmations, show the local action state immediately when the operation resolves and a compact nonblocking toast when useful. Include an appropriate success/error message and non-color icon; avoid duplicate screen-reader announcements when a local live region already announces the same result.
- Enter and exit a toast with subtle opacity and 6 to 12 px travel over 150 to 250 ms. Keep simple success visible about 2 to 4 seconds, replace/deduplicate repeated identical confirmations, and preserve focus. Important failure or actionable feedback must remain usable long enough and offer suitable dismissal or recovery.
- For async content, reserve realistic layout space, use meaningful progress only when it can be measured, and stop loading animation as soon as data or an error is ready. Do not add artificial delays. Avoid flashing or endless decorative skeletons.
- Cancel stale responses and timers, avoid repeated announcements, handle fast retries and changing pages, and use an immediate static presentation in reduced motion.
- Verify real success and failure, rapid repetition, expiry/dismissal, keyboard focus, narrow viewport placement, screen-reader announcement path and reduced motion. Do not claim feedback works from a style snapshot alone.
