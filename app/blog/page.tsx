import { getAllPosts, getAllCategories } from '@/lib/posts'
import BlogList from '@/components/blog/BlogList'

export const metadata = {
  title: 'Blog | Matrixploit',
  description: 'Pentesting writeups, lab notes, and security research.',
}

export default function BlogPage() {
  const allPosts = getAllPosts()
  const allCategories = getAllCategories()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-text-secondary mb-8">
          Pentesting writeups, lab notes, and security research.
        </p>

        <BlogList posts={allPosts} categories={allCategories} />
      </div>
    </div>
  )
}

