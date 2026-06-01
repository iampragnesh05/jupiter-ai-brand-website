import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import WhoWeAre from "@/components/sections/WhoWeAre";
import FashionAI from "@/components/sections/FashionAI";
import JupiterBuild from "@/components/sections/JupiterBuild";
import JupiterIntelligenceTeaser from "@/components/sections/JupiterIntelligenceTeaser";
import BottomCTA from "@/components/sections/BottomCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <WhoWeAre />
      <FashionAI />
      <JupiterBuild />
      <JupiterIntelligenceTeaser />
      <BottomCTA />
    </>
  );
}

