'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-4xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary">
          📝 My Blog
        </Link>

        <button
          className="md:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className={`${isOpen ? 'block' : 'hidden'} md:flex gap-8 absolute md:static top-full left-0 right-0 md:bg-transparent bg-white md:shadow-none shadow-sm p-4 md:p-0`}>
          <Link href="/" className="text-primary hover:text-secondary font-medium">
            Home
          </Link>
          <Link href="/blog" className="text-primary hover:text-secondary font-medium">
            Blog
          </Link>
          <Link href="/about" className="text-primary hover:text-secondary font-medium">
            About
          </Link>
          <Link href="/contact" className="text-primary hover:text-secondary font-medium">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  )
}
