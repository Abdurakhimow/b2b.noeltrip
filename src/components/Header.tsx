'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🇺🇿</span>
            <span className="font-bold text-xl text-gray-900">Noel Trip B2B</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-600 transition-colors">
              Home
            </Link>
            <Link href="/tours" className="text-gray-700 hover:text-sky-600 transition-colors">
              Tours
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition-colors">
              Contact
            </Link>
            <Link 
              href="/dashboard" 
              className="bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors"
            >
              Partner Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-sky-600 py-2">
              Home
            </Link>
            <Link href="/tours" className="block text-gray-700 hover:text-sky-600 py-2">
              Tours
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-sky-600 py-2">
              Contact
            </Link>
            <Link 
              href="/dashboard" 
              className="block bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 text-center"
            >
              Partner Portal
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
