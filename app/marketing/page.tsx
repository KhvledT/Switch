import { Variants, Transition } from 'framer-motion';
import AskAI from "@/components/pagesComponents/marketingPage/AskAI";
import MarketingHero from '@/components/pagesComponents/marketingPage/MarketingHero';
import FeaturedOffersSection from '@/components/pagesComponents/marketingPage/FeaturedOffersSection';
import DecisionBreakSection from '@/components/pagesComponents/marketingPage/DecisionBreakSection';

const shortTrans: Transition = { duration: 0.36 };
const medTrans: Transition = { duration: 0.55 };

/* Page-level stagger for sections */
const containerStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.06 },
  },
};

/* subtle reveal upwards */
const revealUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: medTrans },
};

/* title line with slight scale + letter feel (wrap each line/block) */
const titleVariant: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { ...medTrans } },
};

/* plan card: entrance + hover */
const planCard: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...medTrans },
  },
  hover: {
    boxShadow: "0px 18px 40px rgba(10,10,10,0.12)",
    transition: { ...shortTrans },
  },
};

/* feature list item */
const featureItem: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { ...shortTrans } },
};

/* CTA button micro-interaction */
const ctaWrap: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { ...shortTrans } },
  hover: { scale: 1.03, transition: { ...shortTrans } },
};

/* small badge (Most Requested) */
const badge: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function MarketingPage() {

  const plans = [
    {
      title: "Growth Accelerator",
      desc: "Perfect for startups looking to establish their digital footprint.",
      features: [
        "Social Media Management",
        "Content Creation",
        "Basic SEO",
        "Weekly Reports",
      ],
    },
    {
      title: "Market Leader",
      desc: "Comprehensive strategy for established brands scaling up.",
      features: [
        "Full Funnel Optimization",
        "Influencer Outreach",
        "Professional Photography",
        "Paid Ads Management",
        "Bi-weekly Strategy Calls",
      ],
      popular: true,
    },
    {
      title: "Dominion Suite",
      desc: "Enterprise-level market domination and total brand refresh.",
      features: [
        "360 Degree Marketing",
        "Video Production",
        "International SEO",
        "Dedicated Manager",
        "Event Support",
      ],
    },
  ];

  return (
    <div className="flex flex-col pt-15">

      {/* ============== Hero Section ============== */}
      <MarketingHero titleVariant={titleVariant} revealUp={revealUp} />

      {/* ============== Featured Offers ============== */}
      <FeaturedOffersSection plans={plans} titleVariant={titleVariant} revealUp={revealUp} containerStagger={containerStagger} planCard={planCard} badge={badge} ctaWrap={ctaWrap} featureItem={featureItem}  /> 

      {/* ============== Decision Break ============== */}
      <DecisionBreakSection revealUp={revealUp} />

      {/* ============== AI Assistant ============== */}
      <AskAI />
    </div>
  );
}
