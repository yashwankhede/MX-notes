import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-6xl font-bold mb-4 text-matrix-green">404</h1>
      <h2 className="text-3xl font-semibold mb-4">Page Not Found</h2>
      <p className="text-text-secondary mb-8 text-lg">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/blog" className="btn-secondary">
          Browse Blog
        </Link>
      </div>
    </div>
  )
}

