# QA execution playbook

## Establish scope

- Read the task, acceptance criteria, product AGENTS.md, existing tests, known defects and the current diff. Identify exact revision, environment, supported versions, risk, user roles and affected contracts. Do not assume access to production or authorization to modify code.
- Define a test matrix with ID, requirement, risk, priority, prerequisites, synthetic test data, scenario, expected result and evidence. Cover primary, alternate, boundary, invalid, recovery and regression paths. Mark inapplicable cases with reasons.
- Select the cheapest trustworthy test layer: static/type/lint for structure, unit for pure behavior, integration for component/API/data contracts, E2E for user journeys, visual for real layout, manual exploration for unexpected behavior. Do not duplicate every assertion across layers. Prefer existing project tooling; add dependencies only with justification.

## Execute

1. Run the existing required checks using repository commands. Record exit code, exact revision, environment and relevant output.
2. Run focused unit and integration checks; verify boundary values, errors, asynchronous behavior and backward compatibility. Use isolated deterministic data and cleanup.
3. Exercise primary workflows in a real browser or product runtime when applicable. Use representative supported devices, viewport sizes, browsers, roles and themes. Capture actual screenshots for visual defects; inspect focus, keyboard, screen reader where available, overflow, overlays and loading transitions.
4. Exercise defined failure/recovery paths using safe local fixtures, mocked network and provider sandboxes. Verify no unexpected writes, duplicate actions, data loss or sensitive logging. Do not target external systems, construct exploits or run offensive validation.
5. Compare performance using a stated baseline, consistent hardware, data and repeated measurements; verify budgets for changed behavior. Distinguish simulated device, real device and observed production metrics.
6. Explore beyond scripted cases: interrupt actions, navigate back, refresh, resize, use slow or offline connections, change supported preferences and test realistic long/empty content. Respect environment and data boundaries.

## Fix and retest

- For confirmed defects, capture expected versus actual behavior, minimal safe reproduction, environment, impact and evidence. Use existing issue conventions when filing is authorized. Deduplicate symptoms of the same root cause.
- In QA-only scope, report findings without editing the product. If fixing is authorized, add a failing regression test where feasible, make the smallest compatible fix, verify targeted recovery, then rerun affected suites and core smoke tests on the new revision.
- Never weaken an assertion, skip a required check, update a visual baseline blindly or hide failures. For flaky tests, isolate nondeterminism, record reruns separately, investigate the cause, and avoid treating retry success as a clean pass.
- Re-evaluate evidence after every material change; stale exact-head results cannot certify the revised candidate.

## Product-specific examples

| Product | Representative minimum coverage |
| --- | --- |
| UI library | Controlled/uncontrolled state, public props/types, keyboard, focus, themes, visual and consumer compatibility |
| Text/layout library | Browser rendering, font changes, resize, mixed script, SSR/hydration, cleanup, performance and package install |
| Browser extension | Supported browsers, lifecycle, permission disclosure, supported pages, state persistence, graceful restricted-page handling |
| Shared planning web app | Save/reload, undo, sharing visibility, revoked link, embed fallback, session expiry, responsive editor |
| Game | Build launch, input, core loop, save/load, settings, frame stability and recovery on supported platforms |

Use product-specific requirements rather than mandating all examples.
