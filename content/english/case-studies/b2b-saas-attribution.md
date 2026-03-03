---
title: "B2B SaaS: From Conflicting Dashboards to a Single Source of Truth"
meta_title: "B2B SaaS Attribution Case Study | Domain Methods"
description: "How a 300-person B2B SaaS growth team went from five conflicting dashboards to one trusted attribution pipeline — and started making budget decisions in hours instead of weeks."
date: 2026-01-15T00:00:00Z
image: "/images/service-1.png"
draft: false
---

## The Challenge

A 300-person B2B SaaS company was spending six figures monthly on paid acquisition across Google, LinkedIn, and Meta. Their growth team knew marketing was working — pipeline was growing — but they couldn't prove which channels were actually driving it.

The numbers told a different story depending on who you asked:

- **Google Analytics** reported 500 conversions last month
- **The CRM** showed 380 new leads
- **The billing system** counted 42 new customers
- **Ad platforms** collectively claimed credit for 700+ conversions

Every board meeting turned into a debate about which numbers were "real." The CMO defended marketing's contribution with one set of reports. The CFO pushed back with another. The VP of Growth was caught in the middle, unable to make confident budget allocation decisions.

Their attribution model changed depending on who was presenting — and trust in the data had eroded to zero.

## What We Found

During our initial assessment, we identified three root causes:

**Broken data plumbing.** UTM parameters were inconsistent across campaigns. Nearly 30% of CRM leads had no source attribution at all because form submissions weren't passing tracking data correctly.

**Siloed systems with no common key.** The ad platforms, GA4, CRM, and billing system had never been connected through a shared data model. Each team trusted "their" tool and dismissed the others.

**No agreed-upon definition of revenue.** Marketing measured "pipeline generated." Finance measured "cash collected." Sales measured "bookings." Three valid metrics, three different numbers — and no one had ever aligned on which one defined ROAS.

## What We Built

We rebuilt their attribution pipeline from the ground up:

1. **Unified data warehouse** on BigQuery — ingesting data from ad platforms, GA4, HubSpot CRM, and Stripe billing via Fivetran
2. **dbt transformation layer** with tested, documented models that joined website sessions → CRM leads → opportunities → closed revenue
3. **Consistent UTM framework** with automated validation and alerting when campaigns launched without proper tagging
4. **Single executive dashboard** in Looker showing blended and channel-level ROAS using a finance-approved revenue definition

We started with last-touch attribution on closed-won deals, shipped it in week three, and validated it against the finance team's numbers. Then we layered in first-touch acquisition channel data over the following two weeks.

## The Result

**Budget decisions went from weeks to hours.** The growth team could see channel-level ROAS updated daily and reallocate spend within the same week.

**Marketing and finance aligned.** The CFO and CMO now share the same dashboard — and the same numbers. Board meetings shifted from arguing about data to discussing strategy.

**Attribution coverage jumped from ~60% to 95%.** The UTM framework and improved CRM integration closed the gaps that had been hiding where leads actually came from.

The entire engagement took six weeks from kickoff to the team owning the system independently.

---

{{< button label="Talk to Us About Attribution" link="/services/revenue-analytics" >}}
