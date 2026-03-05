---
title: "Mid-Market SaaS: Closing the Attribution Gap from 60% to 95%"
meta_title: "Mid-Market SaaS Attribution Case Study | Domain Methods"
description: "How a mid-market SaaS company went from being unable to prove marketing ROI to the board to having finance-adjacent reporting that connected campaign spend to closed-won revenue."
date: 2026-01-20T00:00:00Z
image: "/images/service-1.png"
draft: false
---

## The Challenge

A mid-market SaaS company with a 90-day average sales cycle knew their marketing was working — the pipeline was healthy and growing. But when the board asked "What's our ROAS by channel?", the team couldn't answer with confidence.

The core problem: only about 60% of ad spend could be traced to pipeline. The other 40% disappeared into a black hole between ad click and closed deal. The attribution gap meant the CMO was defending marketing's budget with incomplete data, and the CFO was skeptical of every number presented.

Compounding the issue, the sales cycle crossed multiple quarters. Campaigns launched in Q1 generated pipeline in Q2 and closed revenue in Q3. Monthly reporting made every campaign look like it was underperforming because the time window was too short.

## What We Found

**The lead-to-opportunity join was broken.** Marketing leads entered HubSpot, but the association between marketing contacts and sales opportunities was inconsistent. About a third of opportunities had no marketing source attached.

**No lagged reporting view.** The team evaluated campaign performance on a 30-day window for a business with a 90-day sales cycle. Campaigns were routinely paused after four weeks for "not converting" when deals simply hadn't closed yet.

**Revenue definition mismatch.** Marketing reported on "pipeline generated" (opportunity value). Finance reported on "net new ARR" (contract value minus churn). The gap between these two numbers was consistently 40-50%, and it looked like marketing was inflating results.

## What We Built

1. **CRM data hygiene and automation** — built HubSpot workflows to auto-associate contacts with deals based on domain matching and engagement history, closing the lead-to-opportunity gap
2. **Cohort-based attribution model** — built in dbt, tracking campaigns on a 90-day attribution window matched to the actual sales cycle
3. **Finance-adjacent revenue reporting** — connected HubSpot pipeline data to Stripe billing data, using the CFO's definition of revenue (net new ARR) rather than marketing's (pipeline value)
4. **Quarterly board deck template** — pre-built views showing channel-level ROAS with appropriate time lags, making board reporting a 15-minute exercise instead of a two-week scramble

## The Result

**Attribution coverage went from ~60% to 95%.** The CRM automation and data hygiene work closed the gap on unattributed pipeline.

**The CFO and CMO now present from the same dashboard.** Finance trusts the numbers because they're calculated using their revenue definition, validated against billing data.

**Campaign evaluation improved dramatically.** The team stopped killing campaigns prematurely. With the cohort-based model, they could see which Q1 campaigns were generating Q2 pipeline — and double down on what was working.

**Board reporting went from adversarial to strategic.** The conversation shifted from "are these numbers real?" to "where should we invest more?"

---

{{< button label="Talk to Us About Attribution" link="/contact-us" >}}
