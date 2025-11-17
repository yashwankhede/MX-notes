export const metadata = {
  title: 'Privacy Policy | Matrixploit',
  description: 'Privacy policy for Matrixploit website.',
}

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-text-secondary mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Information Collection</h2>
            <p className="text-text-secondary mb-4">
              This is a static website that does not collect personal information. If you use the
              contact form, any information you provide is handled according to standard web
              practices.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Cookies</h2>
            <p className="text-text-secondary mb-4">
              This website does not use cookies for tracking purposes. Any cookies that may be set
              are for essential site functionality only.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Third-Party Services</h2>
            <p className="text-text-secondary mb-4">
              This site is hosted on GitHub Pages. Please refer to GitHub's privacy policy for
              information about their data handling practices.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Contact</h2>
            <p className="text-text-secondary">
              If you have questions about this privacy policy, please use the{' '}
              <a href="/contact" className="link-primary">contact form</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

