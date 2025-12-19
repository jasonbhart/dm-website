# Domain Methods Homepage Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Implement the Domain Methods homepage design, transforming the Hugoplate template into a professional consultancy website.

**Architecture:** Content-driven Hugo site using front matter for homepage sections. Pillar pages as placeholder content. Calendar embed via iframe on dedicated booking page. Brand colors applied via theme.json.

**Tech Stack:** Hugo Extended, Tailwind CSS, Hugoplate theme modules

---

## Task 1: Update Site Metadata

**Files:**
- Modify: `hugo.toml:1-20`
- Modify: `config/_default/params.toml:1-70`

**Step 1: Update hugo.toml with site title**

```toml
# Change line 5 from:
title = "Hugoplate"
# To:
title = "Domain Methods"
```

**Step 2: Update params.toml with Domain Methods branding**

Update these specific values:

```toml
# Line 14: Change logo_text
logo_text = "Domain Methods"

# Line 30: Change copyright
copyright = "© 2025 Domain Methods. All rights reserved."

# Lines 39-42: Update navigation button
[navigation_button]
enable = true
label = "Book a Call"
link = "contact-us"

# Lines 57-60: Disable announcement banner
[announcement]
enable = false

# Lines 64-69: Update metadata
[metadata]
keywords = ["Marketing Analytics", "Data Strategy", "Revenue Operations", "dbt Consulting", "SaaS Analytics"]
description = "Marketing Data & Analytics for SaaS. We help growth, data, and RevOps teams build trusted analytics that drive revenue."
author = "Domain Methods"
twitter = ""
image = "images/og-image.png"
```

**Step 3: Run dev server to verify changes**

Run: `npm run dev`
Expected: Site loads with "Domain Methods" title, "Book a Call" nav button

**Step 4: Commit**

```bash
git add hugo.toml config/_default/params.toml
git commit -m "feat: update site metadata for Domain Methods branding"
```

---

## Task 2: Update Brand Colors

**Files:**
- Modify: `data/theme.json`

**Step 1: Update theme.json with blue/red/white palette**

Replace entire file content:

```json
{
  "colors": {
    "default": {
      "theme_color": {
        "primary": "#1e40af",
        "secondary": "#dc2626",
        "body": "#ffffff",
        "border": "#e5e7eb",
        "light": "#f9fafb",
        "dark": "#111827"
      },
      "text_color": {
        "text": "#4b5563",
        "text_dark": "#111827",
        "text_light": "#6b7280"
      }
    },
    "darkmode": {
      "theme_color": {
        "primary": "#3b82f6",
        "secondary": "#ef4444",
        "body": "#111827",
        "border": "#374151",
        "light": "#1f2937",
        "dark": "#f9fafb"
      },
      "text_color": {
        "text": "#d1d5db",
        "text_dark": "#f9fafb",
        "text_light": "#9ca3af"
      }
    }
  },
  "fonts": {
    "font_family": {
      "primary": "Inter:wght@400;500;600;700",
      "primary_type": "sans-serif",
      "secondary": "Inter:wght@500;600;700",
      "secondary_type": "sans-serif"
    },
    "font_size": {
      "base": "16",
      "scale": "1.2"
    }
  }
}
```

**Step 2: Clear Hugo cache and rebuild**

Run: `rm -rf resources/_gen && npm run dev`
Expected: Site loads with blue primary color, red secondary accents

**Step 3: Commit**

```bash
git add data/theme.json
git commit -m "feat: update brand colors to blue/red/white palette"
```

---

## Task 3: Update Navigation Menu

**Files:**
- Modify: `config/_default/menus.en.toml`

**Step 1: Replace navigation menu structure**

Replace entire file content:

