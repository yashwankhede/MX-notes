'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-matrix-green">Something went wrong!</h1>
          <p className="text-text-secondary mb-8 text-lg">
            {error.message || 'An unexpected error occurred'}
          </p>
          <button
            onClick={reset}
            className="btn-primary"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}

