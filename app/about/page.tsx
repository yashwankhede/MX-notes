export const metadata = {
  title: 'About | Matrixploit',
  description: 'Learn about Matrixploit and the journey in pentesting and ethical hacking.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">About</h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Welcome to Matrixploit</h2>
            <p className="text-text-secondary mb-4">
              Matrixploit is a personal pentesting brand focused on sharing knowledge, writeups, and
              resources related to ethical hacking and cybersecurity. This site serves as a
              collection of notes, lab writeups, and practical guides for security professionals
              and enthusiasts.
            </p>
            <p className="text-text-secondary mb-4">
              My journey in pentesting began with a curiosity about how systems work and how they
              can be secured. Through hands-on practice, continuous learning, and participation in
              various training platforms, I've developed a passion for understanding vulnerabilities
              and helping organizations improve their security posture.
            </p>
            <p className="text-text-secondary">
              This website documents my learning process, including writeups from practice labs,
              useful tools and techniques, and general notes that might be helpful to others on
              similar paths.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Ethical Hacking Commitment</h2>
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <p className="text-text-secondary mb-4">
                All content on this site is intended for <strong className="text-text-primary">educational
                and authorized security testing purposes only</strong>. The techniques, tools, and
                methodologies discussed should only be used on systems you own or have explicit
                written permission to test.
              </p>
              <p className="text-text-secondary">
                Unauthorized access to computer systems is illegal and unethical. I strongly
                encourage responsible disclosure of vulnerabilities and adherence to all applicable
                laws and regulations.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Tech Stack of This Site</h2>
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <p className="text-text-secondary mb-4">
                This website is built using modern web technologies:
              </p>
              <ul className="list-disc list-inside space-y-2 text-text-secondary">
                <li>
                  <strong className="text-text-primary">Next.js</strong> - React framework for
                  static site generation
                </li>
                <li>
                  <strong className="text-text-primary">TypeScript</strong> - Type-safe JavaScript
                  for better code quality
                </li>
                <li>
                  <strong className="text-text-primary">Tailwind CSS</strong> - Utility-first CSS
                  framework for rapid UI development
                </li>
                <li>
                  <strong className="text-text-primary">Markdown/MDX</strong> - Content format for
                  blog posts and documentation
                </li>
                <li>
                  <strong className="text-text-primary">GitHub Pages</strong> - Static site hosting
                  and deployment
                </li>
              </ul>
              <p className="text-text-secondary mt-4 text-sm">
                The site is designed to be fast, accessible, and easy to maintain while providing a
                clean reading experience for technical content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-matrix-green">Get in Touch</h2>
            <p className="text-text-secondary mb-4">
              If you have questions, suggestions, or would like to collaborate, feel free to reach
              out through the <a href="/contact" className="link-primary">contact page</a>.
            </p>
            <p className="text-text-secondary">
              You can also find me on various platforms. Links are available in the footer and
              contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

