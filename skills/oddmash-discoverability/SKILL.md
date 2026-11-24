---
name: oddmash-discoverability
description: Plan and verify SEO, metadata, indexing, structured data, navigation and search discoverability for public Oddmash websites and documentation.
---

# Oddmash discoverability

Identify which pages should be discoverable, for whom and in which locales. Keep private, account, preview and internal routes outside public discovery; use real authorization for private content.

- For public library, SDK, API and developer-tool docs, follow [agent-readable public documentation](references/agent-readable-docs.md) to generate and verify llms.txt, Markdown and relevant machine-readable references; keep all artifacts synchronized with public docs and release contracts.
- Map public routes and meaningful query states. Choose canonical URLs, stable slugs, redirect behavior, HTTP status, sitemap coverage and robots directives deliberately. Do not treat robots or noindex as privacy controls.
- Ensure unique truthful titles, descriptions, semantic headings, crawlable links, meaningful alt text, favicon and share metadata. Use structured data only when applicable and supported by actual visible content; avoid fabricated ratings or claims.
- For localized pages, coordinate locale URLs, language metadata, alternate links and canonical choices with [internationalization](../oddmash-internationalization/SKILL.md). Test long, missing and translated content.
- Verify server-rendered output, hydration, broken links, redirects, indexable content, useful 404s, metadata and performance on representative devices. Use official search-provider validation tools when relevant; do not claim indexing or ranking without evidence.
- For internal search, define matching, no-result recovery, filtering, pagination, keyboard access and privacy of queries. Do not collect search history by default.

Use [sharing and distribution](../oddmash-sharing-distribution/SKILL.md) for previews and [product marketing](../oddmash-product-marketing/SKILL.md) for positioning.
