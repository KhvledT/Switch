import { Variants } from "framer-motion";
import AboutHero from "@/components/pagesComponents/aboutPage/AboutHero";
import WhoWeAreSection from "@/components/pagesComponents/aboutPage/WhoWeAreSection";
import PhilosophySection from "@/components/pagesComponents/aboutPage/PhilosophySection";
import ServicesSection from "@/components/pagesComponents/aboutPage/ServicesSection";
import TeamSection from "@/components/pagesComponents/aboutPage/TeamSection";
import CTASection from "@/components/pagesComponents/aboutPage/CTASection";

/* ================= Motion Variants ================= */

/* Hero – depth + scale (premium entry) */
const heroReveal: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

/* Section titles – clean vertical reveal */
const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

/* Text blocks – horizontal (modern feel) */
const textLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const textRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

/* Cards – lift + perspective */
const cardLift: Variants = {
  hidden: { opacity: 0, y: 32, rotateX: 6, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
    scale: 1.04,
    transition: { duration: 0.25 },
  },
};

/* Small list items – subtle slide */
const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};

/* CTA – focus scale */
const ctaReveal: Variants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AboutPage() {
  

  return (
    <div className="flex flex-col pt-15">
      {/* ================= Header ================= */}
      <AboutHero sectionReveal={sectionReveal} />

      {/* ================= Who We Are ================= */}
      <WhoWeAreSection textLeft={textLeft} textRight={textRight} />

      {/* ================= Philosophy ================= */}
      <PhilosophySection sectionReveal={sectionReveal} listItem={listItem} />

      {/* ================= Services ================= */}
      <ServicesSection sectionReveal={sectionReveal} cardLift={cardLift} />

      {/* ================= Team ================= */}
      <TeamSection textLeft={textLeft} textRight={textRight} listItem={listItem} />

      {/* ================= CTA ================= */}
      <CTASection ctaReveal={ctaReveal} />
      
    </div>
  );
}