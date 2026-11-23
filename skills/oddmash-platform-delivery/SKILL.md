---
name: oddmash-platform-delivery
description: Plan and verify Oddmash distribution for websites, PWAs, browser extensions, npm packages, desktop and mobile apps, games and other supported platforms.
---

# Oddmash platform delivery

Choose only platforms justified by the product and maintainer capacity. Record supported versions, distribution channels, signing/update process, ownership and store requirements. Consult current official documentation for each target before publishing.

- Web: production/preview separation, HTTPS/domain, redirects, metadata, responsive UI, caching, error behavior and rollback. For PWAs, verify manifest/icons, install/update/offline behavior and stale-cache recovery without exposing private data.
- Extensions: justify minimal permissions and host access, explain user-visible data handling, verify lifecycle/background behavior and supported browsers. Review current store policy, packaging and update process; never expand permissions silently.
- Libraries/CLI: validate package contents and licenses, clean consumer imports, types, supported runtime versions, package exports and documentation. Check upgrade and breaking-change behavior, versioning and publication artifacts.
- Desktop/mobile: verify supported OS versions, permissions, accessibility, lifecycle, offline behavior, signing, packaging and update paths. Use current store/release requirements; keep signing secrets outside source and logs.
- Games: verify real launch/build, input devices, settings, save compatibility, performance, localization, accessibility options, content disclosures and platform-specific distribution requirements.
- Test the actual candidate artifact on representative targets; distinguish simulator, browser, real device and published verification. Record unavailable targets, limitations and recovery/rollback paths.

Use [release management](../oddmash-release-management/SKILL.md), [licensing](../oddmash-copyright-licensing/SKILL.md) and [quality assurance](../oddmash-quality-assurance/SKILL.md).
