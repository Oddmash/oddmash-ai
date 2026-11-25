# Oddmash Skills

Reusable instructions for people and coding agents working on Oddmash products, from initial product decisions to delivery, release, and ongoing improvement.

| Area | Skills |
| --- | --- |
| Product definition | [Product planning](skills/oddmash-product-planning/SKILL.md) |
| Experience and visual direction | [UX design](skills/oddmash-ux-design/SKILL.md), [Brand design](skills/oddmash-brand-design/SKILL.md), [Motion design](skills/oddmash-motion-design/SKILL.md) |
| Developer documentation | [Developer documentation](skills/oddmash-developer-documentation/SKILL.md) |
| Motion patterns | [Content transitions](skills/oddmash-motion-content-transition/SKILL.md), [Entrance and reveal](skills/oddmash-motion-entrance-reveal/SKILL.md), [Layout transitions](skills/oddmash-motion-layout-transition/SKILL.md), [Control microinteractions](skills/oddmash-motion-microinteraction/SKILL.md), [Feedback motion](skills/oddmash-motion-feedback/SKILL.md) |
| Engineering | [Technical architecture](skills/oddmash-technical-architecture/SKILL.md), [Web delivery](skills/oddmash-web-delivery/SKILL.md), [Motion implementation](skills/oddmash-motion-implementation/SKILL.md) |
| Cross-cutting checks | [Visual clarity](skills/oddmash-visual-clarity/SKILL.md), [Accessibility](skills/oddmash-accessibility/SKILL.md), [Copyright and licensing](skills/oddmash-copyright-licensing/SKILL.md), [Security and privacy](skills/oddmash-security-privacy/SKILL.md) |
| Distribution and operation | [Sharing and distribution](skills/oddmash-sharing-distribution/SKILL.md), [Discoverability](skills/oddmash-discoverability/SKILL.md), [Service operations](skills/oddmash-service-operations/SKILL.md), [Internationalization](skills/oddmash-internationalization/SKILL.md), [Monetization](skills/oddmash-monetization/SKILL.md), [Platform delivery](skills/oddmash-platform-delivery/SKILL.md) |
| Quality and delivery | [Git workflow](skills/oddmash-git-workflow/SKILL.md), [Code review collaboration](skills/oddmash-code-review-collaboration/SKILL.md), [Quality assurance](skills/oddmash-quality-assurance/SKILL.md), [Release management](skills/oddmash-release-management/SKILL.md) |
| Discovery and growth | [Product marketing](skills/oddmash-product-marketing/SKILL.md), [Product growth](skills/oddmash-product-growth/SKILL.md), [Community management](skills/oddmash-community-management/SKILL.md) |
| Product playbooks | [Juliya](products/kowrap/kowrap-landing/SKILL.md), [Oddmash UI](products/oddmash-ui/oddmash-ui-development/SKILL.md) |

## Decision ownership and routing

Use one primary owner for each question. Select only applicable specialists rather than treating the catalog as a mandatory implementation checklist. Product playbooks supply identity, technical constraints, local evidence, and current product preferences; they do not redefine shared rules or freeze an incidental layout.

| Question | Primary owner | Supporting guidance |
| --- | --- | --- |
| Who is this for, and what must the product prove? | Product planning | Product marketing for messaging; growth for post-launch evidence |
| What journey and controls does the user need? | UX design | Accessibility for applicable constraints |
| What should it look like? | Brand design | Product identity and shared design tokens |
| What should move, and why? | Motion design | Select only the relevant motion pattern; implementation handles timing and geometry |
| How should users learn and use a public API? | Developer documentation | Technical architecture for contracts; discoverability for indexing and agent-readable outputs |
| How should the change be implemented? | Web delivery or technical architecture | Product playbook, local repository rules |
| Does the rendered experience meet its intent? | Visual clarity | Accessibility and developer documentation for their domains |
| Is the candidate verified and ready? | Quality assurance | Release management owns readiness and publishing gates; Git workflow owns collaboration |

A current authorized requirement takes precedence over a revisable design preference, within applicable authority, public contracts and accessibility requirements. Shared geometry, motion timings and composition patterns are defaults, not acceptance conditions. Existing UI is a hypothesis to inspect. When a user repeatedly identifies the same kind of defect, re-evaluate the owning decision and the whole affected journey.

For a new or substantially redesigned landing, start with product planning, UX and brand, then read the product-specific website direction and use its acceptance gate. For a small localized change, load the relevant owner only. Add motion design only if the proof benefits from motion, developer documentation for actual usage, and visual clarity plus QA before handoff. For a small API docs correction, start with developer documentation and the local contract; do not load every landing skill. For an operational or backend change, use the appropriate engineering or operations owner, not the design bundle.

Product-specific commands, contracts, and deployment policies stay with the product.

Use [routing evaluation scenarios](docs/skill-evaluation.md) to test skill selection and output quality without treating structural validation as model evaluation.

See [CONTRIBUTING.md](CONTRIBUTING.md) for installation and maintenance.

## Integration

Skills remain independently installable for people and coding assistants. [Oddmash Agents](https://github.com/Oddmash/oddmash-agents) owns executable automation and may adopt reviewed skill revisions without copying instructions. Organization-wide authority and collaboration rules live in [Oddmash organization agreements](https://github.com/Oddmash/.github/blob/main/AGENTS.md). Agent deployments and skill updates have separate lifecycles.

## Solo-maintainer readiness

For new products or material launches, start with product planning and technical architecture; use UX design when the scope includes a user-facing journey to enumerate applicable states. Apply WCAG 2.2 AA, privacy and copyright/terms reviews throughout implementation. Before release, use the quality assurance evidence matrix and release gate to identify verified, failed, inapplicable and unverified checks. Never treat a generated policy or automated accessibility scan as proof of compliance.

Use the applicability routing table in [product planning](skills/oddmash-product-planning/SKILL.md) to choose required, optional and inapplicable specialist checks. Do not expand product scope merely to satisfy a checklist.
