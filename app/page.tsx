import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { format } from 'date-fns'
import { 
  CommandLineIcon, 
  ShieldCheckIcon, 
  CodeBracketIcon, 
  BookOpenIcon 
} from '@heroicons/react/24/outline'

export const metadata = {
  title: 'Matrixploit – Pentesting & OSCP Notes',
  description: 'Pentesting notes, OSCP-style lab writeups, web testing checklists, and PowerShell post-exploitation snippets.',
}

export default function HomePage() {
  const allPosts = getAllPosts()
  const recentPosts = allPosts.slice(0, 6)

  const featuredSections = [
    {
      title: 'Must-Haves',
      description: 'Essential Windows pentesting tools and resources for ethical hackers.',
      icon: ShieldCheckIcon,
      href: '/must-haves',
      color: 'text-matrix-green',
    },
    {
      title: 'Web Testing',
      description: 'Web application testing checklists, tips, and command references.',
      icon: CodeBracketIcon,
      href: '/web-testing',
      color: 'text-accent-cyan',
    },
    {
      title: 'PowerShell & Empire',
      description: 'Windows post-exploitation notes and PowerShell snippets.',
      icon: CommandLineIcon,
      href: '/powershell-empire',
      color: 'text-accent-purple',
    },
    {
      title: 'OSCP / Lab Notes',
      description: 'General OSCP-style notes and HTB/Vulnlab writeup patterns.',
      icon: BookOpenIcon,
      href: '/oscp-notes',
      color: 'text-matrix-green',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-matrix-green">Matrixploit</span>
            <br />
            <span className="text-text-primary">Pentesting & OSCP Notes</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Pentest writeups, lab notes, cheatsheets, and ethical hacking resources for security professionals.
          </p>
          <Link href="/blog" className="btn-primary inline-block">
            Browse Writeups
          </Link>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Sections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredSections.map((section) => {
            const Icon = section.icon
            return (
              <Link
                key={section.href}
                href={section.href}
                className="bg-bg-card border border-matrix-green/20 rounded-lg p-6 card-hover group"
              >
                <Icon className={`h-10 w-10 ${section.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-matrix-green transition-colors">
                  {section.title}
                </h3>
                <p className="text-text-secondary text-sm">{section.description}</p>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Recent Posts */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Recent Posts</h2>
          <Link href="/blog" className="link-primary font-medium">
            View All Posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-bg-card border border-matrix-green/20 rounded-lg p-6 card-hover group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="tag text-xs">{post.category}</span>
                <time className="text-xs text-text-secondary">
                  {format(new Date(post.date), 'MMM d, yyyy')}
                </time>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-text-primary group-hover:text-matrix-green transition-colors">
                {post.title}
              </h3>
              <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                {post.summary}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs text-matrix-green/70">
                    #{tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {recentPosts.length === 0 && (
          <p className="text-center text-text-secondary py-12">
            No posts yet. Check back soon!
          </p>
        )}
      </section>
    </div>
  )
}

