export default function Products() {
  const products = [
    {
      badge: "Live Now",
      badgeColor: "bg-purple",
      title: "Jupiter Rank",
      subtitle: "AI SEO Mentor for Indian Fashion",
      description:
        "Connects to your Google data and tells you exactly what to fix to rank on page one. With rupee impact on every recommendation.",
      example: "Found ₹45,000/month opportunity in 10 seconds",
      cta: "Try Free for 3 Months →",
      href: "https://jupiterrank.jupiter-ai.co",
      borderColor: "border-l-purple",
      borderStyle: "border-l-4",
    },
    {
      badge: "Coming Soon",
      badgeColor: "bg-muted/30",
      title: "Jupiter Convert",
      subtitle: "AI Conversion Optimizer",
      description:
        "Tells you exactly why visitors are not buying and what to fix. Built for Indian e-commerce buyer behavior.",
      cta: "Join Waitlist →",
      href: "#waitlist",
      borderColor: "border-border",
      borderStyle: "border",
    },
    {
      badge: "Coming Soon",
      badgeColor: "bg-muted/30",
      title: "Jupiter Reach",
      subtitle: "AI Content Strategist",
      description:
        "What to post, when to post, what your competitors are doing. Built for Indian fashion brands on Instagram and WhatsApp.",
      cta: "Join Waitlist →",
      href: "#waitlist",
      borderColor: "border-border",
      borderStyle: "border",
    },
    {
      badge: "Exploring",
      badgeColor: "bg-surface",
      title: "More Industries",
      subtitle: "Beyond Fashion",
      description:
        "Healthcare. Education. Real estate. Food. Each with its own dedicated AI tool built ground up for that industry.",
      cta: "Tell Us Your Industry →",
      href: "mailto:hello@jupiter-ai.co",
      borderColor: "border-border",
      borderStyle: "border",
    },
  ];

  return (
    <section id="products" className="py-24 md:py-16 bg-surface">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12">
          <p className="text-sm font-medium text-purple uppercase tracking-[0.2em] mb-4">
            OUR ECOSYSTEM
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            One platform. Multiple AI tools.
            <br />
            One industry at a time.
          </h2>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-navy ${product.borderStyle} ${product.borderColor} hover:border-purple/50 transition-colors group`}
            >
              {/* Badge */}
              <span
                className={`inline-block px-3 py-1 text-xs font-medium text-white ${product.badgeColor} rounded-full mb-4`}
              >
                {product.badge}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-1">
                {product.title}
              </h3>
              <p className="text-sm text-lavender mb-3">{product.subtitle}</p>

              {/* Description */}
              <p className="text-muted mb-4 leading-relaxed">
                {product.description}
              </p>

              {/* Example box for live product */}
              {product.example && (
                <div className="p-4 bg-surface rounded-lg mb-4">
                  <p className="text-sm text-subtle">{product.example}</p>
                </div>
              )}

              {/* CTA */}
              <a
                href={product.href}
                className="inline-flex items-center text-sm font-medium text-purple hover:text-lavender transition-colors"
              >
                {product.cta}
                <svg
                  className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
