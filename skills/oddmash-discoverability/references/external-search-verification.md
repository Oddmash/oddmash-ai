# External search verification

Use this procedure for authorized indexing and sitemap work on public Oddmash sites. Read the target repository's deployment guidance and keep preview, account, private, and unpublished routes outside search discovery.

## Property and ownership

1. Confirm the production HTTPS address and whether the maintainer already has a property that covers it. GitHub Pages projects share a host but have distinct paths. Use the exact URL prefix, including its project path and trailing slash, when adding a project property.
2. Use the authorized maintainer account. For HTML-file verification, deploy Google's original filename and bytes through the owning repository's ordinary issue, review, CI, and production flow. Confirm the file is publicly reachable at the exact address shown by Search Console before verifying. Keep the file deployed while the ownership method depends on it.
3. Keep account identifiers, credentials, and verification file contents out of skill instructions, logs, and screenshots. Search Console's aggregate reports do not require visitor tracking or new OAuth grants.

## Sitemap and crawler checks

- Validate the exact public sitemap URL before submitting it. Fetch it anonymously, check the HTTP status, redirects, content type and XML, and confirm entries are unique public canonical URLs within the intended property. Sample representative localized pages for reciprocal alternates and indexability. For a small sitemap, check the full set when practical.
- Fetch `/robots.txt` at the scheme and host root. Crawlers do not apply a project-subdirectory robots file as host policy. A root HTTP 404 means Google assumes no crawl restrictions, but it supplies no sitemap discovery directive. On GitHub Pages, coordinate any host-root change with the owner of the organization site.
- Submit the verified production sitemap in the correct property. Record the Sitemaps report's processing status and separately inspect the homepage and a representative localized URL. HTTP success, Google's live URL fetch, sitemap processing, and indexing are separate observations.
- If the report says “Couldn't fetch”, read its details, test the exact sitemap URL in Google's live URL inspection, and check the host-root robots status, redirects, and XML. Fix any evidenced defect before resubmitting. A successful live fetch with an unresolved report warrants recording both results and allowing Google's retry window. Leave acceptance open until the required result is observed.
- For another search engine, verify directly in its authorized webmaster property if the work calls for it. Importing settings or granting another provider account access is a separate authorization decision.

Record the exact property and sitemap URLs, deployment revision, processed status, and any blocked checks. Report unavailable metrics as unavailable. Consult the [Oddmash website setup](https://github.com/Oddmash/oddmash-website/blob/main/CONTRIBUTING.md#organic-search-and-search-console), [Google ownership verification](https://support.google.com/webmasters/answer/9008080), [Sitemaps report](https://support.google.com/webmasters/answer/7451001), [Google robots.txt rules](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec), and [Bing sitemap guidance](https://www.bing.com/webmasters/help/sitemaps-3b5cf6ed).
