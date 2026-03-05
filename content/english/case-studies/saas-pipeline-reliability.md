---
title: "Mid-Market SaaS: From Constant Pipeline Firefighting to 99%+ Uptime"
meta_title: "SaaS Pipeline Reliability Case Study | Domain Methods"
description: "How a 200-person SaaS company's data team stopped firefighting broken pipelines and shifted to proactive analysis — with dbt, automated testing, and clear governance."
date: 2026-01-20T00:00:00Z
image: "/images/service-2.png"
draft: false
---

## The Challenge

A 200-person mid-market SaaS company had built their data infrastructure organically over three years. What started as a handful of Python scripts pulling data from their application database had grown into a sprawling web of 60+ ETL jobs, cron tasks, and manual data pulls.

The data team of five spent more than half their time fixing broken pipelines:

- **Morning fire drills were routine.** At least two or three pipelines failed every week, often silently — the team only found out when a stakeholder complained about stale or wrong numbers
- **No testing or documentation.** Nobody knew exactly what each pipeline did, what business logic it encoded, or what would break if a source schema changed
- **Trust had eroded.** Stakeholders stopped using dashboards and went back to pulling their own data from the application database directly — creating even more conflicting numbers

The VP of Data was spending her time apologizing for broken reports instead of driving the analytics roadmap the business needed.

## What We Found

**Fragile, undocumented transformation logic.** Business rules were buried in Python scripts that only their original authors understood. When those authors left the company, the logic became a black box. One script that calculated churn had been silently broken for two months — nobody noticed because the numbers "looked reasonable."

**No data quality gates.** There were zero automated tests. A source system could change a column name, drop a table, or start sending nulls, and the team wouldn't know until a downstream dashboard broke — sometimes days later.

**No clear ownership model.** "The data team" owned everything, which meant nobody owned anything specifically. When something broke, the on-call person triaged by urgency (who's yelling loudest), not importance.

## What We Built

1. **dbt-based transformation layer** — migrated all 60+ transformation jobs into a single dbt project with clear staging, intermediate, and mart layers following the medallion architecture
2. **Automated testing suite** — every model ships with primary key uniqueness, not-null constraints on critical fields, and business logic assertions (e.g., MRR should never be negative, user counts should fall within expected ranges)
3. **Schema change detection** — automated alerts when source systems modify schemas, catching breaking changes before they cascade downstream
4. **Clear ownership in code** — every model has a named owner in `schema.yml`, with descriptions, column definitions, and lineage documentation generated automatically by dbt docs
5. **Incident runbook** — documented playbook for the five most common failure modes so any team member can diagnose and fix issues, not just the person who built the pipeline

## The Result

**Pipeline reliability went from ~85% to 99.4% uptime** in the first two months. Automated tests caught three source schema changes and two data quality issues that would have previously gone undetected for days.

**The data team reclaimed 60% of their time.** Hours previously spent on reactive maintenance shifted to proactive analysis, new model development, and stakeholder enablement.

**Stakeholder trust recovered.** Within six weeks, the finance team retired their shadow spreadsheets and started using the dashboards again — because the numbers matched and the data was fresh every morning.

**The VP of Data got her roadmap back.** With pipeline reliability no longer a crisis, the team shipped three new analytics initiatives in the quarter following our engagement — initiatives that had been stuck on the backlog for over a year.

---

{{< button label="Talk to Us About Your Data Foundation" link="/contact-us" >}}
