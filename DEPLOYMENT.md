# Deployment Guide

This guide covers deploying the Matrixploit website to GitHub Pages.

## Prerequisites

1. A GitHub repository
2. GitHub Pages enabled in repository settings
3. Node.js 18+ installed locally (for testing builds)

## Initial Setup

### 1. Create GitHub Repository

Create a new repository on GitHub (public or private, both work with GitHub Pages).

### 2. Push Your Code

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/pentest.matrixploit.com.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 4. Configure Domain (Optional)

If you have a custom domain (pentest.matrixploit.com):

1. In **Settings** → **Pages**, add your custom domain
2. Update DNS records as instructed by GitHub
3. If your repo name differs from the domain, update `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/pentest.matrixploit.com' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/pentest.matrixploit.com' : '',
```

## Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:

1. **Trigger**: On every push to the `main` branch
2. **Build**: Install dependencies and build the static site
3. **Deploy**: Upload the built site to GitHub Pages

### Workflow Steps

1. **Checkout** - Gets your code
2. **Setup Node.js** - Installs Node.js 20 with npm caching
3. **Install dependencies** - Runs `npm ci`
4. **Build** - Runs `npm run build` (generates `out/` directory)
5. **Setup Pages** - Configures GitHub Pages
6. **Upload artifact** - Uploads the `out/` directory
7. **Deploy** - Deploys to GitHub Pages

## Manual Deployment

If you need to deploy manually:

```bash
# Build the site
npm run build

# The static files are in the 'out' directory
# You can upload these to any static hosting service
```

## Troubleshooting

### Build Fails

**Error: Module not found**
- Run `npm install` to ensure all dependencies are installed
- Check that `package.json` has all required dependencies

**Error: Cannot find module 'fs'**
- This shouldn't happen, but if it does, ensure you're using Node.js 18+

### Pages Not Updating

1. Check GitHub Actions tab for workflow status
2. Verify the workflow completed successfully
3. Wait a few minutes for DNS propagation
4. Clear browser cache

### 404 Errors

- Ensure `trailingSlash: true` in `next.config.js` (already set)
- Check that all internal links use trailing slashes
- Verify basePath is correct if using a subdirectory

### Custom Domain Issues

1. Verify DNS records are correct (CNAME or A records)
2. Wait up to 24 hours for DNS propagation
3. Check domain in repository Settings → Pages
4. Ensure SSL certificate is enabled (GitHub does this automatically)

## Environment Variables

Currently, no environment variables are required. If you need to add them:

1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Add your secrets
3. Reference them in the workflow file:

```yaml
env:
  MY_SECRET: ${{ secrets.MY_SECRET }}
```

## Updating the Site

Simply push changes to the `main` branch:

```bash
git add .
git commit -m "Update content"
git push origin main
```

The workflow will automatically rebuild and redeploy.

## Monitoring

- **Workflow Status**: Check the **Actions** tab in your repository
- **Deployment Status**: Check **Settings** → **Pages**
- **Site Status**: Visit your site URL

## Rollback

If something goes wrong:

1. Revert the commit: `git revert HEAD`
2. Push the revert: `git push origin main`
3. The workflow will redeploy the previous version

## Performance Tips

- The site is fully static, so it should load very quickly
- Images are unoptimized (required for static export) - consider using a CDN
- All pages are pre-rendered at build time
- No server-side processing means minimal latency

## Security

- All content is static (no server-side code execution)
- No API endpoints or database connections
- GitHub Pages provides HTTPS automatically
- Review all content before publishing (especially in blog posts)

