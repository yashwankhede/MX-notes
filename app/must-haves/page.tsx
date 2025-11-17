export const metadata = {
  title: 'Must-Haves | Matrixploit',
  description: 'Essential Windows pentesting tools and resources for ethical hackers.',
}

const toolSections = [
  {
    title: 'Windows Pentesting Essentials',
    tools: [
      {
        name: 'PowerShell Empire',
        description: 'Post-exploitation framework for Windows environments with extensive module support.',
        tag: 'Post-Exploitation',
      },
      {
        name: 'Mimikatz',
        description: 'Credential extraction tool for Windows authentication mechanisms.',
        tag: 'Credential Access',
      },
      {
        name: 'BloodHound',
        description: 'Active Directory attack path visualization and enumeration tool.',
        tag: 'Enumeration',
      },
      {
        name: 'Rubeus',
        description: 'Kerberos abuse toolkit for Windows domain environments.',
        tag: 'Windows',
      },
      {
        name: 'SharpHound',
        description: 'Data collector for BloodHound, gathers information about Active Directory.',
        tag: 'Enumeration',
      },
      {
        name: 'WinPEAS',
        description: 'Windows privilege escalation enumeration script with comprehensive checks.',
        tag: 'Privilege Escalation',
      },
    ],
  },
  {
    title: 'Linux Tools',
    tools: [
      {
        name: 'LinPEAS',
        description: 'Linux privilege escalation enumeration script with automated checks.',
        tag: 'Privilege Escalation',
      },
      {
        name: 'GTFOBins',
        description: 'Curated list of Unix binaries that can be exploited for privilege escalation.',
        tag: 'Reference',
      },
      {
        name: 'Linux Exploit Suggester',
        description: 'Tool to identify potential privilege escalation vectors on Linux systems.',
        tag: 'Privilege Escalation',
      },
      {
        name: 'pspy',
        description: 'Monitor Linux processes without root permissions for privilege escalation.',
        tag: 'Enumeration',
      },
    ],
  },
  {
    title: 'Browser Extensions',
    tools: [
      {
        name: 'FoxyProxy',
        description: 'Advanced proxy management tool for browser-based testing workflows.',
        tag: 'Web Testing',
      },
      {
        name: 'Wappalyzer',
        description: 'Identify web technologies and frameworks used by target applications.',
        tag: 'Enumeration',
      },
      {
        name: 'Cookie Editor',
        description: 'View and modify browser cookies for session manipulation testing.',
        tag: 'Web Testing',
      },
      {
        name: 'User-Agent Switcher',
        description: 'Change browser user agent strings for testing different client scenarios.',
        tag: 'Web Testing',
      },
    ],
  },
  {
    title: 'Useful Cheat Sheets',
    tools: [
      {
        name: 'PayloadsAllTheThings',
        description: 'Comprehensive collection of payloads and bypass techniques for various vulnerabilities.',
        tag: 'Reference',
      },
      {
        name: 'HackTricks',
        description: 'Extensive documentation covering pentesting methodologies and techniques.',
        tag: 'Reference',
      },
      {
        name: 'OSCP Cheat Sheet',
        description: 'Quick reference guide for common enumeration and exploitation commands.',
        tag: 'Reference',
      },
      {
        name: 'Reverse Shell Cheat Sheet',
        description: 'Collection of reverse shell payloads for various programming languages.',
        tag: 'Reference',
      },
    ],
  },
]

export default function MustHavesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Must-Haves</h1>
        <p className="text-text-secondary mb-12 text-lg">
          A curated collection of essential tools and resources for Windows and general pentesting.
          These tools form the foundation of a well-equipped ethical hacking toolkit.
        </p>

        {toolSections.map((section) => (
          <section key={section.title} className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-matrix-green">{section.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="bg-bg-card border border-matrix-green/20 rounded-lg p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-text-primary">{tool.name}</h3>
                    <span className="tag text-xs">{tool.tag}</span>
                  </div>
                  <p className="text-text-secondary text-sm">{tool.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

