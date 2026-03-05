---
title: "Ecommerce SaaS: Warehouse-as-CDP Replaced a $120K/Year Vendor Tool"
meta_title: "Ecommerce Warehouse-as-CDP Case Study | Domain Methods"
description: "How a mid-market ecommerce SaaS replaced their expensive CDP with a warehouse-native approach using reverse ETL — cutting costs 80% while gaining more flexibility."
date: 2026-01-08T00:00:00Z
image: "/images/service-3.png"
draft: false
---

## The Challenge

A mid-market ecommerce SaaS platform was paying $120K/year for a CDP that had become more burden than benefit. The tool was originally adopted to unify customer data across their marketing stack, but three years in, the limitations were clear:

- **Black-box identity resolution.** The CDP's matching algorithm produced results the team couldn't explain or audit. When customer counts didn't match the warehouse, the vendor's response was "trust the CDP" — which the data team couldn't accept
- **Rigid audience builder.** The CDP's segmentation UI couldn't express the complex audience logic the marketing team needed. Segments like "customers who purchased in the last 90 days AND used feature X but NOT feature Y, with LTV above $500" required workarounds or weren't possible at all
- **Slow iteration cycle.** Adding a new data source to the CDP required a vendor engagement. Changing a segment definition required navigating a GUI that didn't support version control or review. The marketing team was blocked waiting on the CDP team, who was blocked waiting on the vendor
- **Cost trajectory was unsustainable.** The $120K annual contract was up for renewal with a proposed 25% increase based on data volume growth. The CFO asked the data team to evaluate alternatives

Meanwhile, the company had invested heavily in their data warehouse over the previous year. Clean, tested dbt models covered customer profiles, purchase history, product usage, and marketing attribution. The warehouse already had everything the CDP had — and more.

## What We Found

**The CDP was doing four things — and the warehouse already did three of them.** Data collection, identity resolution, and audience segmentation were all replicated (often more accurately) in the warehouse's dbt models. The only missing piece was the sync layer — getting segments from the warehouse into downstream tools.

**The CDP's identity resolution was less accurate than the warehouse.** The warehouse's deterministic matching using email, customer ID, and billing records produced cleaner results than the CDP's probabilistic matching. The data team had already identified cases where the CDP merged records that shouldn't have been merged.

**Audience definitions in the warehouse were more powerful.** SQL-based segmentation in dbt could express any logic the team needed, and the definitions were version-controlled, documented, and testable. The CDP's GUI couldn't match this flexibility.

## What We Built

1. **Reverse ETL pipeline via Hightouch** — connected to the existing BigQuery warehouse and configured syncs to Klaviyo (email), Meta Ads, Google Ads, and their customer support platform
2. **Audience definition framework in dbt** — a set of mart models that computed audience segments as SQL queries, with automated tests validating segment logic (e.g., exclusion groups don't overlap, high-value segments meet minimum size thresholds)
3. **Sync scheduling and monitoring** — configured sync frequencies by destination (email audiences hourly, ad audiences daily, support enrichment real-time) with automated alerting on sync failures or significant audience size changes
4. **Migration runbook** — parallel-ran CDP and warehouse-native audiences for four weeks, comparing segment membership daily to validate equivalence before cutting over

## The Result

**Annual tooling cost dropped from $120K to $22K.** Hightouch licensing plus incremental BigQuery compute for audience syncs came in at roughly 80% less than the CDP. The CFO approved the migration in a single meeting after seeing the comparison.

**Audience flexibility increased dramatically.** The marketing team went from waiting days for segment changes in the CDP to defining new audiences in SQL and having them live within hours. Complex multi-condition segments that were impossible in the CDP's UI became routine.

**Data accuracy improved.** The deterministic identity resolution in the warehouse eliminated the ~2% false-merge rate the CDP had been producing. Email personalization accuracy improved, and the marketing team stopped getting complaints about mismatched customer data.

**No vendor lock-in.** Switching from Hightouch to Census or another reverse ETL tool is a configuration change, not a data migration. The audience logic lives in dbt, owned by the team, portable across any sync tool.

**The team owns the full stack.** The data team maintains audience definitions, sync configurations, and monitoring independently. They've since added two new destinations (LinkedIn Ads and their in-app messaging platform) without any outside help.

---

{{< button label="Talk to Us About Data Activation" link="/contact-us" >}}
