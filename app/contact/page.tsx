import ContactForm from "@/components/pagesComponents/contactPage/contactForm";
import { Variants } from "framer-motion";
import ContactHero from "@/components/pagesComponents/contactPage/ContactHero";
import ContactInfoSection from "@/components/pagesComponents/contactPage/ContactInfoSection";

export default function ContactPage() {

  /* ================= Variants ================= */
  const sectionReveal: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.06,
      },
    },
  };

  const infoItem: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.45 } },
    hover: {
      x: 4,
      transition: { duration: 0.2 },
    },
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 0.97 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col pt-15">
      {/* ================= Header Section ================= */}
      <ContactHero sectionReveal={sectionReveal}  />

      {/* ================= Content Section ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* ================= Contact Info ================= */}
            <ContactInfoSection sectionReveal={sectionReveal} staggerContainer={staggerContainer} infoItem={infoItem} imageReveal={imageReveal} /> 

            {/* ================= Contact Form ================= */}
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
