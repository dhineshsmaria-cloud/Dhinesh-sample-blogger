'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-primary mb-4">Get In Touch</h1>
          <p className="text-gray-600">Have a question or want to collaborate?</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-primary mb-2">Email</h3>
                <a href="mailto:contact@example.com" className="text-secondary hover:underline">
                  contact@example.com
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-primary mb-2">Social Media</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="text-secondary hover:underline">Twitter</a></li>
                  <li><a href="#" className="text-secondary hover:underline">GitHub</a></li>
                  <li><a href="#" className="text-secondary hover:underline">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                Thank you! Your message has been received.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-primary mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-primary mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-primary mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-secondary text-white font-semibold py-2 rounded-lg hover:bg-opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
