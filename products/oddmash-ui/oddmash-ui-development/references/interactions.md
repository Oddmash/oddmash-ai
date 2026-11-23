# Component interaction checklist

- Button defaults to `type="button"`. Check keyboard, disabled behavior, forced colors, and reduced motion.
- Check one visible focus outline per control. For invalid fields, the error border stays visible while focused.
- Accordion preserves native details and summary behavior. Check keyboard activation, expansion and collapse, and instant state changes under reduced motion.
- Tabs and Dialog keep Radix controlled and uncontrolled contracts. Verify keyboard behavior, focus trapping and restoration where applicable, and explicit portal containers.
- Keep native Select for browser validation, optgroups, and multiple selection. Use SelectDropdown for styled single selection. Exercise disabled options, type-ahead, cancellation, and focus.
- Toast is controlled. Mount the live region before sending a message, choose polite status or urgent alert as appropriate, and preserve dismissal and caller-owned focus restoration.
