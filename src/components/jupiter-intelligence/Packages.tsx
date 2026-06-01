"use client"

export default function Packages() {
  return (
    <section className="bg-[#0F1117] py-20 md:py-28 border-t border-[#1E2235]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4">INVESTMENT</p>
          <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight mb-6">Choose Your Intelligence Level</h2>
          <p className="text-[#8892A4] text-base md:text-lg leading-relaxed">
            All packages include Jupiter Rank free for 1 month.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#08090A] border border-[#1E2235] rounded-xl p-7 flex flex-col">
            <div className="mb-5">
              <span className="bg-[#1E2235] text-[#8892A4] text-xs px-3 py-1 rounded-full font-semibold">STARTER</span>
            </div>
            <p className="text-white text-4xl font-extrabold mb-1">₹40,000</p>
            <p className="text-[#8892A4] text-sm">one-time project fee</p>
            
            <div className="border-t border-[#1E2235] my-5"></div>
            
            <ul className="space-y-4 flex-grow mb-4">
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Custom Shopify theme</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">AIO optimization</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Tech SEO built in</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">GSC + GA4 connected</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">SEO automation setup</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">PageSpeed 85+ guaranteed</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Mobile optimized</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Jupiter Rank 1 month free</span></li>
            </ul>
            <p className="text-[#8892A4] text-xs mb-6">+ ₹5,000/month to add Jupiter Chat</p>
            
            <a href="https://calendly.com/jupiter-ai" target="_blank" rel="noopener noreferrer" className="border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center w-full block">
              Book A Call →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0F1117] border border-[rgba(124,58,237,0.5)] rounded-xl p-7 flex flex-col relative" style={{ boxShadow: "0 0 40px rgba(124,58,237,0.1)" }}>
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#7C3AED] text-white text-xs font-semibold px-4 py-1 rounded-full whitespace-nowrap">
              MOST POPULAR
            </div>
            <div className="mb-5 mt-2">
              <span className="bg-[rgba(124,58,237,0.15)] text-[#A78BFA] text-xs px-3 py-1 rounded-full font-semibold">POPULAR</span>
            </div>
            <p className="text-white text-4xl font-extrabold mb-1">₹75,000</p>
            <p className="text-[#8892A4] text-sm">one-time project fee</p>
            
            <div className="border-t border-[#1E2235] my-5"></div>
            
            <ul className="space-y-4 flex-grow mb-6">
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Everything in Core plus:</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Jupiter Chat included</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">WhatsApp automation</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Abandoned cart recovery</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Festive campaign triggers</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Marketing automation flows</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Customer re-engagement</span></li>
            </ul>
            
            <a href="https://calendly.com/jupiter-ai" target="_blank" rel="noopener noreferrer" className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center w-full block mt-auto">
              Book A Call →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-[#08090A] border border-[#1E2235] rounded-xl p-7 flex flex-col">
            <div className="mb-5">
              <span className="bg-[#1E2235] text-[#8892A4] text-xs px-3 py-1 rounded-full font-semibold">PREMIUM</span>
            </div>
            <p className="text-white text-4xl font-extrabold mb-1">Let's Talk</p>
            <p className="text-[#8892A4] text-sm">custom scoped for your brand</p>
            
            <div className="border-t border-[#1E2235] my-5"></div>
            
            <ul className="space-y-4 flex-grow mb-6">
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Everything in Growth plus:</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Full custom development</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Jupiter Chat advanced</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Complete CRO layer</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">AIO automation</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Custom AI tool</span></li>
              <li className="flex items-start gap-2"><span className="text-[#10B981]">✓</span><span className="text-[#C7D4F0] text-sm">Dedicated support</span></li>
            </ul>
            
            <a href="mailto:info@jupiter-ai.co" className="border border-[#1E2235] hover:border-[#7C3AED] text-white px-6 py-3 rounded-lg font-medium transition-colors text-center w-full block mt-auto">
              Contact Us →
            </a>
          </div>
        </div>

        <p className="text-[#8892A4] text-sm text-center mt-6">
          50% advance to begin · 50% before final delivery · 7 days post-launch support included
        </p>
      </div>
    </section>
  );
}