```toml
############# English navigation ##############

# main menu
[[main]]
name = "Services"
weight = 1
hasChildren = true

[[main]]
parent = "Services"
name = "Revenue Analytics"
url = "/services/revenue-analytics"
weight = 1

[[main]]
parent = "Services"
name = "Data Foundation"
url = "/services/data-foundation"
weight = 2

[[main]]
parent = "Services"
name = "Data Activation"
url = "/services/data-activation"
weight = 3

[[main]]
name = "About"
url = "/about"
weight = 2

[[main]]
name = "Blog"
url = "/blog"
weight = 3


# footer menu
[[footer]]
name = "Services"
url = "/services/revenue-analytics"
weight = 1

[[footer]]
name = "About"
url = "/about"
weight = 2

[[footer]]
name = "Blog"
url = "/blog"
weight = 3

[[footer]]
name = "Privacy Policy"
url = "/privacy-policy"
weight = 4

[[footer]]
name = "Terms of Service"
url = "/terms"
weight = 5
```

**Step 2: Verify navigation in browser**

Run: `npm run dev`
Expected: Services dropdown appears with 3 pillar links, About and Blog in main nav

**Step 3: Commit**

```bash
git add config/_default/menus.en.toml
git commit -m "feat: update navigation for Domain Methods site structure"
```

---

## Task 4: Update Social Links

**Files:**
- Modify: `data/social.json`

**Step 1: Update social.json with LinkedIn only**

Replace entire file content:

```json
{
  "main": [
    {
      "name": "linkedin",
      "icon": "fab fa-linkedin",
      "link": "https://www.linkedin.com/company/domain-methods"
    }
  ]
}
```

**Step 2: Verify footer shows only LinkedIn**

Expected: Footer social section shows single LinkedIn icon

**Step 3: Commit**

```bash
git add data/social.json
git commit -m "feat: update social links to LinkedIn only"
```

---

## Task 5: Update Homepage Content

**Files:**
- Modify: `content/english/_index.md`

**Step 1: Replace homepage front matter with Domain Methods content**

Replace entire file content:

```yaml
---
# Banner
banner:
  title: "Turn messy data into decisions that drive revenue"
  content: "We help growth, data, and RevOps teams build trusted analytics that actually get used."
  image: "/images/banner.png"
  button:
    enable: true
    label: "Book a Discovery Call"
    link: "/contact-us"

# Features (Pillars)
features:
  - title: "Know What is Driving Revenue"
    image: "/images/service-1.png"
    content: "For growth and RevOps teams tired of conflicting metrics and unclear attribution."
    bulletpoints:
      - "Marketing analytics and attribution"
      - "Revenue operations metrics"
      - "Finance-adjacent reporting"
      - "Ad spend optimization"
    button:
      enable: true
      label: "Learn More"
      link: "/services/revenue-analytics"

  - title: "Build a Trusted Data Foundation"
    image: "/images/service-2.png"
    content: "For data and RevOps leaders who need a single source of truth they can rely on."
    bulletpoints:
      - "Data strategy and architecture"
      - "Pipeline development"
      - "dbt implementation"
      - "Data governance"
    button:
      enable: true
      label: "Learn More"
      link: "/services/data-foundation"

  - title: "Turn Data Into Action"
    image: "/images/service-3.png"
    content: "For teams ready to activate their data warehouse and drive real business outcomes."
    bulletpoints:
      - "Reverse ETL implementation"
      - "Data activation strategies"
      - "Warehouse-as-CDP solutions"
      - "Operational analytics"
    button:
      enable: true
      label: "Learn More"
      link: "/services/data-activation"
---
```

**Step 2: Verify homepage loads with new content**

Run: `npm run dev`
Expected: Homepage shows "Turn messy data..." headline, three pillar cards

**Step 3: Commit**

```bash
git add content/english/_index.md
git commit -m "feat: update homepage content with Domain Methods messaging"
```

---

## Task 6: Update Call-to-Action Section

**Files:**
- Modify: `content/english/sections/call-to-action.md`

**Step 1: Update CTA content**

Replace entire file content:

```yaml
---
enable: true
title: "Find out what is possible with your data"
image: "/images/call-to-action.png"
description: "Book a discovery call. No pitch, just clarity on your next step."
button:
  enable: true
  label: "Book a Discovery Call"
  link: "/contact-us"

# do not create a separate page
build:
  render: "never"
---
```

**Step 2: Verify CTA section on homepage**

Expected: CTA shows updated copy with link to /contact-us

**Step 3: Commit**

