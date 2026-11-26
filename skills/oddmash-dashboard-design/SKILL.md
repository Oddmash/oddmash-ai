---
name: oddmash-dashboard-design
description: Design or redesign operational dashboards, monitoring consoles, execution histories, workflow graphs, activity queues and data-heavy interfaces. Use for information hierarchy, responsive data layouts and observable status presentation before implementation.
---

# Oddmash dashboard design

Start with the operator's actual decisions: identify what needs attention, locate the affected target, inspect evidence and act through the authorized destination. Read the product contract and current rendered screens. Compare a simpler alternative to the existing composition before styling.

- Define a task-first information hierarchy and navigation. Prioritize active work, failures and work awaiting attention; distinguish historical records from current state. Use drill-down for secondary data. Avoid repeated counts, headings, controls and nested card borders.
- Define a data-state contract. Show measured scope and timestamps, distinguish pending, partial, unavailable and empty from zero, and never infer progress, approval or a causal sequence from missing telemetry. Separate execution state from publication and review decisions.
- For execution workflows, prefer responsive HTML rows or cards and an accessible detail timeline when that communicates the task. Use an interactive graph only where topology matters; do not scale text or hit targets to fit a fixed canvas. Show observed stages first, group unobserved optional stages separately, keep failures and elapsed time immediately visible. Preserve independent attempts and parallel activity rather than inventing a single run.
- Define shared icon alignment, control heights, type hierarchy, spacing, row density and focus using the product's released design system and JSON-backed local tokens. Use native or shared controls for specific actions. Avoid a toolbar unless every control serves a distinct frequent task or accessibility need.
- Plan real responsive layouts for dense desktop, narrow/mobile, supported locales and light/dark themes. Keep essential information readable without zoom or horizontal page scroll. Use actual long labels, missing fields and mixed status fixtures. Provide explicit keyboard access to details and meaningful motion only for real state changes; honor reduced motion.
- Write a short product design brief before implementation identifying primary action, chosen layout, alternatives rejected, state semantics and known constraints. Scope shared component changes to proven reuse opportunities.
- Route independent rendered acceptance to [visual clarity](../oddmash-visual-clarity/SKILL.md), interaction/accessibility checks to [quality assurance](../oddmash-quality-assurance/SKILL.md) and accessibility, and implementation to web delivery. Record real before/after evidence, viewport, locale, theme, revision, task result and unresolved defects separately from CI. If visual evidence is missing, report not verified; do not claim design acceptance from source assertions or successful build.
- A failed design acceptance means revisit the design decision, not add another decorative rule. Do not invent data, widen permissions, change merge gates or publish from this skill.
