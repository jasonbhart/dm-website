# Domain Methods Homepage Design

## Overview

Redesign of the Hugoplate template homepage to reflect Domain Methods' positioning as a data/analytics consultancy for SaaS and Ecommerce companies.

**Design philosophy:**
- Outcome-first messaging (lead with value, not features)
- Low detail on homepage, funneling to pillar pages for depth
- Professional tone, no contractions
- Matter-of-fact, not salesy

---

## Global Copy Guidelines

1. **No contractions** — Use "do not" instead of "don't", "it is" instead of "it's", etc.
2. **Outcome-first** — Lead with what the client achieves, not what you do
3. **Professional but accessible** — Matter-of-fact tone, avoid jargon where possible
4. **Persona-aware** — Language should resonate with growth, data, and RevOps leaders

---

## Page Structure

### Header

```
┌─────────────────────────────────────────────────────────────┐
│  [Logo]     Nav Links                        [CTA Button]   │
│  Domain                                                     │
│  Methods    Services ▾ | About | Blog       Book a Call    │
└─────────────────────────────────────────────────────────────┘
```

**Elements:**
- Logo (left)
- Navigation: Services (dropdown to 3 pillar pages) | About | Blog
- CTA button: "Book a Call" → links to /contact-us

---

### Section 1: Hero Banner

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Small tagline: "Marketing Data & Analytics for SaaS"]     │
│                                                             │
│  HEADLINE (large):                                          │
│  "Turn messy data into decisions that drive revenue"        │
│                                                             │
│  SUBHEAD (supporting):                                      │
│  "We help growth, data, and RevOps teams build trusted      │
│   analytics that actually get used."                        │
│                                                             │
│  [Book a Discovery Call]  ← primary button → /contact-us    │
│   See how we help →       ← secondary link, scrolls to      │
│                             pillars section                 │
│                                                             │
│                        (optional hero image/graphic)        │
└─────────────────────────────────────────────────────────────┘
```

**Copy notes:**
- Headline is outcome-first, uses "revenue" to signal business impact
- Subhead names the ICP roles so visitors self-identify
- "Trusted analytics that actually get used" nods to UX obsession and single-source-of-truth positioning

---

### Section 2: Pillar Intros

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Section headline: "How we help"                            │
│                                                             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │
│  │ PILLAR 1    │  │ PILLAR 2    │  │ PILLAR 3    │         │
│  │             │  │             │  │             │         │
│  │ "Know What  │  │ "Build a    │  │ "Turn Data  │         │
│  │  is Driving │  │  Trusted    │  │  Into       │         │
│  │  Revenue"   │  │  Foundation"│  │  Action"    │         │
│  │             │  │             │  │             │         │
│  │ For growth &│  │ For data &  │  │ For teams   │         │
│  │ RevOps teams│  │ RevOps leads│  │ ready to    │         │
│  │ tired of    │  │ who need a  │  │ activate    │         │
│  │ conflicting │  │ single      │  │ their       │         │
│  │ metrics     │  │ source of   │  │ warehouse   │         │
│  │             │  │ truth       │  │             │         │
│  │ ───────     │  │ ───────     │  │ ───────     │         │
│  │ Marketing   │  │ Data        │  │ Reverse ETL │         │
│  │ Analytics   │  │ Strategy &  │  │ & Data      │         │
│  │ Attribution │  │ Pipeline    │  │ Activation  │         │
│  │ Revenue Ops │  │             │  │             │         │
│  │             │  │             │  │             │         │
│  │ [Learn more]│  │ [Learn more]│  │ [Learn more]│         │
│  └─────────────┘  └─────────────┘  └─────────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Content layers per card:**
1. **Outcome headline** (largest) — the hook
2. **Persona qualifier** — who it is for + their pain point
3. **Service tags** (smaller, subtle) — what you actually do
4. **Link** — to full pillar page

**Pillar mapping:**

| Pillar | Outcome Hook | Persona | Service Area |
|--------|--------------|---------|--------------|
| 1 | "Know What is Driving Revenue" | Tony + Betty (Marketing & RevOps) | Marketing Analytics, Attribution, Revenue Ops, Finance-adjacent |
| 2 | "Build a Trusted Data Foundation" | Jimmy + Betty (Data & RevOps) | Data Strategy, Pipeline, Single Source of Truth |
| 3 | "Turn Data Into Action" | Hank + all | Data Activation, Reverse ETL, Warehouse-as-CDP (AI as enabler) |

---

### Section 3: Mid-Page CTA

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Background: Subtle contrast (light gray or brand color)    │
│                                                             │
│  HEADLINE:                                                  │
│  "Find out what is possible with your data"                 │
│                                                             │
│  SUBHEAD:                                                   │
│  "Book a discovery call. No pitch, just clarity on          │
│   your next step."                                          │
│                                                             │
│              [Book a Discovery Call]                        │
│                      → /contact-us                          │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Copy notes:**
- "Find out what is possible" speaks to ICP anxiety ("I do not know what to do next")
- "No pitch, just clarity" sets matter-of-fact tone
- Links to dedicated booking page

---

### Section 4: Client Highlights & Wins

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Section headline: "Trusted by data-driven teams"           │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]  [Logo]     │    │
│  │                                                     │    │
│  │  (Grayscale, evenly spaced, expandable row)         │    │
│  └─────────────────────────────────────────────────────┘    │
│                                                             │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐   │
│  │ CASE STUDY 1  │  │ CASE STUDY 2  │  │ CASE STUDY 3  │   │
│  │               │  │               │  │               │   │
│  │ Client Name   │  │ Client Name   │  │ Client Name   │   │
│  │               │  │               │  │               │   │
│  │ "Outcome      │  │ "Outcome      │  │ "Outcome      │   │
│  │  achieved in  │  │  achieved in  │  │  achieved in  │   │
│  │  one line"    │  │  one line"    │  │  one line"    │   │
│  │               │  │               │  │               │   │
│  │ → Read more   │  │ → Read more   │  │ → Read more   │   │
│  └───────────────┘  └───────────────┘  └───────────────┘   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Design for iteration:**
- Logo bar: Start with 2-3, add more over time (grayscale keeps it clean even with few)
- Case study cards: Launch with 1-2 if needed, grid naturally fills as you add
- Card format follows "Client + Project = Lesson Learned" pattern
- "Read more" links to full case study (omit link if full page not ready yet)

---

### Section 5: Footer

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  [Logo]                                                     │
│  Domain Methods                                             │
│                                                             │
│  NAVIGATION          CONNECT          LEGAL                 │
│  Services            LinkedIn         Privacy Policy        │
│  About               Email            Terms of Service      │
│  Blog                                                       │
│                                                             │
│  ───────────────────────────────────────────────────────    │
│                                                             │
│  © 2025 Domain Methods. All rights reserved.                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Additional Pages

### /contact-us (Booking Page)

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  HEADLINE:                                                  │
│  "Book a Discovery Call"                                    │
│                                                             │
│  SUBHEAD:                                                   │
│  "30 minutes to get clarity on your next step.              │
│   No pitch, no obligation."                                 │
│                                                             │
│  ┌───────────────────────────────────────┐                  │
│  │                                       │                  │
│  │     [Embedded Calendar iframe]        │                  │
│  │        (Calendly / Cal.com)           │                  │
│  │                                       │                  │
│  └───────────────────────────────────────┘                  │
│                                                             │
│  (Small text below)                                         │
│  "Video or phone • Free"                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Post-booking flow (not on page, but documented):**
- Confirmation email includes qualification survey
- Call cancelled or referred if not qualified

---

### Pillar Pages (3 pages)

Each pillar page expands on:
- The outcome in detail
- Specific services offered
- Who it is for (persona detail)
- Entry-point offerings (audits, consultations)
- Relevant case studies
- CTA to book a call

**URLs:**
- /services/revenue-analytics (Pillar 1)
- /services/data-foundation (Pillar 2)
- /services/data-activation (Pillar 3)

*(Pillar page design to be detailed separately)*

---

## Implementation Notes

### Hugo/Hugoplate Mapping

| Design Section | Hugoplate Component |
|----------------|---------------------|
| Header | Default header partial (customize nav) |
| Hero | Banner section in `_index.md` front matter |
| Pillars | Features section (adapt 3-column layout) |
| Mid-page CTA | Call-to-action section |
| Client Highlights | New section (logo bar + testimonial cards) |
| Footer | Default footer partial (customize links) |

### Content Files to Modify

- `content/english/_index.md` — Homepage front matter
- `content/english/sections/call-to-action.md` — Mid-page CTA
- `content/english/sections/testimonial.md` — Adapt for case studies
- `config/_default/menus.en.toml` — Navigation structure
- `data/social.json` — Social links (LinkedIn)

### New Content to Create

- `content/english/contact-us/_index.md` — Booking page
- `content/english/services/revenue-analytics.md` — Pillar 1
- `content/english/services/data-foundation.md` — Pillar 2
- `content/english/services/data-activation.md` — Pillar 3
- `static/images/clients/` — Client logos directory

---

## Open Questions

1. **Hero image/graphic** — What visual treatment for the hero? Abstract data visualization, illustration, or no image?
2. **Brand colors** — Current theme.json colors or new palette for Domain Methods?
3. **Case study content** — Which clients/projects are ready to feature?
4. **Pillar page depth** — How detailed should each pillar page be at launch?