```bash
git add content/english/sections/call-to-action.md
git commit -m "feat: update CTA section with Domain Methods messaging"
```

---

## Task 7: Update Testimonials Section for Client Highlights

**Files:**
- Modify: `content/english/sections/testimonial.md`

**Step 1: Update testimonial section as client highlights placeholder**

Replace entire file content:

```yaml
---
enable: true
title: "Trusted by data-driven teams"
description: "We have helped SaaS and ecommerce companies transform their data into actionable insights."

# Testimonials
testimonials:
  - name: "Client Name"
    designation: "VP of Growth, SaaS Company"
    avatar: "/images/avatar-sm.png"
    content: "Domain Methods helped us finally understand what was driving our revenue. The clarity we gained transformed how we make decisions."

  - name: "Client Name"
    designation: "Head of Data, Tech Company"
    avatar: "/images/avatar-sm.png"
    content: "They built us a data foundation we can actually trust. Our team now has confidence in every metric we report."

# do not create a separate page
build:
  render: "never"
---
```

**Step 2: Verify testimonials section displays**

Expected: Testimonials section shows placeholder client quotes

**Step 3: Commit**

```bash
git add content/english/sections/testimonial.md
git commit -m "feat: update testimonials section as client highlights placeholder"
```

---

## Task 8: Create Contact-Us Booking Page

**Files:**
- Create: `content/english/contact-us/_index.md`

**Step 1: Create contact-us directory and page**

```bash
mkdir -p content/english/contact-us
```

**Step 2: Create booking page content**

Create file `content/english/contact-us/_index.md`:

```yaml
---
title: "Book a Discovery Call"
meta_title: "Book a Discovery Call | Domain Methods"
description: "Schedule a 30-minute discovery call to get clarity on your next step with your data. No pitch, no obligation."
layout: "contact"
draft: false
---

### 30 minutes to get clarity on your next step

No pitch, no obligation. We will discuss your current challenges and explore what is possible with your data.

**What to expect:**
- A focused conversation about your data challenges
- Honest assessment of whether we can help
- Clear next steps, regardless of fit

**Video or phone. Free.**

<!-- Calendar embed will go here -->
<!-- Replace the comment below with your Calendly/Cal.com embed code -->

<div class="calendly-embed" style="min-width:320px;height:700px;">
  <p>Calendar booking will be embedded here. Replace this with your Calendly or Cal.com embed code.</p>
</div>
```

**Step 3: Verify page loads at /contact-us**

Run: `npm run dev`
Navigate to: `http://localhost:1313/contact-us`
Expected: Booking page displays with placeholder for calendar embed

**Step 4: Commit**

```bash
git add content/english/contact-us/_index.md
git commit -m "feat: create contact-us booking page with calendar placeholder"
```

---

## Task 9: Create Service Pillar Pages (Placeholders)

**Files:**
- Create: `content/english/services/_index.md`
- Create: `content/english/services/revenue-analytics.md`
- Create: `content/english/services/data-foundation.md`
- Create: `content/english/services/data-activation.md`

**Step 1: Create services directory**

```bash
mkdir -p content/english/services
```

**Step 2: Create services landing page**

Create file `content/english/services/_index.md`:

```yaml
---
title: "Services"
meta_title: "Services | Domain Methods"
description: "Marketing data, revenue analytics, and data strategy services for SaaS and ecommerce companies."
draft: false
---

We help growth, data, and RevOps teams build trusted analytics that drive revenue.

Explore our services below to find the right solution for your needs.
```

**Step 3: Create revenue-analytics pillar page**

Create file `content/english/services/revenue-analytics.md`:

