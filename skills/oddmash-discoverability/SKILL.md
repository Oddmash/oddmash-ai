---
name: oddmash-discoverability
description: Plan and verify SEO, metadata, indexing, structured data and search discoverability for public Oddmash websites and documentation.
---

# Oddmash discoverability

Identify which pages should be discoverable, for whom and in which locales. Keep private, account, preview and internal routes outside public discovery; use real authorization for private content.

- For public library, SDK, API and developer-tool docs, use [developer documentation](../oddmash-developer-documentation/SKILL.md) for the human-facing content and API contract. Own [agent-readable public documentation](references/agent-readable-docs.md) generation and verification of llms.txt, Markdown and relevant machine-readable references from those sources.
- Map public routes and meaningful query states. Choose canonical URLs, stable slugs, redirect behavior, HTTP status, sitemap coverage and robots directives deliberately. Do not treat robots or noindex as privacy controls.
- For Search Console ownership, sitemap submission, and crawler validation on public sites, use [external search verification](references/external-search-verification.md).
- Ensure unique truthful titles, descriptions, semantic headings, crawlable links, meaningful alt text, favicon and share metadata. Use structured data only when applicable and supported by actual visible content; avoid fabricated ratings or claims.
- For localized pages, coordinate locale URLs, language metadata, alternate links and canonical choices with [internationalization](../oddmash-internationalization/SKILL.md). Test long, missing and translated content.
- Verify server-rendered output, hydration, broken links, redirects, indexable content, useful 404s, metadata and performance on representative devices. Use official search-provider validation tools when relevant; do not claim indexing or ranking without evidence.
- For internal search, own matching, query indexing, filtering, pagination and privacy; use [UX design](../oddmash-ux-design/SKILL.md) for interaction and no-result recovery. Keep matching, indexing, result preview, destination anchors and source highlighting consistent. Define phrase boundaries explicitly; do not present terms spread across separate blocks as a contiguous phrase. Validate normalization, locale-specific input, empty/invalid queries, stale results, and index errors/retry. Do not collect search history by default; if authorized, accurately label its scope and ordering, offer deletion, and distinguish local recent searches from aggregate popularity.

Use [sharing and distribution](../oddmash-sharing-distribution/SKILL.md) for previews and [product marketing](../oddmash-product-marketing/SKILL.md) for positioning.
