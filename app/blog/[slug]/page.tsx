import { notFound } from 'next/navigation'
import Link from 'next/link'
import { format } from 'date-fns'
import { getPostBySlug, getAllPosts } from '@/lib/posts'
import { markdownToHtml } from '@/lib/markdown'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Matrixploit`,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)
  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug)
  const previousPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null

  // Generate table of contents from headings
  // rehype-slug adds IDs to headings, so we extract them from the HTML
  const toc: Array<{ id: string; text: string; level: number }> = []
  const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>(.*?)<\/h[2-3]>/g
  let match
  while ((match = headingRegex.exec(content)) !== null) {
    const level = parseInt(match[1])
    const id = match[2]
    const text = match[3].replace(/<[^>]*>/g, '')
    toc.push({ id, text, level })
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-flex items-center text-matrix-green hover:text-matrix-green-light mb-8 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="tag">{post.category}</span>
            <time className="text-sm text-text-secondary">
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span className="text-sm text-text-secondary">•</span>
            <span className="text-sm text-text-secondary">{post.readingTime} min read</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-text-secondary mb-6">{post.summary}</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-full bg-matrix-green/10 text-matrix-green border border-matrix-green/20"
              >
                #{tag}
              </span>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
          {toc.length > 0 && (
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <h2 className="text-lg font-semibold mb-4 text-matrix-green">Table of Contents</h2>
                <nav className="space-y-2">
                  {toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm text-text-secondary hover:text-matrix-green transition-colors ${
                        item.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          )}

          {/* Post Content */}
          <article
            className={`prose prose-invert prose-lg max-w-none ${
              toc.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'
            }`}
          >
            <div
              className="markdown-content"
              dangerouslySetInnerHTML={{ __html: content }}
              style={{
                color: '#e5e5e5',
              }}
            />

            {/* Disclaimer */}
            <div className="mt-12 p-6 bg-bg-card border border-matrix-green/20 rounded-lg">
              <h3 className="text-lg font-semibold text-matrix-green mb-2">Disclaimer</h3>
              <p className="text-text-secondary text-sm">
                This content is for educational and ethical hacking purposes only. Only use these
                techniques on systems you own or have explicit written permission to test. Unauthorized
                access to computer systems is illegal.
              </p>
            </div>
          </article>
        </div>

        {/* Navigation */}
        <nav className="mt-12 pt-8 border-t border-matrix-green/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previousPost && (
              <Link
                href={`/blog/${previousPost.slug}`}
                className="group p-4 bg-bg-card border border-matrix-green/20 rounded-lg hover:border-matrix-green transition-colors"
              >
                <div className="flex items-center text-sm text-text-secondary mb-2">
                  <ArrowLeftIcon className="h-4 w-4 mr-2" />
                  Previous
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-matrix-green transition-colors">
                  {previousPost.title}
                </h3>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.slug}`}
                className="group p-4 bg-bg-card border border-matrix-green/20 rounded-lg hover:border-matrix-green transition-colors md:text-right"
              >
                <div className="flex items-center justify-end text-sm text-text-secondary mb-2">
                  Next
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </div>
                <h3 className="font-semibold text-text-primary group-hover:text-matrix-green transition-colors">
                  {nextPost.title}
                </h3>
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  )
}

