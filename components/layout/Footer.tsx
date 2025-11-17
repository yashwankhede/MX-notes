import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-darker border-t border-matrix-green/20 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-matrix-green mb-4">Matrixploit</h3>
            <p className="text-text-secondary text-sm">
              Pentesting notes, OSCP-style lab writeups, and ethical hacking resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-matrix-green mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="link-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="link-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="link-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-matrix-green mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="link-primary">
                  Privacy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/matriXploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/matrixploit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-matrix-green/20 text-center text-text-secondary text-sm">
          <p>&copy; {currentYear} Matrixploit. All rights reserved.</p>
          <p className="mt-2 text-xs">
            This site is for educational and ethical hacking purposes only.
          </p>
        </div>
      </div>
    </footer>
  )
}