```yaml
---
title: "Know What is Driving Revenue"
meta_title: "Revenue Analytics | Domain Methods"
description: "Marketing analytics, attribution, and revenue operations for growth and RevOps teams."
image: "/images/service-1.png"
draft: false
---

## For growth and RevOps teams tired of conflicting metrics

You know the feeling: different tools show different numbers, stakeholders question every report, and you are never quite sure which channels are actually driving revenue.

We help you cut through the noise and build analytics you can trust.

### What we do

- **Marketing Analytics & Attribution** — Understand which campaigns and channels actually drive results
- **Revenue Operations Metrics** — Build the dashboards and reports your revenue team needs
- **Ad Spend Optimization** — Know exactly where your marketing dollars are working
- **Finance-Adjacent Reporting** — Connect marketing metrics to financial outcomes

### Who this is for

This service is ideal for:
- VP/Directors of Growth or Performance Marketing
- Revenue Operations leaders
- Marketing teams at companies with $10M+ ARR

### Ready to get clarity on your revenue drivers?

{{< button label="Book a Discovery Call" link="/contact-us" >}}
```

**Step 4: Create data-foundation pillar page**

Create file `content/english/services/data-foundation.md`:

```yaml
---
title: "Build a Trusted Data Foundation"
meta_title: "Data Foundation | Domain Methods"
description: "Data strategy, pipeline development, and dbt implementation for data and RevOps teams."
image: "/images/service-2.png"
draft: false
---

## For data and RevOps leaders who need a single source of truth

Your team spends more time questioning data than using it. Reports do not match, pipelines break, and nobody trusts the numbers. You need a foundation you can build on.

We help you create data infrastructure that your entire organization can rely on.

### What we do

- **Data Strategy & Architecture** — Design the right approach for your stage and needs
- **Pipeline Development** — Build reliable data flows from source to insight
- **dbt Implementation** — Transform your raw data into trusted, tested models
- **Data Governance** — Establish the processes that keep your data trustworthy

### Who this is for

This service is ideal for:
- Heads of Data
- VP/Directors of Revenue Operations
- Companies adopting modern data stack (GCP, AWS, Databricks)

### Ready to build a data foundation you can trust?

{{< button label="Book a Discovery Call" link="/contact-us" >}}
```

**Step 5: Create data-activation pillar page**

Create file `content/english/services/data-activation.md`:

```yaml
---
title: "Turn Data Into Action"
meta_title: "Data Activation | Domain Methods"
description: "Reverse ETL, data activation, and operational analytics for teams ready to use their data warehouse."
image: "/images/service-3.png"
draft: false
---

## For teams ready to activate their data warehouse

You have built a solid data foundation. Now you need to put it to work. Your warehouse holds valuable insights, but getting that data into the tools where your team actually works is the challenge.

We help you turn your data warehouse into an activation engine.

### What we do

- **Reverse ETL Implementation** — Push warehouse data to your operational tools
- **Data Activation Strategies** — Design workflows that put insights into action
- **Warehouse-as-CDP Solutions** — Use your warehouse as your customer data platform
- **Operational Analytics** — Embed data into daily workflows and decisions

### Who this is for

This service is ideal for:
- Heads of Product or Growth (PLG companies)
- Data teams with mature warehouse infrastructure
- Companies ready to move from reporting to activation

### Ready to put your data to work?

{{< button label="Book a Discovery Call" link="/contact-us" >}}
```

**Step 6: Verify all service pages load**

Run: `npm run dev`
Navigate to:
- `http://localhost:1313/services/`
- `http://localhost:1313/services/revenue-analytics/`
- `http://localhost:1313/services/data-foundation/`
- `http://localhost:1313/services/data-activation/`

Expected: All pages load with content, navigation dropdown links work

**Step 7: Commit**

```bash
git add content/english/services/
git commit -m "feat: create service pillar pages (placeholders)"
```

---

## Task 10: Update About Page

**Files:**
- Modify: `content/english/about/_index.md`

**Step 1: Update about page with Domain Methods content**

Replace entire file content:

