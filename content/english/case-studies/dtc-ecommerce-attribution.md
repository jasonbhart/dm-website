---
title: "DTC Ecommerce: Cut Wasted Ad Spend 35% with True Channel-Level ROAS"
meta_title: "DTC Ecommerce Attribution Case Study | Domain Methods"
description: "How a venture-backed DTC brand spending $120K/month on ads unified attribution across Meta, Google, and TikTok — and cut blended CAC by over a third."
date: 2026-02-01T00:00:00Z
image: "/images/service-3.png"
draft: false
---

## The Challenge

A venture-backed DTC ecommerce brand was spending $120K/month across Meta, Google Shopping, and TikTok. Revenue was growing, but unit economics were deteriorating — and the team couldn't explain why.

The root issue: every ad platform claimed credit for nearly every conversion. Meta reported 2,400 purchases. Google reported 2,100. TikTok reported 900. Shopify showed 2,800 total orders. The overlap was massive, and there was no way to see true channel-level ROAS.

The growth team was flying blind. They couldn't answer basic questions:

- Which channel was actually driving incremental revenue?
- Where was the $120K/month best allocated?
- Which campaigns were cannibalizing organic traffic vs. driving net-new customers?

Budget decisions were made based on whichever platform's dashboard the growth lead happened to be looking at that day.

## What We Found

**Platform attribution was wildly inflated.** Each ad platform used its own click and view-through windows, attribution models, and deduplication logic. Meta's 7-day click / 1-day view window alone accounted for the majority of the over-counting.

**No server-side tracking.** The brand relied entirely on pixel-based tracking, which was degraded by iOS privacy changes and ad blockers. Roughly 25% of conversions had no reliable source data at all.

**Organic cannibalization was hidden.** A significant portion of branded Google Shopping spend was capturing customers who would have purchased organically. The team was paying for conversions they would have gotten for free.

## What We Built

1. **Unified attribution pipeline** — ingested data from Meta Ads, Google Ads, TikTok Ads, and Shopify into BigQuery via Fivetran, with a dbt transformation layer that deduplicated conversions using order IDs as the single source of truth
2. **Server-side tracking** via Google Tag Manager server-side container, recovering ~20% of previously unattributed conversions
3. **Incrementality framework** — built holdout test templates for each channel so the team could measure true incremental lift, not just platform-reported ROAS
4. **Weekly channel scorecard** — automated dashboard showing true ROAS, blended CAC, and new vs. returning customer mix by channel, updated daily in Looker

## The Result

**Blended CAC dropped 35% within the first month of reallocation.** The team discovered TikTok was driving awareness but not direct purchases, while non-branded Google Shopping had the highest true ROAS. They shifted budget accordingly.

**Identified $18K/month in wasted branded search spend.** Holdout tests proved that 60% of branded Google Shopping conversions would have happened organically. The team scaled back branded spend and reinvested in prospecting.

**New customer acquisition improved.** With the new-vs-returning split visible, the team stopped optimizing for repeat purchasers (who would have come back anyway) and focused ad spend on net-new customer acquisition.

**The board got confident, defensible unit economics.** Investor reporting shifted from "platform-reported ROAS" to "warehouse-verified ROAS" — a more conservative but far more trustworthy number that strengthened the Series B narrative.

---

{{< button label="Talk to Us About Attribution" link="/services/revenue-analytics" >}}
