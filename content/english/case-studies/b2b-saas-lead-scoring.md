---
title: "B2B SaaS: AI Lead Scoring Increased Sales Efficiency 40%"
meta_title: "B2B SaaS AI Lead Scoring Case Study | Domain Methods"
description: "How a B2B SaaS company with a PLG motion used AI-powered product-qualified lead scoring to surface the right trial accounts for sales — increasing qualified pipeline 40%."
date: 2026-01-05T00:00:00Z
image: "/images/service-3.png"
draft: false
---

## The Challenge

A B2B SaaS company with a product-led growth motion was generating 2,000+ new trial signups per month. Revenue was growing, but sales efficiency was declining — and the team couldn't figure out why.

The core problem: sales reps had no way to distinguish high-intent trial users from casual signups. Their CRM showed every new trial as a lead, but the only data available was firmographic — company name, title, company size. Nothing about what the user actually did in the product.

The consequences were expensive:

- **Reps called everyone.** With no signal about product engagement, SDRs worked the list top-to-bottom, spending equal time on users who signed up and never came back as on users who'd completed onboarding, invited their team, and were hitting plan limits
- **Conversion rates were declining.** As trial volume grew, sales couldn't keep up. Response times increased, and engaged trial users waited days for a call — by which point many had moved on
- **The "qualified" in MQL was meaningless.** Marketing qualified leads based on form fills and email opens. But a CMO who downloaded a whitepaper and never logged into the product was scored higher than a developer who'd been using the product daily for two weeks. The scoring model was backwards

The VP of Sales was frustrated: "We know product usage matters, but we can't see it. We're calling people blind."

## What We Found

**Rich behavioral data existed — it was just trapped.** The warehouse had detailed product events: logins, feature usage, workspace creation, team invitations, API calls, data volume, and more. The data team had already modeled these into clean, tested tables. But none of it reached the CRM.

**Historical conversion patterns were clear.** When we analyzed the last 12 months of trial-to-paid conversions, strong predictive patterns emerged: users who completed three specific onboarding steps, invited at least one teammate, and used a core feature within the first week converted at 8x the rate of users who didn't.

**The existing lead scoring was counterproductive.** The marketing-based MQL score had a 0.12 correlation with actual conversion. Product engagement signals had a 0.67 correlation. The team was optimizing for the wrong signal.

## What We Built

1. **Product-qualified lead scoring model** — a gradient-boosted classifier (XGBoost) trained on 12 months of trial conversion data, using 23 product behavioral features: activation milestones, feature adoption depth, usage frequency, collaboration signals, and data volume trends
2. **Daily scoring pipeline** — the model runs daily in the warehouse, scoring every active trial account and producing a 0-100 PQL score with a human-readable explanation of the top contributing factors
3. **Reverse ETL sync to Salesforce** — PQL scores, contributing factors, product usage summary, and key milestones synced to the lead and account records via Census, refreshed every 6 hours
4. **Sales workflow automation** — Salesforce workflows that route high-PQL accounts (score > 70) to the appropriate rep based on segment, trigger Slack alerts for score spikes, and auto-update lead status
5. **Rep-facing context cards** — custom Salesforce component showing the prospect's product journey: what they've done, what they haven't, and what behaviors historically predict conversion

## The Result

**Qualified pipeline from inbound trials increased 40% in the first quarter.** Reps were calling the right people at the right time — users who had demonstrated product engagement and were ready for a sales conversation. Conversion rates on PQL-flagged accounts were 4.2x higher than the overall trial base.

**Average response time for high-intent prospects dropped from 3 days to 4 hours.** The routing automation ensured that accounts crossing the PQL threshold got immediate attention instead of sitting in a queue.

**SDR productivity nearly doubled.** Reps stopped spending time on dead accounts. The number of meaningful conversations per rep per day increased from an average of 6 to 11 — not by working harder, but by knowing who to call.

**Marketing-sales alignment improved.** The PQL score gave both teams a shared language. Marketing could optimize campaigns for product engagement (not just form fills), and sales could give marketing concrete feedback on which user behaviors actually predicted revenue.

**The model improves over time.** As more conversion data accumulates, the model retrains monthly with updated feature importance. The data team manages this independently — no ongoing dependency on our team.

---

{{< button label="Talk to Us About Data Activation" link="/contact-us" >}}
