export default function ForInvestors() {
  return (
    <section id="investors" className="py-24 md:py-16 bg-surface">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 md:p-12 border border-purple/30 rounded-xl">
          {/* Section label */}
          <p className="text-sm font-medium text-purple uppercase tracking-[0.2em] mb-4">
            FOR INVESTORS
          </p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Building the vertical AI layer for Indian businesses.
          </h2>

          {/* Paragraphs */}
          <div className="space-y-4 text-muted leading-relaxed mb-8">
            <p>
              India has 63 million MSMEs. Most cannot afford specialized
              consultants. None have access to AI that truly understands their
              market.
            </p>
            <p>
              Jupiter AI is building that layer. One industry at a time. Jupiter
              Rank is the proof of concept — live, working, and getting results
              for Indian fashion brands.
            </p>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm">
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">63M+</span>
              <span className="text-muted">Indian MSMEs</span>
            </div>
            <span className="text-border">|</span>
            <div className="text-center">
              <span className="block text-2xl font-bold text-white">
                ₹8L Cr
              </span>
              <span className="text-muted">Fashion market</span>
            </div>
            <span className="text-border">|</span>
            <div className="text-center">
              <span className="block text-2xl font-bold text-purple">
                Live MVP ✓
              </span>
            </div>
          </div>

          {/* CTA */}
          <a
            href="mailto:hello@jupiter-ai.co"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors"
          >
            Talk to the Founder
          </a>
        </div>
      </div>
    </section>
  );
}
