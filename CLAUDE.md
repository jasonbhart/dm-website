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
2. Tailwind CLI processes CSS with custom theme plugin (`tailwind-plugin/tw-theme.js`)
3. Hugo builds site with minification → `public/`

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

## Troubleshooting

- **Styles not updating:** Delete `resources/_gen/` directory
- **Module issues:** Run `hugo mod tidy` then `npm run update-modules`
- **Cache issues:** Use `hugo server --ignoreCache`
- **New color not in classes:** Update `tailwind-plugin/tw-theme.js` and restart
- **Font not loading:** Use Google Fonts syntax `Family:wght@400;600;700`
