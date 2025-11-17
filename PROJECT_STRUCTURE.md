# Project Structure

This document explains the organization of the Matrixploit website project.

## Directory Structure

```
pentest.matrixploit.com/
├── app/                          # Next.js App Router pages
│   ├── about/                   # About page
│   ├── blog/                    # Blog pages
│   │   ├── [slug]/             # Dynamic blog post pages
│   │   └── page.tsx             # Blog list page
│   ├── contact/                 # Contact page
│   ├── must-haves/              # Must-Haves tools page
│   ├── oscp-notes/              # OSCP notes page
│   ├── powershell-empire/       # PowerShell/Empire page
│   ├── privacy/                 # Privacy policy page
│   ├── web-testing/             # Web testing cheatsheet
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   ├── robots.ts                # Robots.txt generator
│   └── sitemap.ts               # Sitemap generator
│
├── components/                   # React components
│   ├── blog/                    # Blog-specific components
│   │   └── BlogList.tsx        # Blog list with filtering
│   ├── layout/                  # Layout components
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Header.tsx          # Site header/navigation
│   │   └── MainLayout.tsx      # Main layout wrapper
│   └── ui/                     # UI components
│       └── BackToTop.tsx       # Back to top button
│
├── content/                     # Content files
│   └── posts/                  # Markdown blog posts
│       └── *.md                # Individual post files
│
├── lib/                         # Utility functions
│   ├── markdown.ts             # Markdown processing
│   ├── posts.ts                # Post loading utilities
│   └── types.ts                # TypeScript type definitions
│
├── public/                      # Static assets
│
├── .github/                     # GitHub configuration
│   └── workflows/              # GitHub Actions workflows
│       └── deploy.yml          # Deployment workflow
│
├── next.config.js               # Next.js configuration
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── README.md                    # Main documentation
└── QUICKSTART.md                # Quick start guide
```

## Key Files Explained

### App Router Pages (`app/`)

All pages use Next.js 14 App Router:
- **Server Components by default** - Most pages are server components for better performance
- **Static Generation** - All pages are statically generated at build time
- **Metadata** - Each page exports metadata for SEO

### Components (`components/`)

- **Layout Components** - Reusable header, footer, and main layout
- **Blog Components** - Blog-specific functionality (filtering, search)
- **UI Components** - Small reusable UI elements

### Content System (`content/posts/`)

Blog posts are stored as Markdown files with YAML frontmatter:

```markdown
---
title: "Post Title"
date: "2024-01-01"
slug: "post-slug"
category: "HTB"
tags: ["tag1", "tag2"]
summary: "Post summary"
---

Post content...
```

### Utilities (`lib/`)

- **posts.ts** - Functions to load and filter blog posts
- **markdown.ts** - Converts Markdown to HTML with syntax highlighting
- **types.ts** - TypeScript interfaces for posts and categories

## Adding New Features

### Adding a New Page

1. Create a new directory in `app/` (e.g., `app/new-page/`)
2. Add `page.tsx` with your page component
3. Export metadata for SEO
4. Add navigation link in `components/layout/Header.tsx`

### Adding a New Blog Post

1. Create a new `.md` file in `content/posts/`
2. Add required frontmatter (title, date, slug, category, tags, summary)
3. Write content in Markdown
4. The post will appear automatically after rebuild

### Modifying Styles

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Component styles**: Use Tailwind classes directly in components

### Customizing Theme

Edit `tailwind.config.ts` to modify:
- Colors (matrix-green, bg-dark, etc.)
- Fonts (sans, mono)
- Animations and effects

## Build Process

1. **Development**: `npm run dev` - Runs Next.js dev server
2. **Build**: `npm run build` - Generates static site in `out/`
3. **Deploy**: GitHub Actions automatically builds and deploys on push

## Static Export

The site is configured for static export:
- No server-side features (API routes, etc.)
- All pages pre-rendered at build time
- Compatible with GitHub Pages and other static hosts

