"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const fashionAIProducts = [
  { name: "Jupiter Rank", status: "Live ✓", href: "/fashion-ai/jupiter-rank" },
  { name: "Jupiter Chat", status: "Coming", href: "/fashion-ai/jupiter-chat" },
  { name: "Jupiter Lens", status: "Coming", href: "/fashion-ai/jupiter-lens" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#08090A] border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo/jupiter-ai-coloured-wordmark.svg"
              alt="Jupiter AI"
              width={130}
              height={35}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="text-sm text-subtle hover:text-white transition-colors flex items-center gap-1">
                Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-surface border border-border rounded-xl shadow-xl min-w-[240px] py-3">
                    <p className="px-4 py-2 text-xs font-semibold text-muted uppercase tracking-wider">
                      Fashion AI
                    </p>
                    {fashionAIProducts.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        scroll={true}
                        className="flex items-center justify-between px-4 py-2.5 text-sm text-white hover:bg-surface-2 transition-colors"
                      >
                        <span>{product.name}</span>
                        <span className={`text-xs ${product.status === "Live ✓" ? "text-purple" : "text-muted"}`}>
                          {product.status}
                        </span>
                      </Link>
                    ))}
                    <div className="border-t border-border my-2" />
                    <p className="px-4 py-2 text-xs font-semibold text-muted uppercase tracking-wider">
                      Platform
                    </p>
                    <Link
                      href="/jupiter-build"
                      scroll={true}
                      className="flex items-center justify-between px-4 py-2.5 text-sm text-white hover:bg-surface-2 transition-colors"
                    >
                      <span>Jupiter Build</span>
                      <span className="text-xs text-muted">Any industry</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/jupiter-build" scroll={true} className="text-sm text-subtle hover:text-white transition-colors">
              Jupiter Build
            </Link>

            <Link href="/about" scroll={true} className="text-sm text-subtle hover:text-white transition-colors">
              About
            </Link>

            <Link href="/contact" scroll={true} className="text-sm text-subtle hover:text-white transition-colors">
              Contact
            </Link>

            <a
              href="https://jupiterrank.jupiter-ai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors"
            >
              Try Jupiter Rank
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-16 bg-[#08090A] md:hidden z-40">
            <nav className="px-4 py-8">
              <div className="flex flex-col gap-6">
                <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                  Fashion AI
                </p>
                {fashionAIProducts.map((product) => (
                  <Link
                    key={product.name}
                    href={product.href}
                    scroll={true}
                    className="text-lg text-white py-2 flex items-center justify-between"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{product.name}</span>
                    <span className={`text-sm ${product.status === "Live ✓" ? "text-purple" : "text-muted"}`}>
                      {product.status}
                    </span>
                  </Link>
                ))}

                <div className="border-t border-border my-4" />

                <Link
                  href="/jupiter-build"
                  scroll={true}
                  className="text-lg text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Jupiter Build
                </Link>

                <Link
                  href="/about"
                  scroll={true}
                  className="text-lg text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>

                <Link
                  href="/contact"
                  scroll={true}
                  className="text-lg text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>

                <a
                  href="https://jupiterrank.jupiter-ai.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors mt-4"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Try Jupiter Rank
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
