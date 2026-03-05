---
title: "Fintech Startup: 12 Data Sources Unified Into One Trusted Warehouse in 6 Weeks"
meta_title: "Fintech Data Unification Case Study | Domain Methods"
description: "How a Series A fintech startup consolidated data from 12 SaaS tools into a single BigQuery warehouse with dbt — replacing spreadsheet chaos with a single source of truth."
date: 2026-01-10T00:00:00Z
image: "/images/service-2.png"
draft: false
---

## The Challenge

A Series A fintech startup had grown from 10 to 60 employees in 18 months. Their product was working — transaction volume was up 300% year-over-year — but their data infrastructure hadn't kept pace.

Customer and operational data was scattered across 12 SaaS tools:

- **Product data** in PostgreSQL and Segment
- **Financial data** in Stripe and QuickBooks
- **Customer support** in Intercom and Zendesk
- **Sales and CRM** in HubSpot
- **Marketing** in Google Ads, Meta, and Mailchimp
- **HR and ops** in Rippling and Notion

Every team maintained their own spreadsheets to answer basic questions. The CEO reconciled four separate sources every month to build the board deck. Finance, product, and ops each had "their" version of customer count, revenue, and churn — and none of them matched.

The Series B fundraise was six months out. Investors would ask detailed questions about unit economics, cohort retention, and LTV:CAC ratios. The team couldn't answer them confidently — or consistently.

## What We Found

**No identity resolution across systems.** The same customer could be `customer_123` in the product database, `cus_abc` in Stripe, `contact-456` in HubSpot, and `user@company.com` in Intercom. Nobody had built a mapping between these identities, so joining data across systems was manual and error-prone.

**Metrics weren't defined.** When the CEO said "revenue," did she mean gross transaction volume, net revenue after refunds, or recognized revenue? When product said "active users," was that DAU, WAU, or MAU? When CS said "churn," was that logo churn or revenue churn? Nobody had written these definitions down, let alone agreed on them.

**Manual reporting was consuming senior leadership time.** The VP of Finance spent two full days each month building the board deck by manually pulling data from five different tools, reconciling discrepancies, and formatting spreadsheets. The Head of Product spent a full day each week manually calculating activation and retention metrics.

## What We Built

1. **BigQuery data warehouse** — centralized all 12 data sources using Fivetran for automated ingestion, with a clear schema design that separated raw, staging, and mart layers
2. **Identity resolution model** — a dbt model that resolved customer identities across all systems using email, Stripe customer ID, and product user ID as join keys, creating a single `dim_customer` table
3. **Metric definitions framework** — documented, version-controlled definitions for all key business metrics (revenue, churn, LTV, CAC, activation rate) with the finance and product teams as co-authors
4. **Executive dashboard** — a Looker dashboard covering the board deck metrics: revenue trends, cohort retention, unit economics, and funnel performance — all pulling from the same trusted models
5. **Self-service analytics layer** — mart tables designed for non-technical users, with clear naming conventions and inline documentation so team leads could answer their own questions

## The Result

**Board deck preparation went from 2 days to 20 minutes.** The VP of Finance now opens Looker, verifies the numbers refresh, and exports. The data is the same data the CEO, product team, and ops team see — no reconciliation needed.

**Unified customer view for the first time.** The identity resolution model connected records across all 12 systems. The team discovered that 8% of what they thought were separate customers were actually the same accounts across different products — changing their understanding of actual customer count and per-account revenue.

**Investor-ready analytics.** When Series B diligence started, the team could answer detailed cohort, retention, and unit economics questions in real-time during calls — pulling directly from the warehouse. The lead investor specifically cited data maturity as a differentiator.

**Product team reclaimed a day per week.** Activation and retention metrics that previously required manual calculation now update automatically. The Head of Product shifted that time to running experiments instead of counting users.

**The data foundation scales with them.** The team has since added two new data sources (a partner integration and a new payment processor) to the warehouse on their own, following the patterns and conventions we established. No outside help needed.

{{< button label="Talk to Us About Your Data Foundation" link="/contact-us" >}}
