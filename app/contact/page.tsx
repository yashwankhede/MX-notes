'use client'

import { useState, FormEvent } from 'react'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xnqreavk', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      })

      if (response.ok) {
        setFormStatus('success')
        form.reset()
        // Reset success message after 5 seconds
        setTimeout(() => setFormStatus('idle'), 5000)
      } else {
        const data = await response.json()
        if (data.errors) {
          setErrorMessage(data.errors.map((error: any) => error.message).join(', '))
        } else {
          setErrorMessage('Something went wrong. Please try again.')
        }
        setFormStatus('error')
      }
    } catch (error) {
      setErrorMessage('Network error. Please check your connection and try again.')
      setFormStatus('error')
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Contact</h1>
        <p className="text-text-secondary mb-12 text-lg">
          Have a question or want to get in touch? Fill out the form below or use the email link.
        </p>

        {/* Status Messages */}
        {formStatus === 'success' && (
          <div className="mb-6 p-4 bg-matrix-green/20 border border-matrix-green rounded-lg">
            <p className="text-matrix-green font-medium">
              Message sent successfully! We'll get back to you soon.
            </p>
          </div>
        )}

        {formStatus === 'error' && errorMessage && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500 rounded-lg">
            <p className="text-red-400 font-medium">{errorMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name <span className="text-matrix-green">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-bg-dark border border-matrix-green/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-matrix-green"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email <span className="text-matrix-green">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-bg-dark border border-matrix-green/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-matrix-green"
                  required
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-bg-dark border border-matrix-green/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-matrix-green"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-matrix-green">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-2 bg-bg-dark border border-matrix-green/20 rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-matrix-green resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Other Ways to Reach Me</h2>
              <div className="space-y-4">
                <a
                  href="mailto:info@matrixploit.com"
                  className="flex items-center text-matrix-green hover:text-matrix-green-light transition-colors"
                >
                  <EnvelopeIcon className="h-5 w-5 mr-3" />
                  <span>info@matrixploit.com</span>
                </a>
                <p className="text-text-secondary text-sm">
                  For direct email contact, use the mailto link above or send an email to the
                  address shown.
                </p>
              </div>
            </div>

            <div className="bg-bg-card border border-matrix-green/20 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4">Social Links</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="https://github.com/matriXploit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary block"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/company/matrixploit/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-primary block"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

