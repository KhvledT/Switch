"use client";
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
interface ServicesSectionProps {
  services: {
    icon: React.ReactNode;
    title: string;
    desc: string;
    link: string;
    }[];
    revealUp: any;
    staggerContainer: any;
}
export default function ServicesSection({ services, revealUp, staggerContainer }:   ServicesSectionProps) {
  return (
    <motion.section
        className="bg-foreground text-background py-20 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase"
            variants={revealUp}
          >
            Services
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {services.map((service, i) => (
              <Link key={i} href={service.link}>
                <motion.a
                  className="group border border-background/20 p-8 transition-all hover:bg-background hover:text-foreground block"
                  variants={revealUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="mb-4 text-xl font-black tracking-tighter uppercase">
                    {service.title}
                  </h3>
                  <p className="mb-6 text-background/60 group-hover:text-foreground/60">
                    {service.desc}
                  </p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.a>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>
  )
}
