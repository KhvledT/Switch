import { Bot, BarChart3, ShieldCheck, Mail } from "lucide-react";
import { Variants } from "framer-motion";
import AiAutomationHero from "@/components/pagesComponents/ai-automation/AiAutomationHero";
import WhatIsAIAutomation from "@/components/pagesComponents/ai-automation/WhatIsAIAutomation";
import UseCasesSection from "@/components/pagesComponents/ai-automation/UseCasesSection";
import ResultsSection from "@/components/pagesComponents/ai-automation/ResultsSection";
import CTASection from "@/components/pagesComponents/ai-automation/CTASection";

export default function AIAutomationPage() {

  /* ================= Variants ================= */

  const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const fadeScale: Variants = {
    hidden: { opacity: 0, scale: 0.96 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const stagger: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
        when: "beforeChildren",
      },
    },
  };

  const listItem: Variants = {
    hidden: { opacity: 0, x: -18 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
  };

  const card: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.97 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
    hover: {
      y: -8,
      scale: 1.03,
      transition: { duration: 0.2 },
    },
  };

  const useCases = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Automation",
      desc: "Automatically categorize, draft, and respond to common inquiries.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis",
      desc: "Turn raw spreadsheets into actionable visual insights instantly.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Customer Support",
      desc: "24/7 intelligent agents that resolve issues without human intervention.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Risk Monitoring",
      desc: "Real-time threat detection and automated security protocols.",
    },
  ];

  const stats = [
    { number: 60, suffix: "%", label: "Cost Reduction" },
    { number: 24, suffix: "/7", label: "Automation" },
    { number: 3, suffix: "x", label: "Speed Increase" },
    { number: 0, suffix: "", label: "Manual Errors" },
  ];

  return (
    <div className="flex flex-col pt-15">
      {/* ================= Header ================= */}
      <AiAutomationHero sectionReveal={sectionReveal} />
      

      {/* ================= What is AI Automation ================= */}
      <WhatIsAIAutomation fadeScale={fadeScale} listItem={listItem} stagger={stagger} />

      {/* ================= Use Cases ================= */}
      <UseCasesSection sectionReveal={sectionReveal} card={card} useCases={useCases} />

      {/* ================= Results ================= */}
      <ResultsSection fadeScale={fadeScale} stagger={stagger} stats={stats} />

      {/* ================= CTA ================= */}
      <CTASection sectionReveal={sectionReveal} />
    </div>
  );
}
