# Korean typography and Kowrap adoption

Apply the published `@oddmash/kowrap` library by default to eligible Korean editorial headings, hero copy, descriptions and other meaningful prose on Oddmash websites. Inspect the current package exports, documentation, framework, version and existing dependency policy before implementation. Use an existing compatible version or a pinned reviewed release; never guess an API. Start with native Korean-friendly CSS and readable measure as the fallback, then integrate the supported adapter (React, Vue, Svelte, DOM or core) that fits the actual runtime. Keep static/SSR content readable before hydration and without JavaScript.

Do not wrap code, URLs, identifiers, form inputs, screen-reader-only text, or unrelated locales indiscriminately. Preserve headings, links, emphasis, selectable text, copy, keyboard access and manual breaks. Avoid nested wrappers, forced fixed widths, layout shifts, redundant observers, unnecessary client bundles and changes to semantic markup. For mixed languages, narrow labels or unsupported contexts, use native CSS when Kowrap would worsen behavior. Record justified exceptions.

Test real Korean and mixed-script content at representative narrow and wide widths, with actual and fallback fonts, font loading, resize, dynamic content, inline markup, long words, whitespace, zoom, and SSR/hydration where applicable. Compare native CSS and Kowrap at equal measured widths and typography. Check human readability, overflow, unexpected extra lines, fragmented words or semantic phrases, punctuation, text preservation and measurable layout/performance effects. Do not claim every line improves; preserve a working fallback.

## Consumer-to-library improvement loop

1. Isolate the problem in the consumer using the actual copy, width, font, browser, package version, adapter and minimal reproducible input. Save expected and actual behavior without sensitive data.
2. Determine whether the cause is consumer CSS/layout, unsupported usage, integration, or Kowrap itself. Fix consumer misuse locally; do not hide an engine defect with repeated handcrafted line breaks or global hacks.
3. When the evidence identifies a Kowrap defect and cross-repository fixes are authorized, search or open a linked issue in Oddmash/kowrap, add a regression test that fails on the old behavior, implement the smallest compatible engine/adapter fix, run unit, package, relevant browser, framework and hydration tests, then open a separate reviewable PR. If not authorized, report the issue and evidence rather than editing another repository.
4. Follow the library's release and review policy. Do not silently publish or consume an unreleased commit. Verify the approved release/artifact in the actual consumer, rerun rendering checks, and record the resolved version and remaining limitations. Keep the consumer functional while an upstream fix is pending.

Do not introduce a Kowrap dependency cycle; the Kowrap site may use its own supported local build per its product instructions. Treat this loop as continuous product feedback, not a requirement to manufacture issues.
