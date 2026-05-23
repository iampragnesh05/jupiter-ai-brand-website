export default function JupiterRankDeep() {
  return (
    <section className="py-24 md:py-16 bg-navy border-b border-border">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-start">
          {/* Left column - Text content */}
          <div>
            <p className="text-sm font-medium text-purple uppercase tracking-[0.2em] mb-4">
              FIRST PRODUCT — LIVE NOW
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Your AI SEO mentor
              <br />
              for Indian fashion.
            </h2>

            {/* Bullet points */}
            <ul className="space-y-4 mb-8">
              {[
                "Connects to Google Search Console and Analytics",
                "Crawls your entire website automatically",
                "Gives specific recommendations with rupee impact",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted">
                  <svg
                    className="w-5 h-5 text-purple flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* Real example box */}
            <div className="p-6 bg-surface border-l-4 border-purple rounded-r-lg mb-8">
              <p className="text-sm font-medium text-subtle mb-3">
                Real output from Jupiter Rank
              </p>
              <p className="text-white leading-relaxed">
                &ldquo;Your kurta collection page gets 1,100 searches per month
                but only 23 people click through.
                <br />
                <br />
                Fix the meta title and add 300 words of content.
                <br />
                <strong className="text-lavender">
                  Expected impact: ₹45,000/month extra revenue.
                </strong>
                &rdquo;
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: "350+", label: "Data points synced" },
                { value: "10 seconds", label: "to first insight" },
                { value: "₹45,000", label: "month found" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-muted">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="https://jupiterrank.jupiter-ai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-purple hover:bg-purple/90 rounded-lg transition-colors"
            >
              Try Jupiter Rank Free — No Card Required
            </a>
          </div>

          {/* Right column - Chat mockup */}
          <div className="lg:sticky lg:top-24">
            <div className="bg-surface rounded-xl overflow-hidden border border-border">
              {/* Chat header */}
              <div className="px-4 py-3 bg-navy border-b border-border flex items-center gap-2">
                <span className="text-sm font-medium text-white">
                  Chat with Jupiter
                </span>
                <svg
                  className="w-4 h-4 text-purple"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </div>

              {/* Chat messages */}
              <div className="p-4 space-y-4 min-h-[300px]">
                {/* User message */}
                <div className="flex justify-end">
                  <div className="max-w-[80%] px-4 py-3 bg-purple rounded-2xl rounded-tr-sm">
                    <p className="text-sm text-white">
                      Which page should I fix first?
                    </p>
                  </div>
                </div>

                {/* Assistant message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] px-4 py-3 bg-navy rounded-2xl rounded-tl-sm border border-border">
                    <p className="text-sm text-white leading-relaxed">
                      Your kurta collection page is your biggest opportunity.
                      Getting 1,100 weekly impressions but only 23 clicks
                      (2.1% CTR).
                    </p>
                    <p className="text-sm text-lavender mt-2 font-medium">
                      Fix the meta title → ₹45,000/month impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-4 py-3 bg-navy border-t border-border">
                <div className="flex items-center gap-2 px-4 py-2 bg-surface rounded-full">
                  <input
                    type="text"
                    placeholder="Ask Jupiter anything..."
                    className="flex-1 bg-transparent text-sm text-white placeholder:text-muted outline-none"
                    readOnly
                  />
                  <button className="p-2 text-purple hover:text-lavender transition-colors">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
