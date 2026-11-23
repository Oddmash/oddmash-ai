---
name: oddmash-product-planning
description: Write or assess an Oddmash product brief, landing-page brief, or material workflow change by defining audience, first useful action, product proof, and acceptance evidence.
---

# Oddmash product planning

Read the product brief, known constraints, and relevant repository agreements. Use the current screen or actual workflow as the starting point.

- For a new product or material direction change, compare existing alternatives against the target user's problem, workflow, limitations, and adoption cost. Cite primary evidence when external facts are needed. Identify why a separate product, integration, or contribution is justified.

- State who arrives, what they need to do first, and what a successful result looks like. For a developer tool, show executable behavior. For a game, show a real play or planning decision. Keep claims tied to what exists.
- Identify entry points and behavior people already rely on. Separate product decisions from reusable standards and record any choice that would affect compatibility, data, or production.
- Define success measures and evidence before choosing a design: first useful action, task completion, quality or compatibility, and adoption where relevant. Record baseline, target, and unknowns; do not invent research or success metrics. Use the same content, conditions, and measures when comparing alternatives. Distinguish observable results, user research, and hypotheses.
- Lead a landing page with the real product promise, then visible evidence. When a before/after comparison is the proof, show both outcomes on first view where feasible; an optional replay may explain the transition but should not be required to discover the benefit. Put advanced controls after the first useful action.
- Give each landing section one job. Remove repeated descriptions and links that do not serve a distinct next action.
- Capture the chosen direction, open decisions, non-goals, and a reviewable first slice. For pages, include the proposed first action and the concrete evidence visible before secondary content.

Use [UX design](../oddmash-ux-design/SKILL.md) for task flows and [product growth](../oddmash-product-growth/SKILL.md) for feedback and experimentation after launch.

- For a solo-maintained product, identify minimum operating scope before implementation: user-facing states, WCAG 2.2 AA target for web interfaces, data processing map, third-party asset/API rights, applicable policies, abuse prevention, operations cost, support contact, recovery and retirement. Mark each applicable, not applicable with reason, or unresolved.
- Define acceptance evidence and an explicit launch gate using [UX design](../oddmash-ux-design/SKILL.md), [accessibility](../oddmash-accessibility/SKILL.md), [security and privacy](../oddmash-security-privacy/SKILL.md), [copyright and licensing](../oddmash-copyright-licensing/SKILL.md), and [release management](../oddmash-release-management/SKILL.md). Do not silently accept unknown legal or privacy decisions.

## Applicability routing

For a new product or significant change, create a scoped checklist with columns area, applicability (required / optional / not applicable / unresolved), reason, owner and acceptance evidence. Required means needed for the stated scope, core safety, or established policy; optional means a deliberate product choice. Do not implement optional features without scope authorization.

| Trigger | Consult |
| --- | --- |
| Any repository change | [Git workflow](../oddmash-git-workflow/SKILL.md) and quality assurance |
| Public links, previews, export or embeds | [Sharing and distribution](../oddmash-sharing-distribution/SKILL.md) |
| Public pages, docs or internal search | [Discoverability](../oddmash-discoverability/SKILL.md) |
| Hosted service, external dependencies or persistent data | [Service operations](../oddmash-service-operations/SKILL.md) |
| Multiple locales or region-sensitive content | [Internationalization](../oddmash-internationalization/SKILL.md) |
| Billing, entitlements or usage quotas | [Monetization](../oddmash-monetization/SKILL.md) |
| Any distributed artifact or deployable product | [Platform delivery](../oddmash-platform-delivery/SKILL.md) |

For a small local library, billing/accounts may be out of scope; for a shared planning app, link visibility and revocation are required if private sharing is supported; for a browser extension, permission and store review are relevant. Explicitly mark unresolved choices, prioritize the smallest sustainable scope, and carry required items into QA and release gates.
