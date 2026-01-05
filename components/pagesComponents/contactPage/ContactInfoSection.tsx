"use client";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import SwitchLogo from "@/assets/imgs/about.jpeg";

interface ContactInfoSectionProps {
  sectionReveal: any;
  staggerContainer: any;
  infoItem: any;
  imageReveal: any;
}

export default function ContactInfoSection({
  sectionReveal,
  staggerContainer,
  infoItem,
  imageReveal,
}: ContactInfoSectionProps) {
  const reduceMotion = useReducedMotion();

  const motionProps = reduceMotion
    ? { initial: "visible" as const, whileInView: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2 },
      };
  return (
    <motion.div
      className="space-y-12"
      variants={staggerContainer}
      {...motionProps}
    >
      <motion.div className="space-y-6" variants={sectionReveal}>
        <h2 className="text-4xl font-black tracking-tighter uppercase">
          Get in touch.
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Whether you have a specific project in mind or just want to explore
          the possibilities of AI and modern web design, we're here to help.
        </p>
      </motion.div>

      {/* <motion.div
            className="space-y-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            >
            {[
                { label: "Email", value: "hello@switch.io", icon: Mail },
                { label: "Phone", value: "+20 123456789", icon: Phone },
                { label: "Studio", value: "123 Digital Ave, Cyber City", icon: MapPin },
            ].map((item) => {
                const Icon = item.icon;

                return (
                <motion.div
                    key={item.label}
                    className="flex items-start gap-4"
                    variants={infoItem}
                    whileHover="hover"
                >
                    <motion.div
                    className="bg-foreground text-background p-3"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.2 }}
                    >
                    <Icon className="h-6 w-6" />
                    </motion.div>

                    <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">
                        {item.label}
                    </p>
                    <p className="text-xl font-bold">{item.value}</p>
                    </div>
                </motion.div>
                );
            })}
            </motion.div> */}

      <motion.div variants={imageReveal}>
        <Image
          src={SwitchLogo}
          alt="About SWITCH"
          className="rounded-md border border-background/20 shadow-lg w-full max-w-lg h-auto mx-auto"
          priority={false}
        />
      </motion.div>
    </motion.div>
  );
}
