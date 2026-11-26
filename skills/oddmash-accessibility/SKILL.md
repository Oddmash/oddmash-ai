---
name: oddmash-accessibility
description: Design and verify accessible Oddmash interfaces and components against applicable WCAG 2.2 AA criteria.
---

# Oddmash accessibility

Verify the actual interface, not just markup. Prefer semantic HTML to custom ARIA.

- Check keyboard operation, accessible names, logical focus, visible focus, escape and focus restoration. Distinguish action buttons with changing labels from toggles with stable names and aria-pressed.
- For modal dialogs and search palettes, verify focus containment and background scroll containment independently. Exercise empty, loading, no-result and populated states with Tab/Shift+Tab, arrows, page keys, wheel and touch; preserve native text editing and IME composition. The background must not scroll or shift when the modal is active. Close via each supported mechanism, restore the initiating focus and prior scroll position without leaving a lock behind, and verify repeated opening and route changes. Avoid redundant native/custom controls.
- Check contrast, applicable target size, reflow and zoom. Use 4.5:1 for normal text and 3:1 for large text; do not rely on color alone.
- Present meaningful asynchronous feedback visibly and through a pre-existing, separate live region. Preserve focus.
- Honor reduced motion through existing platform preferences where practical; do not introduce a separate preferences UI by default. Automatically started movement lasting over five seconds alongside other content needs a pause, stop or hide mechanism unless essential. Automatically updating content has no five-second exception. Repetition itself is not prohibited.
- Test keyboard, browser/device behavior and relevant assistive technologies where available. Automated tests supplement manual checks. Cite actual criteria and evidence; do not claim conformance from a scan alone.

## Proportionate support

- Prioritize applicable accessible keyboard interaction, focus, contrast, reflow, semantic names, and recovery in the primary user journey. Use native browser and operating-system capabilities instead of adding parallel custom settings. Do not trade away applicable accessibility requirements to simplify implementation.
- Treat extra preferences, custom high-contrast themes, legacy browser support and uncommon device-specific enhancements as product scope decisions, not default features. Document meaningful exclusions and test the supported modern browser matrix.

Reference: https://www.w3.org/TR/WCAG22/

## WCAG 2.2 AA acceptance matrix

Use the complete normative criteria, not only this shortlist; scope the entire task flow including dialogs, error states, authentication and third-party components. Record criterion, affected surface, test method, result and exceptions.

- Perceivable: meaningful text alternatives (1.1.1), captions/transcripts as applicable, semantic relationships (1.3.1), non-color cues (1.4.1), normal text 4.5:1 and large text 3:1 (1.4.3), relevant non-text controls and visual states 3:1 (1.4.11), 200% text resize (1.4.4), 320 CSS px reflow with permitted exceptions (1.4.10), text spacing overrides (1.4.12) and dismissible, hoverable, persistent hover/focus content where applicable (1.4.13).
- Operable: all functionality via keyboard, no keyboard traps (2.1.1/2.1.2), skip links or bypass mechanism, logical focus order and visible focus (2.4.1/2.4.3/2.4.7); focused items must not be completely concealed by author content (2.4.11). Provide non-drag alternatives (2.5.7) and 24×24 CSS px minimum pointer targets or a documented criterion exception (2.5.8). Prefer larger touch targets as a product goal.
- Understandable: correct page and content languages, consistent navigation/help, labels and error identification/suggestions, review or reversal for qualifying consequential submissions, avoid redundant entry where required (3.3.7), and accessible authentication alternatives/assistance (3.3.8). Permit password managers and paste.
- Robust: native names, roles, values and states (4.1.2); announce relevant status changes without forcing focus (4.1.3). Use aria-busy appropriately; keep skeleton decoration out of the accessibility tree and avoid repeated announcements.
- Verify browser keyboard-only traversal, zoom/reflow, forced colors/high contrast where relevant, reduced motion, touch and representative screen-reader tasks (VoiceOver/NVDA/TalkBack as available). Add automated accessibility checks and focused regressions. Record unsupported tools and untested criteria; do not declare AA compliance without evaluating the full applicable scope.
- Consult W3C normative text and understanding documents for criterion exceptions: https://www.w3.org/TR/WCAG22/ and https://www.w3.org/WAI/WCAG22/Understanding/ .
