# Matrixploit - Pentesting Notes & Writeups

A static website for pentesting notes, OSCP-style lab writeups, web testing checklists, and PowerShell post-exploitation snippets. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Blog System**: Markdown-based blog posts with frontmatter metadata
- **Category Filtering**: Filter posts by category (HTB, Vulnlab, Web Testing, etc.)
- **Search Functionality**: Client-side search across post titles, tags, and content
- **Table of Contents**: Auto-generated TOC for blog posts
- **Responsive Design**: Mobile-friendly dark theme with hacker aesthetic
- **Static Export**: Fully static site compatible with GitHub Pages

## 📋 Prerequisites

- Node.js 18+ and npm
- Git

## 🛠️ Local Development

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd pentest.matrixploit.com
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Adding New Posts

1. **Create a new markdown file** in `content/posts/` with the following frontmatter:
   ```markdown
   ---
   title: "Your Post Title"
   date: "2024-01-01"
   slug: "your-post-slug"
   category: "HTB"
   tags: ["tag1", "tag2"]
   summary: "A brief summary of your post"
   ---
   
   Your post content here...
   ```

2. **Categories available:**
   - `HTB` - Hack The Box writeups
   - `Vulnlab` - Vulnlab machine writeups
   - `Web Testing` - Web application testing notes
   - `PowerShell` - PowerShell and Windows post-exploitation
   - `OSCP Notes` - OSCP-style notes and methodologies
   - `Misc` - Miscellaneous content

3. **The post will automatically appear** in the blog list and home page after rebuilding.

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  'matrix-green': '#00ff41',
  'bg-dark': '#0a0a0a',
  // ... other colors
}
```

### Site Metadata

Update `app/layout.tsx` to change default SEO metadata and site information.

### Navigation Links

Modify the `navLinks` array in `components/layout/Header.tsx` to add or remove navigation items.

## 🚢 Deployment to GitHub Pages

### Initial Setup

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: GitHub Actions

2. **Update basePath** in `next.config.js` if needed:
   ```javascript
   basePath: process.env.NODE_ENV === 'production' ? '/pentest.matrixploit.com' : '',
   ```

3. **Push to main branch:**
   ```bash
   git push origin main
   ```

### Automatic Deployment

The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
- Build the Next.js static export
- Deploy to GitHub Pages
- Run on every push to the `main` branch

### Manual Deployment

If you need to deploy manually:

```bash
npm run build
# The static files will be in the 'out' directory
```

## 📁 Project Structure

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

Quick overview:
- `app/` - Next.js App Router pages (all pages and routes)
- `components/` - Reusable React components
- `content/posts/` - Markdown blog posts
- `lib/` - Utility functions (post loading, markdown processing)
- `.github/workflows/` - GitHub Actions deployment workflow

## 🔧 Configuration

### Next.js Config

The `next.config.js` is configured for static export:
- `output: 'export'` - Enables static site generation
- `images.unoptimized: true` - Required for static export
- `basePath` - Configured for GitHub Pages deployment

### Content Loading

Posts are loaded at build time using:
- `gray-matter` for frontmatter parsing
- `reading-time` for reading time calculation
- `remark` for markdown to HTML conversion

## 📚 Technologies Used

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Icon library
- **gray-matter** - Frontmatter parsing
- **remark** - Markdown processing
- **date-fns** - Date formatting

## ⚠️ Important Notes

- All content is for **educational and ethical hacking purposes only**
- Only use techniques on systems you own or have explicit written permission to test
- Unauthorized access to computer systems is illegal
- Update social media links in the Contact and Footer components with your actual profiles

## 📄 License

This project is open source and available for personal use. All content should be original and not copied from other sources.

## 🤝 Contributing

This is a personal project, but suggestions and improvements are welcome. Please ensure all content is original and follows ethical hacking guidelines.

## 📧 Contact

For questions or suggestions, use the contact form on the website or reach out through the provided social links.

---

**Disclaimer**: This site is for educational purposes only. Always ensure you have proper authorization before testing any security techniques.

