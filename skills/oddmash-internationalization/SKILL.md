---
name: oddmash-internationalization
description: Design and verify localized Oddmash UI, documentation, metadata and locale-dependent formatting, including Korean, English, Japanese and Simplified Chinese.
---

# Oddmash internationalization

Identify supported locales, default and fallback policy, translation ownership and regional requirements. Follow existing product language scope; do not force every runtime feature into four languages.

- Keep user-facing messages separate from logic and stable identifiers. Avoid concatenated translated fragments; support pluralization, variable interpolation, locale-aware number/currency/date/time formatting and explicit timezone semantics.
- Preserve locale across navigation, reload, share links and preferences. Define locale negotiation, manual override, missing translations and unsupported language behavior. Keep canonical and alternate URLs consistent with [discoverability](../oddmash-discoverability/SKILL.md).
- For Korean prose, follow [Korean typography and Kowrap adoption](references/korean-typography.md): integrate the compatible Kowrap adapter by default on eligible text, verify against native wrapping, and route evidenced library defects through the upstream regression workflow.
- Check CJK line breaking, glyph coverage, font fallback, mixed-script text, long labels, narrow widths, sorting/search, input method composition, and RTL only where supported. Avoid fixed widths and flag icons as sole language labels.
- Localize loading/error/empty/success, validation, notifications, email, policy links, accessibility labels and metadata. Do not silently machine-translate legal text into a claim of equivalent legal effect; obtain review for material policy translations.
- Verify locale switching, missing keys, fallback, hydration, timezones, formatting, plural cases, actual rendered text and keyboard/screen-reader tasks. Keep translated claims and links aligned. Public GitHub collaboration remains English under organization agreements.
