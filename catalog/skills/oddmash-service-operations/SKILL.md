---
name: oddmash-service-operations
description: Plan and maintain reliable solo-operated Oddmash services, covering observability, cost, incidents, maintenance, data recovery, support and retirement.
---

# Oddmash service operations

Define the minimum sustainable operating model: dependencies, environments, owner, support hours, availability goals, budget and recovery objectives. Avoid promising unsupported SLAs.

- Maintain a dependency/vendor inventory with renewal, quota, billing and migration risks. Set budget alerts, hard limits where supported, graceful quota exhaustion, and escalation for unexpected spend.
- Track health, user-visible errors, latency and resource usage with privacy-safe logs and useful alerts; deduplicate noise. Document thresholds, ownership and what to do when alerts fire. Never add telemetry or change production settings without authorization.
- Establish scheduled maintenance, dependency updates, certificate/domain renewal, backup retention, restore drills in nonproduction and rollback verification. Define safe migration sequencing and recovery for partially completed work.
- Prepare a short incident runbook: detect, classify, contain safely, notify maintainer, communicate verified impact, recover, verify and document follow-up. Preserve evidence securely and escalate privacy incidents using [security and privacy](../oddmash-security-privacy/SKILL.md).
- Define support channels, escalation, known-issue communication, accessible degraded states, and data export/retirement plans. Announce material changes only with authorization.
- Test health checks, dependency outages, timeout/retry, queue failure, budget/quota exhaustion and restoration using synthetic or nonproduction scenarios. Record service limitations and remaining operational work.

Use [release management](../oddmash-release-management/SKILL.md) for deployment and rollback gates.
