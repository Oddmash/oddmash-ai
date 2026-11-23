---
name: oddmash-accessibility
description: Design and verify accessible Oddmash interfaces and components against applicable WCAG 2.2 AA criteria.
---

# Oddmash accessibility

Verify the actual interface, not just markup. Prefer semantic HTML to custom ARIA.

- Check keyboard operation, accessible names, logical focus, visible focus, escape and focus restoration. Distinguish action buttons with changing labels from toggles with stable names and aria-pressed.
- Check contrast, applicable target size, reflow and zoom. Use 4.5:1 for normal text and 3:1 for large text; do not rely on color alone.
- Present meaningful asynchronous feedback visibly and through a pre-existing, separate live region. Preserve focus.
- Honor reduced motion. Automatically started movement lasting over five seconds alongside other content needs a pause, stop or hide mechanism unless essential. Repetition itself is not prohibited.
- Test keyboard, browser/device behavior and relevant assistive technologies where available. Automated tests supplement manual checks. Cite actual criteria and evidence; do not claim conformance from a scan alone.

Reference: https://www.w3.org/TR/WCAG22/
