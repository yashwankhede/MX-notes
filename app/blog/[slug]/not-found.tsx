import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
      <p className="text-text-secondary mb-8">
        The blog post you're looking for doesn't exist.
      </p>
      <Link href="/blog" className="btn-primary">
        Back to Blog
      </Link>
    </div>
  )
}

