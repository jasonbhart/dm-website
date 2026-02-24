# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hugo static site using the Hugoplate theme with Tailwind CSS. Built on Hugo Modules architecture.

**Stack:** Hugo Extended 0.151.0+, Tailwind CSS 4.x, Node.js 22+, Go 1.24+

## Common Commands

```bash
# Development
npm run dev              # Start dev server with hot reload (http://localhost:1313)
npm run build            # Production build with minification
npm run preview          # Production preview with metrics

# Setup & Maintenance
npm run project-setup    # Initial project setup (one-time)
npm run update-modules   # Update all Hugo modules
npm run format           # Format code with Prettier

# Feature removal
npm run remove-darkmode  # Remove dark mode feature
npm run remove-multilang # Remove multilingual support

# Theme management
npm run update-theme     # Update theme to latest version
npm run theme-setup      # Required before remove-darkmode/multilang if project-setup was run
```

## Architecture

### Configuration (config/_default/)
- `params.toml` - Site parameters, feature toggles, SEO settings
- `module.toml` - Hugo module imports (26+ modules for components, shortcodes, SEO)
- `languages.toml` - i18n configuration
- `menus.en.toml` - Navigation menu definitions

### Design System (data/)
- `theme.json` - Design tokens (colors, fonts, typography). Edit this for branding changes.
- `social.json` - Social media links for header/footer

### Content (content/english/)
- `blog/` - Blog posts with front matter (title, date, image, categories, author, tags)
- `authors/` - Author profiles
- `sections/` - Homepage sections (testimonial, CTA, etc.) - use `build.render = "never"` in front matter
- `pages/` - Static pages

### i18n
- Translation files: `i18n/en.yaml` (add `i18n/<lang>.yaml` for new languages)
- New language setup: Add entry in `config/_default/languages.toml`, create `content/<lang>/` directory, duplicate menus

### Theme Override Pattern
Place files in project's `layouts/` directory with same relative path to override theme templates from `themes/hugoplate/layouts/`.

## Build Pipeline

1. `themeGenerator.js` converts `data/theme.json` → CSS custom properties
2. Hugo's `css.TailwindCSS` pipe processes CSS via embedded Tailwind CLI
3. Tailwind reads `hugo_stats.json` (via `@source` in `themes/hugoplate/assets/css/main.css`) to discover used classes
4. Hugo builds site with minification → `public/`

### Tailwind + Hugo Class Detection

Hugo uses `build.buildStats` to generate `hugo_stats.json` with all CSS classes found in rendered HTML. Tailwind reads this file via `@source "hugo_stats.json"` to decide which utility classes to generate.

**Key gotcha:** When adding new Tailwind classes (especially dynamic ones from Hugo template variables), the CSS may not update on the first build due to a chicken-and-egg problem — Hugo needs to render HTML to discover classes, but CSS is built in the same pass. Fix: `rm -rf resources/_gen/ && npm run build` to force a clean rebuild.

**Dynamic class names in templates:** If you use Hugo variables to construct class names (e.g., `{{ $color := "bg-teal-100" }}`), Tailwind will detect them via `hugo_stats.json` as long as the cache is fresh. Do NOT use string concatenation to build class names (e.g., `"bg-" + $color + "-100"`) — Tailwind's scanner won't find them. Always use complete class name strings.

**`.gitignore` note:** `hugo_stats.json` is in `.gitignore`, but Tailwind v4.0.17+ bypasses `.gitignore` for `@source` paths with file extensions. This is working correctly — do not remove it from `.gitignore`.

## Key Customization Points

| Task | File to Edit |
|------|--------------|
| Colors & fonts | `data/theme.json` |
| Feature toggles | `config/_default/params.toml` |
| Navigation | `config/_default/menus.en.toml` |
| Custom CSS | `assets/css/custom.css` |
| Site metadata | `hugo.toml` (baseURL, title) |

## Content Front Matter

```yaml
---
title: "Post Title"
description: "SEO description"
date: 2025-01-01T00:00:00Z
image: "/images/feature.png"
categories: ["Category"]
author: "Author Name"  # Must match author profile
tags: ["tag"]
draft: false
---
```

## Available Shortcodes

```markdown
{{< button label="Get Started" link="/contact" >}}
{{< notice type="info" >}}Info message{{< /notice >}}
{{< accordion title="Question?" >}}Answer{{< /accordion >}}
{{< tab name="Tab 1" >}}Content{{< /tab >}}
{{< modal id="myModal" >}}Modal content{{< /modal >}}
{{< mermaid >}}graph TD; A-->B{{< /mermaid >}}
```

## Deployment

Pre-configured for: **Netlify**, **Vercel**, **GitHub Actions**, **GitLab CI**, **AWS Amplify**

Before deploying: Change `baseURL` in `hugo.toml` to your production URL.

## Adding New Theme Tokens

To add a new color (e.g., `accent`):
1. Add to both `colors.default.theme_color` and `colors.darkmode.theme_color` in `data/theme.json`
2. Update `tailwind-plugin/tw-theme.js` to expose the new token
3. Rebuild - then use classes like `text-accent` or `bg-accent`

## Dark Mode

- Toggle controlled by `theme_switcher` in `params.toml`
- Applies `.dark` class to `<html>` element
- Dark colors defined in `colors.darkmode.*` in `theme.json`
- Default behavior set by `theme_default` (light|dark|system)

## Service Page Accent Colors

Each service page has a distinct accent color set via `accent` front matter field. The accent colors the tagline badge, check/arrow icons, process step circles, case study headings, and industry icons. CTA buttons remain brand-blue.

| Service | Accent | Front matter |
|---------|--------|-------------|
| Revenue Analytics | Blue | `accent: "blue"` |
| Data Foundation | Teal | `accent: "teal"` |
| Data Activation | Amber | `accent: "amber"` |
| Audits | Purple | `accent: "purple"` |

To add a new accent: update the conditional block at the top of `layouts/pillar.html` and add the new color's classes to the template variables (`$taglineBg`, `$accentText`, `$accentBg`). Use complete Tailwind class names — no string concatenation.

## Brand Colors

Primary blue `#1e40af` and secondary crimson `#d81e50` are set in `data/theme.json`. The secondary was matched to the logo's red hue (344°) — it's a crimson/rose, not a pure red. When choosing accent or decorative colors, verify they are distinct from both the primary (226°) and secondary (344°) hues.

## Troubleshooting

- **Styles not updating:** Delete `resources/_gen/` directory
- **New Tailwind classes missing from CSS:** Run `rm -rf resources/_gen/ && npm run build` — stale cache is the most common cause
- **Module issues:** Run `hugo mod tidy` then `npm run update-modules`
- **Cache issues:** Use `hugo server --ignoreCache`
- **New color not in classes:** Update `tailwind-plugin/tw-theme.js` and restart
- **Font not loading:** Use Google Fonts syntax `Family:wght@400;600;700`
