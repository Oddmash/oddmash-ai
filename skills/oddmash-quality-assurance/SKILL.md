---
name: oddmash-quality-assurance
description: Plan and execute Oddmash QA, smoke, regression, exploratory, functional, visual, accessibility, performance and compatibility tests; triage defects, verify fixes and recommend release readiness.
---

# Oddmash quality assurance

Read the requirements, repository test commands, current behavior, and affected contracts. Define the expected result before running checks.

## QA workflow

1. Read [execution playbook](references/execution.md) and [reporting and release gates](references/reporting.md). Establish exact candidate, authorized scope, applicable environments, acceptance criteria and risk-based case matrix.
2. Run relevant existing tests and hands-on checks; verify behavior in the actual runtime when possible. Use synthetic fixtures and nonproduction environments. Record actual results instead of merely proposing a checklist.
3. Triage findings by severity and user impact. In QA-only work, return evidence without modifying implementation; with explicit fix scope, add regression coverage and retest affected behavior.
4. Report pass, fail, blocked, not applicable with reason, and not run separately. Keep exact-revision evidence, unverified required cases and unresolved risks visible. Recommend ready or not ready; do not grant merge or deployment authority.
5. When specialist review or real-world verification is essential but unavailable, escalate rather than claiming coverage. Use [release management](../oddmash-release-management/SKILL.md) for the final candidate and authority boundaries.
6. For an existing PR, reconcile every outstanding review finding against current evidence. When authorized to fix, add a targeted regression test, rerun relevant checks, and post the result in the original discussion using [scoped review collaboration](../oddmash-code-review-collaboration/SKILL.md). Distinguish corrected, disputed, unresolved, and awaiting reviewer confirmation; do not repeatedly request full reviews.

## Verification criteria

- Build a risk-based test matrix covering the changed behavior, relevant boundary values, failure and recovery, and existing behavior that must remain stable. Prefer meaningful assertions over snapshots or test counts.
- For user-facing changes, verify real interaction under representative conditions: keyboard, focus, narrow layouts, long labels, relevant themes, reduced motion, and actual browser or device behavior. Choose browser coverage based on the affected platform.
- For performance, use the same fixtures, environment, measurement definition, and repeated runs when comparing alternatives. Report variance and distinguish measured results from estimates.
- Add focused regression coverage for confirmed defects when implementation is authorized. Keep fixtures synthetic, deterministic, and free of private data; avoid external side effects and offensive testing.
- Record tested revision, commands, conditions, results, reproducible observations, and unverified cases. A passing local test is not evidence of remote CI or deployment success. Separate environment blockers from failed assertions.

Use product-specific verification playbooks when applicable; they supplement rather than replace these criteria.

## Product readiness evidence

For the changed scope, record pass/fail/not applicable (with reason)/not verified, exact revision and evidence. Include:
- State matrix: initial/refresh loading, skeleton layout stability, empty/filtered-empty, partial, timeout, offline, permission/session errors, retry, duplicate submissions, race/cancellation and success; verify retained data/input and focus.
- UI matrix: narrow/wide, real long localized content, themes, text resize, keyboard/touch, dialogs, scrolling/overflows, reduced motion and manual accessibility against [WCAG criteria](../oddmash-accessibility/SKILL.md). Use deterministic network mocks for adverse conditions and real browser tests for rendering.
- Data/policy matrix: permitted collection and refusal/withdrawal, redacted logs, authorization invariants, retention/deletion flows with synthetic data, accessible accurate policy links and documented asset rights. Refer to [privacy](../oddmash-security-privacy/SKILL.md) and [licensing](../oddmash-copyright-licensing/SKILL.md).
- Delivery matrix: lint/types/tests/build, representative browser coverage, performance budgets and actual measurements (LCP, INP, CLS where meaningful), compatibility, error monitoring and recovery. Never fabricate device or production results.
- Classify blockers by user harm, data exposure, legal uncertainty, core flow failure, accessibility barriers and regressions. Keep unresolved material blockers visible to the maintainer; do not treat incomplete checks as passed.

- Extend the matrix from the product's applicability checklist. Verify share revocation, embed fallback, page discovery/privacy, locale switching and regional formatting, saved-draft recovery, authentication/session transitions, billing sandbox state changes, and artifact/operational recovery where required. Use the relevant specialist skill for detailed criteria; do not demand irrelevant coverage.
