"use client";

export default function BottomCTA() {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 border-t border-border" style={{ backgroundColor: '#08090A', padding: '80px 24px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
      {/* Subtle purple radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[700px] mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-white leading-[1.2] mb-4">
          <span className="block">Ready to grow your</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            store with AI?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-muted leading-relaxed max-w-[500px] mx-auto mb-10">
          Jupiter Rank analyzes your store and shows exactly where you are losing revenue — with every fix tied to rupees.
        </p>

        {/* Primary CTA Button */}
        <a
          href="https://app.jupiterrank.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple text-white rounded-lg px-10 py-4 text-base font-semibold transition-colors hover:bg-purple/90"
        >
          Try Jupiter Rank →
        </a>

        {/* Below Button */}
        <p className="text-[0.8rem] text-muted mt-2">
          No card required · Free for 1 month · Cancel anytime
        </p>
      </div>
    </section>
  );
}
