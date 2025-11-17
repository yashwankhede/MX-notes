import type { Metadata } from 'next'
import './globals.css'
import MainLayout from '@/components/layout/MainLayout'

export const metadata: Metadata = {
  title: 'Matrixploit – Pentesting Notes & Writeups',
  description: 'Pentesting notes, OSCP-style lab writeups, web testing checklists, and PowerShell post-exploitation snippets.',
  keywords: ['pentesting', 'OSCP', 'ethical hacking', 'cybersecurity', 'writeups'],
  authors: [{ name: 'Matrixploit' }],
  openGraph: {
    title: 'Matrixploit – Pentesting Notes & Writeups',
    description: 'Pentesting notes, OSCP-style lab writeups, web testing checklists, and PowerShell post-exploitation snippets.',
    type: 'website',
    url: 'https://pentest.matrixploit.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

