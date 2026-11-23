---
name: oddmash-monetization
description: Assess and design monetization, billing, subscriptions, entitlements, quotas, cancellation and refunds for paid or usage-limited Oddmash products.
---

# Oddmash monetization

Activate only when money, paid entitlements or usage limits are relevant. Establish audience, pricing model, operating costs and owner-approved commercial decisions before implementing.

- Define prices, currency, tax presentation, billing interval, renewal, trial terms, free limits, upgrades/downgrades, cancellation, refunds and support. Verify applicable regional requirements and provider terms with current official sources; escalate legal/tax uncertainties rather than invent policy.
- Prefer a reputable hosted payment flow; minimize payment data and avoid storing card details. Specify entitlement ownership and server-side verification, event handling, idempotency, reconciliation and audit records without sensitive values.
- Model states: checkout pending, success, canceled, failed, expired, delayed confirmation, renewal failure, grace period, changed plan, refund and disputed payment. UI success alone must not grant paid access; avoid duplicate charges and preserve clear recovery.
- Provide transparent pricing, invoices/receipts as applicable, usage counters, clear limit explanations, accessible cancellation and account/data handling. Avoid forced continuity, hidden fees or obstructed cancellation.
- Verify with provider sandbox and synthetic accounts: duplicate events, delayed events, retries, concurrent updates, rounding and locale formatting, expiration and entitlement transitions. Never use real cards, issue refunds, change live prices or activate billing without explicit authorization.

Use [privacy](../oddmash-security-privacy/SKILL.md), [internationalization](../oddmash-internationalization/SKILL.md), and [service operations](../oddmash-service-operations/SKILL.md).
