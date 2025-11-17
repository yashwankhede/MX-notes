export const metadata = {
  title: 'OSCP Notes | Matrixploit',
  description: 'General OSCP-style notes and HTB/Vulnlab writeup patterns for ethical hacking.',
}

export default function OSCPNotesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">OSCP Notes</h1>
        <p className="text-text-secondary mb-12 text-lg">
          General OSCP and lab-style notes covering common enumeration strategies, privilege
          escalation checklists, and practice resources. These notes focus on methodology rather
          than exam-specific content.
        </p>

        {/* Enumeration Strategy */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">Enumeration Strategy</h2>
          <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Initial Reconnaissance</h3>
            <ul className="space-y-2 text-text-secondary">
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>Perform comprehensive port scanning with version detection</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>Enumerate all open services and their versions</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>Run default Nmap scripts against discovered services</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>Identify web technologies and frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>Document all findings in organized notes</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Privilege Escalation Checklists */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">Privilege Escalation Checklists</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Windows Checklist */}
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Windows</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for unquoted service paths</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Review scheduled tasks and permissions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Examine registry for auto-start programs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for writable directories in PATH</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Review installed software versions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Run automated enumeration scripts (WinPEAS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for kernel exploits and patch levels</span>
                </li>
              </ul>
            </div>

            {/* Linux Checklist */}
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Linux</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for SUID/SGID binaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Review cron jobs and scheduled tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Examine world-writable files and directories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for capabilities on binaries</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Review environment variables and PATH</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Run automated enumeration scripts (LinPEAS)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-matrix-green mr-2">✓</span>
                  <span>Check for kernel exploits and patch levels</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Note-Taking Tips */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">Note-Taking Tips</h2>
          <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
            <ul className="space-y-3 text-text-secondary">
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>
                  <strong className="text-text-primary">Document everything:</strong> Commands run,
                  outputs received, and observations made during enumeration.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>
                  <strong className="text-text-primary">Organize by service:</strong> Group findings
                  by discovered services (HTTP, SSH, SMB, etc.) for easier reference.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>
                  <strong className="text-text-primary">Screenshot important outputs:</strong> Capture
                  proof of concepts and successful exploitation attempts.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>
                  <strong className="text-text-primary">Track time spent:</strong> Monitor time
                  allocation across different phases of the assessment.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-matrix-green mr-2">•</span>
                <span>
                  <strong className="text-text-primary">Use templates:</strong> Create consistent
                  note templates for different types of machines and scenarios.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Practice Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-matrix-green">Practice Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Hack The Box</h3>
              <p className="text-text-secondary text-sm">
                Online platform offering various difficulty levels of vulnerable machines for
                practice. Great for learning enumeration and exploitation techniques.
              </p>
            </div>
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">TryHackMe</h3>
              <p className="text-text-secondary text-sm">
                Guided learning platform with structured paths covering different aspects of
                cybersecurity and penetration testing.
              </p>
            </div>
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">VulnHub</h3>
              <p className="text-text-secondary text-sm">
                Repository of vulnerable virtual machines for download and local practice. Excellent
                for offline learning and OSCP-style preparation.
              </p>
            </div>
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Proving Grounds</h3>
              <p className="text-text-secondary text-sm">
                Practice lab environment with realistic scenarios and varying difficulty levels.
                Useful for hands-on experience with different attack vectors.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

