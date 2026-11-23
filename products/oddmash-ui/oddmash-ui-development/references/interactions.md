# Component interaction checklist

- Button defaults to `type="button"`. Check keyboard, disabled behavior, forced colors, and reduced motion.
- Check one visible focus outline per control. For invalid fields, the error border stays visible while focused.
- Accordion preserves native details and summary behavior. Check keyboard activation, expansion and collapse, and instant state changes under reduced motion.
- Tabs and Dialog keep Radix controlled and uncontrolled contracts. Verify keyboard behavior, focus trapping and restoration where applicable, and explicit portal containers.
- Keep native Select for browser validation, optgroups, and multiple selection. Use SelectDropdown for styled single selection. Exercise disabled options, type-ahead, cancellation, and focus.
- Toast is controlled. Mount the live region before sending a message, choose polite status or urgent alert as appropriate, and preserve dismissal and caller-owned focus restoration.

- For skeletons, expose decorative placeholders without focusable fake controls, use aria-hidden on decorative elements, reserve expected geometry, provide a separate loading status on the owning region and disable shimmer for reduced motion.
- For asynchronous controls, preserve native semantics, indicate pending state, prevent duplicate actions and verify retry, focus, error and success. Test hover, pressed, focus-visible, disabled, read-only and invalid states in both themes.
- Test small pointer targets, non-drag alternatives, 200% text resizing, 320 CSS px reflow where applicable, long localized labels, forced colors and screen-reader names. Refer to the shared oddmash-accessibility skill for the complete WCAG scope.
- Verify loading, empty, error, partial and populated examples with deterministic data and real keyboard/pointer interactions; document consumer-owned states instead of adding unnecessary component APIs.
