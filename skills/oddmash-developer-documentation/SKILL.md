---
name: oddmash-developer-documentation
description: Design, write, or review public developer documentation, quickstarts, installation, API references, property and option tables, examples, component docs, compatibility, troubleshooting and migrations for Oddmash libraries, SDKs, CLIs and developer tools.
---

# Oddmash developer documentation

Read the released or approved public API, package exports, supported versions, real examples, audience and documentation sources. Keep the documentation accurate before styling it.

## Learning and lookup

- Separate the first integration journey from detailed reference. Lead with installation, a minimal runnable example and its real output; add framework-specific, advanced and migration recipes where they serve an actual task. Keep essential usage on the product website; link the source and issue tracker as secondary resources.
- Organize reference pages around how users find an API, not a generated inventory alone. Provide stable navigation, headings, anchors and contextual links. Add search only if the volume and task warrant it. Route search behavior and discovery to [discoverability](../oddmash-discoverability/SKILL.md).
- Derive signatures, required inputs, defaults, constraints, types, return values, errors and compatibility from public contracts. Distinguish genuinely required, conditionally required and optional inputs. Explain conditional rules next to the relevant field or mode and validate them against actual types.
- Prefer compact reference presentation: name, type, default and description when useful. Mark required fields with a small inline text cue or a symbol with a visible legend and accessible meaning. Leave ordinary optional fields unadorned when absence of that cue is clear. Do not automatically add a dedicated requirement column, badge, color, or repeated explanation. Choose explicit columns only if filtering or comparison actually benefits.
- Keep code and technical terms visually distinct. Put selection, language and copy controls near their content only when useful; copy the current complete snippet, preserving whitespace and reporting actual success or failure. Use independent package-manager or framework options when commands are alternatives rather than telling users to run mutually exclusive commands.
- Use readable typography, sufficient contrast, responsive tables with deliberate horizontal scrolling for long signatures, and consistent code-block spacing. Do not create incidental inner scrollbars, clipped controls, or wrapped short headings. Use [visual clarity](../oddmash-visual-clarity/SKILL.md) for rendered review and [accessibility](../oddmash-accessibility/SKILL.md) for applicable requirements.

## Source, release and evidence

- Keep one authoritative documentation source; derive rendered pages and agent-readable artifacts from it. Delegate metadata, indexing, public llms.txt and Markdown artifact details to [discoverability](../oddmash-discoverability/SKILL.md), not a second documentation source. Keep private content out of public outputs.
- Verify actual install/import/example execution in a clean supported consumer where feasible; compare documented signatures and defaults against exports and supported versions. Check the first useful flow, required/conditional semantics, code copy, navigation and anchors in representative desktop and narrow renders. Record gaps and pass results to [quality assurance](../oddmash-quality-assurance/SKILL.md) and [release management](../oddmash-release-management/SKILL.md).

## Runtime advisory guidance

- Compare affected examples, reference entries and migration steps against the supplied public contract, supported versions, and changed behavior. Point out concrete mismatches that could block a reader's next step.
- State which example or reference needs verification when the supplied material does not establish its correctness. Keep presentation suggestions focused on discoverability or readability problems evidenced by the change.
