---
name: oddmash-web-delivery
description: Deliver a scoped Oddmash website or frontend change, from repository checks and component ownership through browser verification and review evidence.
---

# Oddmash web delivery

Inspect the target checkout, remote, base branch, and user changes. Read the target AGENTS.md and use its runtime and verification commands.

- Decide which boundary owns the change. Use existing Oddmash UI controls when their interaction contract fits, and keep product-specific layout, branding, and behavior with the consumer. Use the package's local maintenance instructions for public exports or token changes.
- Follow the normal application entry point. Preserve supported URLs and interaction contracts. Match tests to risk: native input and keyboard behavior, narrow layouts, rendering and hydration, fonts, or deployment base paths as applicable.
- When users can interact while state changes, verify the result they see and the action they can take next. Include failure paths and a browser difference when technically relevant.
- Record the tested revision, exact commands, observations, and gaps. Distinguish local checks, remote CI, and deployment. Project guidance does not grant permission to merge, publish, or deploy.
