# Quick Start Guide

## First Time Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to http://localhost:3000

## Adding Your First Post

1. Create a new file in `content/posts/` named `my-first-post.md`

2. Add frontmatter and content:
   ```markdown
   ---
   title: "My First Post"
   date: "2024-01-01"
   slug: "my-first-post"
   category: "HTB"
   tags: ["example", "tutorial"]
   summary: "This is my first blog post"
   ---
   
   # My First Post
   
   Content goes here...
   ```

3. The post will appear automatically after the dev server rebuilds.

## Building for Production

```bash
npm run build
```

The static site will be in the `out/` directory.

## GitHub Pages Deployment

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The workflow will automatically deploy on push to `main`

### Important: BasePath Configuration

If your repository name is different from your domain, you may need to update `next.config.js`:

- If repo is `pentest.matrixploit.com` → no basePath needed
- If repo is different → uncomment and set basePath in `next.config.js`

## Customization Checklist

- [ ] Update site metadata in `app/layout.tsx`
- [ ] Update social links in `components/layout/Footer.tsx` and `app/contact/page.tsx`
- [ ] Customize colors in `tailwind.config.ts`
- [ ] Update About page with your information
- [ ] Add your own blog posts

## Troubleshooting

**Build fails:**
- Make sure all dependencies are installed: `npm install`
- Check that all markdown files have proper frontmatter

**Posts not showing:**
- Verify frontmatter includes all required fields (title, date, slug, category, tags, summary)
- Check file extension is `.md` or `.mdx`

**GitHub Pages not working:**
- Verify GitHub Actions workflow ran successfully
- Check repository Settings → Pages for deployment status
- Ensure basePath is configured correctly if needed