```yaml
---
title: "About Domain Methods"
meta_title: "About | Domain Methods"
description: "Marketing Data, Revenue, Analytics Engineering, and AI for SaaS and Ecommerce. Obsessed with truth and UX."
image: "/images/avatar.png"
layout: "about"
draft: false
---

## Translating messy data into decisive action

Domain Methods was founded on a simple belief: data work should favor practical elegance and deliver measurable outcomes.

We specialize in marketing data, revenue analytics, and analytics engineering for SaaS and ecommerce companies. Our clients are typically mid-size companies (100-1000 employees) who know they need better data but are not sure who to trust or what to do next.

### Our approach

We are obsessed with truth and UX. That means we build analytics that are not just accurate, but actually get used. We follow the 80/20 rule — focusing on the 20% of work that delivers 80% of the value.

**What we believe:**

- Data should drive decisions, not just fill dashboards
- Practical elegance beats theoretical perfection
- Trust is earned through clarity and results
- The best analytics are the ones people actually use

### How we work

We start with understanding your specific challenges, not selling a pre-packaged solution. Discovery calls are about clarity, not pitches. If we are not the right fit, we will tell you.

For the right projects, we bring deep expertise in:
- Marketing analytics and attribution
- Revenue operations and metrics
- Modern data stack (dbt, cloud warehouses)
- Data activation and reverse ETL

### Ready to talk?

{{< button label="Book a Discovery Call" link="/contact-us" >}}
```

**Step 2: Verify about page loads**

Navigate to: `http://localhost:1313/about/`
Expected: About page shows Domain Methods content

**Step 3: Commit**

```bash
git add content/english/about/_index.md
git commit -m "feat: update about page with Domain Methods content"
```

---

## Task 11: Create Terms of Service Page

**Files:**
- Create: `content/english/pages/terms.md`

**Step 1: Create terms page**

Create file `content/english/pages/terms.md`:

```yaml
---
title: "Terms of Service"
meta_title: "Terms of Service | Domain Methods"
description: "Terms of service for Domain Methods consulting services."
draft: false
---

## Terms of Service

*Last updated: December 2025*

These terms govern your use of the Domain Methods website and services.

### Use of Services

Domain Methods provides data analytics consulting services. All engagements are subject to separate statements of work that define specific terms, deliverables, and pricing.

### Intellectual Property

Content on this website is owned by Domain Methods unless otherwise noted. Client deliverables and ownership are defined in individual engagement agreements.

### Limitation of Liability

Domain Methods provides consulting services on an as-is basis. We are not liable for decisions made based on our recommendations beyond the scope defined in engagement agreements.

### Contact

For questions about these terms, contact us through the booking page.

{{< button label="Contact Us" link="/contact-us" >}}
```

**Step 2: Commit**

```bash
git add content/english/pages/terms.md
git commit -m "feat: create terms of service page"
```

---

## Task 12: Final Verification and Cleanup

**Step 1: Run full build**

```bash
npm run build
```

Expected: Build completes without errors

**Step 2: Test all navigation links**

Manual verification checklist:
- [ ] Header "Book a Call" button → /contact-us
- [ ] Services dropdown → all 3 pillar pages
- [ ] About link → /about
- [ ] Blog link → /blog
- [ ] Footer links all work
- [ ] Homepage CTA → /contact-us
- [ ] Pillar page CTAs → /contact-us

**Step 3: Verify mobile responsiveness**

Open dev tools, test at mobile breakpoints (375px, 768px)

**Step 4: Create final commit with all changes summary**

```bash
git status
# If any uncommitted changes:
git add .
git commit -m "feat: complete Domain Methods homepage implementation"
```

---

## Summary of Files Changed

| File | Action | Purpose |
|------|--------|---------|
| `hugo.toml` | Modify | Site title |
| `config/_default/params.toml` | Modify | Branding, nav button, metadata |
| `config/_default/menus.en.toml` | Modify | Navigation structure |
| `data/theme.json` | Modify | Brand colors |
| `data/social.json` | Modify | LinkedIn only |
| `content/english/_index.md` | Modify | Homepage content |
| `content/english/sections/call-to-action.md` | Modify | CTA messaging |
| `content/english/sections/testimonial.md` | Modify | Client highlights |
| `content/english/about/_index.md` | Modify | About page content |
| `content/english/contact-us/_index.md` | Create | Booking page |
| `content/english/services/_index.md` | Create | Services landing |
| `content/english/services/revenue-analytics.md` | Create | Pillar 1 |
| `content/english/services/data-foundation.md` | Create | Pillar 2 |
| `content/english/services/data-activation.md` | Create | Pillar 3 |
| `content/english/pages/terms.md` | Create | Terms of service |
