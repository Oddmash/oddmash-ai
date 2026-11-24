---
name: oddmash-release-management
description: Prepare or verify an Oddmash release, version bump, package publication, deployment, release notes, or rollback while respecting each repository's release policy.
---

# Oddmash release management

Read the target repository's release policy, current version, remote state, open changes, and deployment instructions. A skill does not grant permission to publish, merge, or deploy.

- Establish the exact release candidate, previous published version, intended audience, and affected artifacts. Derive the version from the repository policy and actual compatibility impact rather than guessing.
- Reconcile package metadata, changelog, release notes, documentation, and artifacts. For libraries, verify the packed artifact in a clean consumer and public imports, types, runtime peers, and CSS where relevant. For deployed products, verify the intended environment and URL.
- For public developer documentation, keep versioned HTML and agent-readable artifacts synchronized with the approved package or API candidate. Verify the built index, Markdown routes, examples and release compatibility against [agent-readable docs](../oddmash-discoverability/references/agent-readable-docs.md).
- Require appropriate passing checks for the exact candidate and evidence for changed behavior. Separate local tests, CI, preview, and production verification. Stop before any production action if authorization, required approvals, or the candidate state is unclear.
- For an authorized release, follow the repository's native publishing mechanism and verify the actual published version or deployment. Never expose credentials, bypass protected workflows, or assume workflow success means the artifact is available.
- Record exact revision, release URL, user-visible changes, verification gaps, and rollback or recovery path. If a failure occurs, preserve the previous working release and report the concrete blocker.

Use [quality assurance](../oddmash-quality-assurance/SKILL.md) for evidence and [product marketing](../oddmash-product-marketing/SKILL.md) for release communication.

## Solo-maintainer launch gate

Before reporting a change as release-ready, use [quality assurance](../oddmash-quality-assurance/SKILL.md) to record pass/fail/not applicable with reason/not verified for the exact revision.
- Core journeys and edge states work, no unresolved material accessibility or functional regressions; applicable WCAG 2.2 AA checks have evidence.
- Actual data processing and privacy/consent/rights flows agree with reviewed notices; applicable terms, acceptable-use, asset licensing, attribution and platform restrictions are addressed. Material legal uncertainty requires maintainer review, not an AI compliance declaration.
- Verify environment configuration without exposing values, migrations and rollback, backup/restore readiness where applicable, health, monitoring, support contact and recovery. Check cost/quota constraints, failure communication and operational ownership for one maintainer.
- Verify production-facing navigation, policy links, metadata, locale, indexing choices and public claims against the candidate. Keep private previews and test accounts private.
- No known unresolved critical blockers or skipped required checks. Explicitly distinguish approved residual risks from unknowns; a skill cannot waive CI, legal review, permissions or launch authorization.

- Reconcile the applicability checklist from [product planning](../oddmash-product-planning/SKILL.md) with evidence from the selected specialist skills. Required unknown or failed checks block readiness; optional exclusions and not-applicable reasons remain documented. Verify platform artifacts, operational ownership, share visibility, localized metadata and billing sandbox evidence where applicable. Follow [Git workflow](../oddmash-git-workflow/SKILL.md) for exact-head review and merge policy.
