# Pillar Pages Design

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Create a flexible pillar page template for service-focused landing pages that drive ICP interest and conversions.

**Architecture:** Hugo layout template with YAML front matter for structured content sections. Each section conditionally renders based on content presence.

**Tech Stack:** Hugo Extended, Tailwind CSS, existing Hugoplate components

---

## Template Structure

**Layout file:** `layouts/pillar.html`

**Sections in fixed order:**

| Order | Section | Renders if... | Background |
|-------|---------|---------------|------------|
| 1 | Hero | Always (required) | White |
| 2 | Major Outcome | `outcome` defined | White |
| 3 | Types of Projects | `projects.items` has items | Gray gradient |
| 4 | Client Outcomes | `clients.logos` or `clients.case_studies` has items | White |
| 5 | Industries | `industries` has items | Gray gradient |
| 6 | Pricing | `pricing` defined | White |
| 7 | Final CTA | Always (fallback defaults) | Gray gradient |

---

## Content Schema

Example front matter for a pillar page:

```yaml
---
title: "Know What is Driving Revenue"
meta_title: "Revenue Analytics | Domain Methods"
description: "Marketing analytics, attribution, and revenue operations for growth and RevOps teams."
layout: "pillar"

# Hero (required)
hero:
  tagline: "Revenue Analytics"
  title: "Know What is Driving Revenue"
  content: "For growth and RevOps teams tired of conflicting metrics and unclear attribution."
  image: "/images/service-1.png"
  button:
    label: "Book a Discovery Call"
    link: "/contact-us"

# Major Outcome (optional)
outcome:
  headline: "Clients typically see 30% improvement in marketing ROI"
  points:
    - "Clear attribution across all channels"
    - "Single source of truth for revenue metrics"
    - "Dashboards your team actually trusts"

# Types of Projects (optional)
projects:
  title: "How We Help"
  items:
    - name: "Attribution Audit"
      description: "Diagnose gaps in your current tracking and measurement setup"
    - name: "Dashboard Build"
      description: "Revenue dashboards your team will actually use"
    - name: "Pipeline Development"
      description: "End-to-end data pipelines for marketing and revenue data"

# Client Outcomes (optional)
clients:
  title: "Trusted By"
  logos:
    - "/images/clients/logo1.png"
    - "/images/clients/logo2.png"
    - "/images/clients/logo3.png"
  case_studies:
    - client: "Acme SaaS"
      logo: "/images/clients/acme.png"
      outcome: "Reduced CAC by 30%"
      summary: "Rebuilt attribution from scratch to finally understand which channels drove revenue."
      link: "/case-studies/acme"  # optional

# Industries (optional)
industries:
  title: "Industries We Serve"
  items:
    - name: "SaaS"
      icon: "fa-cloud"
      link: "/industries/saas"  # optional
    - name: "Ecommerce"
      icon: "fa-shopping-cart"
    - name: "B2B Tech"
      icon: "fa-building"

# Pricing (optional)
pricing:
  headline: "Engagements start at $5,000"
  description: "Scope and pricing confirmed after discovery call."
  button:
    label: "Book a Discovery Call"
    link: "/contact-us"

# Final CTA (optional - has defaults)
cta:
  title: "Ready to get started?"
  description: "Let's talk about your specific challenges."
  button:
    label: "Book a Discovery Call"
    link: "/contact-us"
---

Optional markdown content appears below all sections (rarely needed).
```

---

## Visual Layout

### Hero Section
- Centered layout matching homepage
- Tagline: small caps, primary color, uppercase
- Title: h1
- Content: subtitle paragraph
- CTA button: primary style with arrow
- Full-width image below

### Major Outcome Section (white bg)
- Headline: h2, centered
- Bullet points: checkmark list, centered or left-aligned
- Clean, focused on the primary value proposition

### Types of Projects (gray gradient bg)
- Section title: h2, centered
- Card grid: 3-4 columns on desktop, 2 on tablet, 1 on mobile
- Each card: name (h4) + 1-sentence description
- Cards have light background, subtle shadow

### Client Outcomes (white bg)
- Section title: h2, centered
- Logo row: horizontally centered, grayscale with hover color
- Case study cards (if present): below logos
  - Each card: logo + client name + outcome headline + summary
  - Optional link to full case study

### Industries (gray gradient bg)
- Section title: h2, centered
- Icon grid: 4 columns on desktop
- Each item: FontAwesome icon + industry name
- Optional link wrapper on each item

### Pricing (white bg)
- Headline: h2, centered (the "starts at" statement)
- Description: paragraph, centered
- CTA button: primary style

### Final CTA (gray gradient bg)
- Same pattern as about page CTA
- Title, description, button
- Fallback defaults if not customized in front matter

---

## Implementation Notes

1. **Reuse existing patterns:** Hero mirrors homepage, CTA mirrors about page
2. **Conditional rendering:** Use Hugo's `{{ with }}` and `{{ if }}` for optional sections
3. **Responsive grid:** Use existing Tailwind grid classes from the theme
4. **Icons:** FontAwesome (already included in theme)
5. **Images:** Use existing `partial "image"` helper for optimization

---

## Primary Pillar Pages to Create

1. **Revenue Analytics** (`/services/revenue-analytics`)
   - Target: Tony (Growth/Marketing) + Betty (RevOps)
   - Focus: Attribution, ROAS, revenue metrics

2. **Data Foundation** (`/services/data-foundation`)
   - Target: Jimmy (Head of Data) + Betty (RevOps)
   - Focus: dbt, pipelines, governance, single source of truth

3. **Data Activation** (`/services/data-activation`)
   - Target: Hank (PLG/Product) + others
   - Focus: Reverse ETL, warehouse-as-CDP, operational analytics

---

## Future Extensions

- **Secondary pillar pages by industry:** Use same template with industry-specific content
- **Secondary pillar pages by persona:** Could create persona-focused landing pages
- **Case study pages:** Separate template, linked from pillar page case study cards
