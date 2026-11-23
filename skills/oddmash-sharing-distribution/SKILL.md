---
name: oddmash-sharing-distribution
description: Design and verify share links, copy and native sharing, Open Graph cards, exported previews, iframe embeds and public distribution for Oddmash products.
---

# Oddmash sharing distribution

Define what is shared, who can view or edit it, and whether it is a live resource or immutable snapshot. Default to the existing privacy model; never make a private resource public implicitly.

- Use stable canonical links, explicit visibility, and clear copy/share feedback. Provide clipboard and plain-link fallback if native sharing is unavailable or canceled. Preserve meaningful URL state without exposing secrets or personal data.
- For shareable user content, define owner controls, access scope, expiration, revocation, deletion, and anonymous/open-in-new-session behavior. Unlisted links are not a substitute for access control. Do not expose private content through previews, exports or caches.
- Provide accurate title, description, social image and alternative text where supported; verify rendered metadata, absolute image URLs, crop/readability, fallback image and cache refresh behavior on intended platforms. Keep private previews generic.
- Design read-only embeds with responsive dimensions, accessible frame title, keyboard usability, loading/error fallback, theme and localization support, and a link to the original. Define allowed embedding origins, minimal frame permissions and message contracts; validate origin and data, avoid unnecessary third-party tracking, and use documented browser controls. Do not weaken application-wide framing or access policy to enable embeds.
- For exports, define format, schema/version, naming, rights and sensitive-data redaction; test oversized content, cancellation and empty results. Use preview-before-share for consequential exports.
- Test share, copy, embed and revocation with synthetic content across signed-in/out contexts, narrow hosts, blocked third-party storage, unavailable native APIs and expired links. Record actual preview-platform coverage and unverified cases.

Use [privacy](../oddmash-security-privacy/SKILL.md), [accessibility](../oddmash-accessibility/SKILL.md), and [licensing](../oddmash-copyright-licensing/SKILL.md).
