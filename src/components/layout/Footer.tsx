"use client";

import Link from "next/link";
import FooterWaitlist from "./FooterWaitlist";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: '#08090A' }}>
      {/* LAYER 1 — Desktop illustration (absolute, full cover) */}
      <img
        src="/Images/india-night.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'absolute',
          bottom: '0px',
          left: '0px',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* LAYER 2 — Dark gradient overlay (desktop only) */}
      <div
        aria-hidden="true"
        className="hidden md:block"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, #08090A 0%, rgba(8,9,10,0.85) 30%, rgba(8,9,10,0.75) 60%, rgba(8,9,10,0.85) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* LAYER 3 — Purple glow from top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[300px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at top left, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* LAYER 4 — Top border glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(124, 58, 237, 0.3) 30%, rgba(167, 139, 250, 0.5) 50%, rgba(124, 58, 237, 0.3) 70%, transparent 100%)",
        }}
      />

      {/* All content inside footer */}
      {/* Desktop: padding keeps existing large top space. Mobile: reduced top padding. */}
      <div
        className="relative max-w-[1200px] mx-auto md:hidden md:invisible"
        style={{ display: 'none' }}
      />
      <div className="relative z-[2] max-w-[1200px] mx-auto hidden md:block" style={{ padding: '300px 24px 60px' }}>
        {/* TOP SECTION — four columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr] gap-12 pb-16 border-b border-[rgba(30,34,53,0.8)]">
          {/* COLUMN 1 — Brand */}
          <div>
            <img
              src="/logo/jupiter-ai-coloured-wordmark.svg"
              alt="Jupiter AI"
              width={130}
              height="auto"
              style={{ marginBottom: '16px' }}
            />
            <p className="text-[0.9rem] text-muted mb-2" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}> AI Built Around Your Industry</p>
            <p className="text-[0.8rem] text-muted opacity-70 mb-8" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              One vertical at a time. Starting with fashion.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/jupiterai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.8rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[0.8rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Instagram
              </a>
            </div>
          </div>

          {/* COLUMN 2 — Fashion AI */}
          <div>
            <h3 className="text-[0.85rem] font-semibold text-[#C7D4F0] mb-5 uppercase tracking-[0.15em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Fashion AI
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Link
                  href="/fashion-ai/jupiter-rank"
                  scroll={true}
                  className="text-[0.9rem] text-muted hover:text-white transition-colors"
                  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
                >
                  Jupiter Rank
                </Link>
                <span
                  className="px-1.5 py-0.5 text-[0.65rem] font-medium rounded-full"
                  style={{
                    background: 'rgba(124,58,237,0.15)',
                    border: '1px solid rgba(124,58,237,0.3)',
                    color: '#A78BFA'
                  }}
                >
                  LIVE
                </span>
              </div>
              <Link
                href="/fashion-ai/jupiter-chat"
                scroll={true}
                className="block text-[0.9rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                Jupiter Chat
              </Link>
              <Link
                href="/fashion-ai/jupiter-lens"
                scroll={true}
                className="block text-[0.9rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                Jupiter Lens
              </Link>
            </div>
          </div>

          {/* COLUMN 3 — Platform */}
          <div>
            <h3 className="text-[0.85rem] font-semibold text-white mb-5 uppercase tracking-[0.15em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Platform
            </h3>
            <div className="space-y-3">
              <Link
                href="/jupiter-build"
                scroll={true}
                className="block text-[0.9rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                Jupiter Build
              </Link>
              <Link
                href="/about"
                scroll={true}
                className="block text-[0.9rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                About
              </Link>
              <Link
                href="/contact"
                scroll={true}
                className="block text-[0.9rem] text-muted hover:text-white transition-colors"
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* COLUMN 4 — Stay Updated */}
          <div>
            <h3 className="text-[0.85rem] font-semibold text-white mb-2 uppercase tracking-[0.15em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.8)' }}>
              Stay Updated
            </h3>
            <p className="text-[0.8rem] text-muted mb-5" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
              New AI products for Indian businesses.
            </p>
            <FooterWaitlist />
          </div>
        </div>

        {/* BOTTOM SECTION — copyright */}
        <div className="relative z-2 flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="text-[0.8rem] text-muted" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
            © 2026 Jupiter AI. Built for India 🇮🇳
          </div>
          <div className="flex items-center gap-2 text-[0.8rem] text-muted">
            <Link
              href="/privacy-policy"
              scroll={true}
              className="hover:text-white transition-colors"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
            >
              Privacy Policy
            </Link>
            <span className="text-muted" style={{ margin: '0 4px' }}>·</span>
            <Link
              href="/terms-of-service"
              scroll={true}
              className="hover:text-white transition-colors"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
            >
              Terms of Service
            </Link>
            <span className="text-muted" style={{ margin: '0 4px' }}>·</span>
            <a
              href="mailto:hello@jupiter-ai.co"
              className="hover:text-white transition-colors"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}
            >
              info@jupiter-ai.co
            </a>
          </div>
        </div>
      </div>

      {/* ── MOBILE: artwork as absolute background layer ── */}
      <img
        src="/Images/mobilefooter.png"
        alt=""
        aria-hidden="true"
        className="md:hidden"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center bottom',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* ── MOBILE: uniform dark overlay for even image dimming ── */}
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(8,9,10,0.60)',
          zIndex: 1,
          pointerEvents: 'none',
        }}
      />

      {/* ── MOBILE: content overlaid above artwork ── */}
      <div
        className="block md:hidden relative z-[2]"
        style={{ padding: '120px 24px 60px', minHeight: '520px' }}
      >
        <div className="grid grid-cols-2 gap-8 pb-10 border-b border-[rgba(30,34,53,0.5)]">
          {/* Brand */}
          <div className="col-span-2">
            <img
              src="/logo/jupiter-ai-coloured-wordmark.svg"
              alt="Jupiter AI"
              width={120}
              style={{ marginBottom: '12px' }}
            />
            <p className="text-[0.85rem] text-muted mb-1" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>AI Built Around Your Industry</p>
            <p className="text-[0.75rem] text-muted opacity-70" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>One vertical at a time. Starting with fashion.</p>
          </div>

          {/* Fashion AI */}
          <div>
            <h3 className="text-[0.75rem] font-semibold text-[#C7D4F0] mb-4 uppercase tracking-[0.12em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>Fashion AI</h3>
            <div className="space-y-2.5">
              <div className="flex items-center gap-1.5">
                <Link href="/fashion-ai/jupiter-rank" scroll={true} className="text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Jupiter Rank</Link>
                <span className="px-1.5 py-0.5 text-[0.55rem] font-medium rounded-full" style={{ background: 'rgba(124,58,237,0.15)', border: '1px solid rgba(124,58,237,0.3)', color: '#A78BFA' }}>LIVE</span>
              </div>
              <Link href="/fashion-ai/jupiter-chat" scroll={true} className="block text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Jupiter Chat</Link>
              <Link href="/fashion-ai/jupiter-lens" scroll={true} className="block text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Jupiter Lens</Link>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-[0.75rem] font-semibold text-white mb-4 uppercase tracking-[0.12em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>Platform</h3>
            <div className="space-y-2.5">
              <Link href="/jupiter-build" scroll={true} className="block text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Jupiter Build</Link>
              <Link href="/about" scroll={true} className="block text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>About</Link>
              <Link href="/contact" scroll={true} className="block text-[0.85rem] text-muted hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Contact</Link>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="col-span-2">
            <h3 className="text-[0.75rem] font-semibold text-white mb-2 uppercase tracking-[0.12em]" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.9)' }}>Stay Updated</h3>
            <p className="text-[0.75rem] text-muted mb-4" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>New AI products for Indian businesses.</p>
            <FooterWaitlist />
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-2 pt-6 pb-4 text-center">
          <p className="text-[0.75rem] text-muted" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.9)' }}>© 2026 Jupiter AI. Built for India 🇮🇳</p>
          <div className="flex items-center gap-2 text-[0.75rem] text-muted flex-wrap justify-center">
            <Link href="/privacy-policy" scroll={true} className="hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Privacy Policy</Link>
            <span>·</span>
            <Link href="/terms-of-service" scroll={true} className="hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>Terms of Service</Link>
            <span>·</span>
            <a href="mailto:info@jupiter-ai.co" className="hover:text-white transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>info@jupiter-ai.co</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
