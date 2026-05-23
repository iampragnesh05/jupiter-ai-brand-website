import Link from "next/link";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function FashionAI() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-24 px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-sm font-medium text-purple uppercase tracking-[0.2em] mb-4">FIRST VERTICAL — JUPITER AI</p>
          <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold text-white mb-6">Fashion AI</h1>
          <p className="text-lg text-muted max-w-[600px] mx-auto">
            A complete AI ecosystem built specifically for Indian fashion brands.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jupiter Rank */}
            <div className="p-8 bg-navy border-l-4 border-purple rounded-r-xl">
              <Badge label="Live" variant="live" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Jupiter Rank</h3>
              <p className="text-lavender mb-4">AI SEO Mentor</p>
              <p className="text-muted mb-6 leading-relaxed">
                Ranks your products on Google. Connects to your real data. Gives rupee impact on every recommendation.
              </p>
              <div className="p-4 bg-surface rounded-lg mb-6">
                <p className="text-sm text-subtle">Found ₹45,000/month in 10 seconds</p>
              </div>
              <Button href="/fashion-ai/jupiter-rank" variant="primary" className="w-full justify-center">
                Learn More →
              </Button>
            </div>

            {/* Jupiter Chat */}
            <div className="p-8 bg-navy border border-border rounded-xl">
              <Badge label="Coming Soon" variant="coming" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Jupiter Chat</h3>
              <p className="text-lavender mb-4">AI Customer Support</p>
              <p className="text-muted mb-6 leading-relaxed">
                Trained on your catalogue. Answers customer questions on website, WhatsApp, and Instagram. 24/7 without you.
              </p>
              <Button href="/fashion-ai/jupiter-chat" variant="secondary" className="w-full justify-center">
                Learn More →
              </Button>
            </div>

            {/* Jupiter Lens */}
            <div className="p-8 bg-navy border border-border rounded-xl">
              <Badge label="Coming Soon" variant="coming" />
              <h3 className="text-2xl font-bold text-white mt-4 mb-2">Jupiter Lens</h3>
              <p className="text-lavender mb-4">AI Fashion Visualization</p>
              <p className="text-muted mb-6 leading-relaxed">
                Transform product photos into AI generated fashion visuals, virtual try-ons, AI models, and motion content built for modern ecommerce brands.              </p>
              <Button href="/fashion-ai/jupiter-lens" variant="secondary" className="w-full justify-center">
                Learn More →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fashion First */}
      <section className="py-24 md:py-16 bg-navy">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Fashion First</h2>
          <p className="text-lg text-muted mb-12 leading-relaxed">
            Indian fashion is an ₹8 lakh crore industry. Millions of D2C brands. Almost none with access to AI that understands their market.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Largest D2C opportunity in India</h3>
              <p className="text-muted text-sm">Fashion e-commerce is the biggest and fastest growing sector</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Biggest AI gap in any Indian industry</h3>
              <p className="text-muted text-sm">Global tools fail to understand Indian fashion nuances</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-3">Festival cycles create unique patterns</h3>
              <p className="text-muted text-sm">No global tool understands festival season traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-16 bg-surface">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start with Jupiter Rank</h2>
          <p className="text-lg text-muted mb-8">Our live product. 3 months free. No card required.</p>
          <Link
            href="https://jupiterrank.jupiter-ai.co"
            target="_blank"
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors"
          >
            Try Jupiter Rank Free →
          </Link>
        </div>
      </section>
    </>
  );
}
