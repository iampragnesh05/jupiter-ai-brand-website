"use client";

import Link from "next/link";

export default function JupiterBuild() {
  const ideaPills = [
    "Auto-generate product descriptions",
    "WhatsApp broadcast AI",
    "Restock prediction tool",
    "Custom chatbot for your catalogue",
    "Review response generator",
    "Pricing optimization AI",
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 border-t border-border" style={{ backgroundColor: '#08090A', padding: '80px 24px' }}>
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 60px 20px !important;
          }
        }
      `}</style>
      <div className="max-w-[1100px] mx-auto text-center">
        {/* Top Label */}
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-purple mb-5">
          PLATFORM PRODUCT
        </p>

        {/* Main Heading */}
        <h2 className="text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold text-white leading-[1.15] mb-4">
          <span className="block">Have an AI workflow</span>
          <span
            className="block"
            style={{
              background: "linear-gradient(135deg, #7C3AED, #A78BFA)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            for your business?
          </span>
        </h2>

        {/* Subheading */}
        <p className="text-[1.05rem] text-muted leading-relaxed max-w-[520px] mx-auto mb-12">
          Jupiter Build turns business ideas into working AI systems. No complex setup. No generic solutions. Tell us what your business needs and we build it around your workflow.
        </p>

        {/* Example Ideas */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {ideaPills.map((pill, index) => (
            <span
              key={index}
              className="bg-[#08090A] border border-border rounded-full px-5 py-2.5 text-[0.85rem] text-muted cursor-default transition-all duration-200 hover:border-purple hover:text-[#C7D4F0]"
            >
              {pill}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          href="/jupiter-build"
          scroll={true}
          className="inline-flex items-center gap-2 bg-transparent border border-purple text-purple rounded-lg px-8 py-3.5 text-[0.95rem] font-medium transition-all duration-200 hover:bg-purple hover:text-white"
        >
          Build with Jupiter AI →
        </Link>

        {/* Below Button */}
        <p className="text-[0.8rem] text-muted mt-3">
          Any industry. Any workflow. Built for your business.
        </p>
      </div>
    </section>
  );
}
