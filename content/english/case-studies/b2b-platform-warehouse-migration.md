---
title: "B2B Platform: Legacy ETL to Modern Cloud Warehouse in 8 Weeks"
meta_title: "B2B Platform Warehouse Migration Case Study | Domain Methods"
description: "How a venture-funded B2B platform migrated from legacy ETL to BigQuery with dbt — preserving business logic, adding data quality tests, and enabling team independence."
date: 2026-01-18T00:00:00Z
image: "/images/service-2.png"
draft: false
---

## The Challenge

A venture-funded B2B platform had outgrown their legacy data infrastructure. Their analytics ran on a combination of Informatica mappings, stored procedures in SQL Server, and a Looker instance connected directly to their production database.

The problems were compounding:

- **Production database load.** Analyst queries against the production database were causing latency spikes for end users during business hours. The engineering team had started throttling analytics access
- **Informatica maintenance burden.** Their two-person data team spent roughly 40% of their time maintaining Informatica jobs — debugging GUI-based transformations, managing scheduling conflicts, and troubleshooting connector issues
- **Vendor lock-in.** Informatica licensing costs were $85K/year and climbing. The team couldn't justify the expense for what was increasingly a maintenance burden rather than a productivity tool
- **No version control.** Transformation logic lived in GUI tools with no audit trail. When a business rule changed, there was no history of what it was before, who changed it, or why

The CEO wanted the data team to support a new product analytics initiative, but they had no capacity — their entire bandwidth was consumed by keeping the existing infrastructure running.

## What We Found

**Business logic was scattered and undocumented.** Critical revenue calculations lived across three Informatica mappings, two stored procedures, and a Looker derived table. Nobody could explain the full chain from source to report without opening five different tools.

**The production database dependency was a ticking time bomb.** One poorly-written analyst query had caused a 12-minute outage three months prior. The engineering team's response was to restrict access further — which meant the data team couldn't do their jobs.

**The Informatica-to-Looker pipeline had silent data quality issues.** A join condition in one mapping was producing duplicate records for ~3% of transactions. The error was systematic and had been inflating revenue reports for an unknown period.

## What We Built

1. **BigQuery data warehouse** on GCP — fully separated from the production database, with Fivetran connectors for the application database, Stripe, HubSpot, and Intercom
2. **dbt transformation layer** — all business logic migrated from Informatica mappings and stored procedures into version-controlled, tested SQL models
3. **Parallel validation pipeline** — ran legacy and modern pipelines side-by-side for three weeks, comparing outputs daily to catch discrepancies and validate accuracy
4. **Automated data quality tests** — 140+ tests across the dbt project catching issues like the 3% duplicate that had been silently inflating revenue numbers
5. **Updated Looker models** — reconnected Looker to BigQuery with improved LookML that reflected the clean, documented dbt models

## The Result

**Migration completed in 8 weeks** — from kickoff to the legacy system sunset date. The parallel validation period confirmed that the new pipeline was not only equivalent but more accurate than the old one.

**Eliminated $85K/year in Informatica licensing.** BigQuery on-demand costs and Fivetran connectors came in at roughly $18K/year — a 79% cost reduction.

**Production database fully decoupled.** Zero analyst queries against production since week four. The engineering team removed all analytics-related database restrictions.

**Fixed the 3% revenue inflation.** The duplicate record issue was identified during migration testing and corrected in the dbt model. Finance retroactively adjusted two quarters of reporting.

**The team now owns the stack independently.** Both data team members were trained on dbt, BigQuery, and the new pipeline architecture. They've since added three new data sources and built four new marts without any outside help.

{{< button label="Talk to Us About Your Data Foundation" link="/contact-us" >}}
