"use client"

export default function HowItsDifferent() {
  return (
    <section className="bg-[#08090A] py-20 md:py-28 border-t border-[#1E2235]">
      <div className="max-w-[1100px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#7C3AED] text-xs font-semibold tracking-[0.12em] uppercase mb-4">THE DIFFERENCE</p>
          <h2 className="text-white font-extrabold text-3xl md:text-5xl leading-tight">
            Why Jupiter Intelligence<br className="hidden md:block"/> Is Not An Agency
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Generic Agency */}
          <div className="bg-[#0F1117] border border-[#1E2235] border-t-[3px] border-t-[#EF4444] rounded-xl p-6">
            <p className="text-[#EF4444] text-xs uppercase font-semibold mb-6">Generic Agency</p>
            <ul className="space-y-4">
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> Templates used</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> No AI layer</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> Automation extra cost</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> Basic SEO</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> Jupiter Rank: No</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> No Indian optimization</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>×</span> Monthly retainer</li>
            </ul>
          </div>

          {/* Freelancer */}
          <div className="bg-[#0F1117] border border-[#1E2235] border-t-[3px] border-t-[#F59E0B] rounded-xl p-6">
            <p className="text-[#F59E0B] text-xs uppercase font-semibold mb-6">Freelancer</p>
            <ul className="space-y-4">
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Sometimes templates</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Rarely AI</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> No automation</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Basic SEO</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Jupiter Rank: No</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Sometimes Indian</li>
              <li className="text-[#8892A4] text-sm flex gap-2"><span>~</span> Unavailable after</li>
            </ul>
          </div>

          {/* Jupiter Intelligence */}
          <div className="bg-[#0F1117] border border-[rgba(124,58,237,0.4)] border-t-[3px] border-t-[#7C3AED] rounded-xl p-[24px]" style={{ boxShadow: "0 0 40px rgba(124,58,237,0.1)" }}>
            <p className="text-[#A78BFA] text-xs uppercase font-semibold mb-6">Jupiter Intelligence</p>
            <ul className="space-y-4">
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Never templates</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Always included</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Always included</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Complete setup</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> 1 month free</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Built in</li>
              <li className="text-[#C7D4F0] text-sm flex gap-2"><span className="text-[#10B981]">✓</span> Jupiter Rank</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2 text-sm text-[#C7D4F0]">30 Stores Built</span>
          <span className="bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2 text-sm text-[#C7D4F0]">5 Years Experience</span>
          <span className="bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2 text-sm text-[#C7D4F0]">100% Custom</span>
          <span className="bg-[#0F1117] border border-[#1E2235] rounded-full px-4 py-2 text-sm text-[#C7D4F0]">Indian Brands Only</span>
        </div>
      </div>
    </section>
  );
}
