import JupiterChatHero from "@/components/jupiter-chat/Hero";
import ProductOverview from "@/components/jupiter-chat/ProductOverview";
import Features from "@/components/jupiter-chat/Features";
import Manifesto from "@/components/jupiter-chat/Manifesto";
import WorkflowVisualization from "@/components/jupiter-chat/WorkflowVisualization";
import Waitlist from "@/components/jupiter-chat/Waitlist";
import ChatFAQ from "@/components/jupiter-chat/ChatFAQ";

export default function JupiterChat() {
  return (
    <>
      <JupiterChatHero />
      <ProductOverview />
      <Features />
      <Manifesto />
      <WorkflowVisualization />
      <Waitlist />
      <ChatFAQ />
    </>
  );
}
