import { Zap, Megaphone, Bot } from "lucide-react";
import DomainSection from "@/components/pagesComponents/homePage/DomainSection";
import HomeHero from '@/components/pagesComponents/homePage/HomeHero';
import AboutSection from '@/components/pagesComponents/homePage/AboutSection';
import ServicesSection from '@/components/pagesComponents/homePage/ServicesSection';
import WhyChooseSwitch from '@/components/pagesComponents/homePage/WhyChooseSwitch';
import ProcessSection from '@/components/pagesComponents/homePage/ProcessSection';
import StatsSection from '@/components/pagesComponents/homePage/StatsSection';
import TechStackSecion from '@/components/pagesComponents/homePage/TechStackSecion';
import CTASection from '@/components/pagesComponents/homePage/CTASection';

const revealUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

const revealLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

const revealRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { },
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06
    }
  }
};

export default function HomePage() {

  const stats = [
    { number: 50, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 3, suffix: "x", label: "Performance Boost" },
    { number: 24, suffix: "/7", label: "Support & Monitoring" },
  ];

  const services = [
    {
      icon: <Zap className="h-9 w-9" />,
      title: "Websites",
      desc: "Custom high-performance websites built for scale.",
      link: "/websites",
    },
    {
      icon: <Megaphone className="h-9 w-9" />,
      title: "Marketing",
      desc: "Data-driven marketing campaigns that convert.",
      link: "/marketing",
    },
    {
      icon: <Bot className="h-9 w-9" />,
      title: "AI Automation",
      desc: "Intelligent automation to streamline your workflow.",
      link: "/ai-automation",
    },
  ];

  return (
    <div className="flex flex-col">

      {/* ================= Hero Section ================= */}
      <HomeHero revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= About ================= */}
      <AboutSection revealLeft={revealLeft} revealRight={revealRight} />

      {/* ================= Domain Search (wrapped for reveal) ================= */}
      <DomainSection revealUp={revealUp} />

      {/* ================= Services ================= */}
      <ServicesSection services={services} revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= Why Choose Switch ================= */}
      <WhyChooseSwitch revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= Process ================= */}
      <ProcessSection revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= Stats ================= */}
      <StatsSection stats={stats} revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= Tech Stack ================= */}
      <TechStackSecion revealUp={revealUp} staggerContainer={staggerContainer} />

      {/* ================= Final CTA ================= */}
      <CTASection revealUp={revealUp} />

    </div>
  );
}