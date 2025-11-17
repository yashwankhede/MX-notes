'use client'

import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function WebTestingPage() {
  const [openSections, setOpenSections] = useState<Set<string>>(new Set(['enumeration']))

  const toggleSection = (sectionId: string) => {
    const newOpen = new Set(openSections)
    if (newOpen.has(sectionId)) {
      newOpen.delete(sectionId)
    } else {
      newOpen.add(sectionId)
    }
    setOpenSections(newOpen)
  }

  const sections = [
    {
      id: 'enumeration',
      title: 'Enumeration',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Port Scanning</h4>
            <pre className="code-block">
              <code>nmap -sC -sV -oA scan target.com</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Basic port scan with version detection and default scripts.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Directory Enumeration</h4>
            <pre className="code-block">
              <code>ffuf -w wordlist.txt -u http://target.com/FUZZ</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Fast web fuzzer for discovering hidden directories and files.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Subdomain Discovery</h4>
            <pre className="code-block">
              <code>subfinder -d target.com -o subdomains.txt</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Passive subdomain enumeration using multiple data sources.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'authentication',
      title: 'Authentication & Sessions',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Session Management Testing</h4>
            <pre className="code-block">
              <code>curl -H "Cookie: session=COOKIE_VALUE" http://target.com/api</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Test session handling and cookie-based authentication mechanisms.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">JWT Token Analysis</h4>
            <pre className="code-block">
              <code>jwt_tool.py TOKEN</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Analyze and manipulate JSON Web Tokens for authentication bypass attempts.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'input-validation',
      title: 'Input Validation & XSS',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">XSS Payload Testing</h4>
            <pre className="code-block">
              <code>{'<script>alert(document.domain)</script>'}</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Basic reflected XSS test payload for input validation testing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">SQL Injection Testing</h4>
            <pre className="code-block">
              <code>sqlmap -u "http://target.com/page?id=1" --batch</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Automated SQL injection detection and exploitation tool.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'file-uploads',
      title: 'File Uploads',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">File Upload Bypass Testing</h4>
            <pre className="code-block">
              <code>curl -F "file=@shell.php.jpg" http://target.com/upload</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Test file upload restrictions by modifying file extensions and MIME types.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Content-Type Manipulation</h4>
            <pre className="code-block">
              <code>curl -F "file=@shell.php" -F "Content-Type: image/jpeg" http://target.com/upload</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Bypass file type validation by manipulating Content-Type headers.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: 'common-tools',
      title: 'Common Tools & Commands',
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Burp Suite Proxy</h4>
            <p className="text-text-secondary text-sm mb-2">
              Intercept and modify HTTP/HTTPS requests for manual testing.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">OWASP ZAP</h4>
            <p className="text-text-secondary text-sm mb-2">
              Automated security scanner for finding vulnerabilities in web applications.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Nikto Web Scanner</h4>
            <pre className="code-block">
              <code>nikto -h http://target.com</code>
            </pre>
            <p className="text-text-secondary text-sm mt-2">
              Web server scanner that identifies potential security issues.
            </p>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Web Testing</h1>
        <p className="text-text-secondary mb-12 text-lg">
          Cheatsheet-style reference for web application security testing. This page contains
          common commands, techniques, and tools used during web application penetration testing.
        </p>

        <div className="space-y-4">
          {sections.map((section) => {
            const isOpen = openSections.has(section.id)
            return (
              <div
                key={section.id}
                className="bg-bg-card border border-matrix-green/20 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-bg-darker transition-colors"
                >
                  <h2 className="text-2xl font-semibold text-text-primary">{section.title}</h2>
                  {isOpen ? (
                    <ChevronUpIcon className="h-6 w-6 text-matrix-green" />
                  ) : (
                    <ChevronDownIcon className="h-6 w-6 text-matrix-green" />
                  )}
                </button>
                {isOpen && <div className="px-6 pb-6">{section.content}</div>}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

