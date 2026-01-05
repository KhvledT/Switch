"use client";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import SwitchLogo from "@/assets/imgs/about.jpeg";
interface AboutSectionProps {
  revealLeft: any;
  revealRight: any;
}
export default function AboutSection({revealLeft, revealRight}: AboutSectionProps) {
  return (
    <motion.section
        className="py-20 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <motion.div variants={revealLeft} transition={{ duration: 0.8 }}>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
                About SWITCH
              </p>

              <h2 className="mb-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
                Redefining the digital boundary.
              </h2>

              <p className="mb-8 text-base sm:text-lg text-muted-foreground leading-relaxed">
                We are a collective of designers, engineers, and strategists
                dedicated to creating seamless digital experiences.
              </p>
              <Link href="/aboutus">
                <Button variant="outline" className="font-bold bg-transparent">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              className="flex justify-center"
              variants={revealRight}
              transition={{ duration: 0.9, ease: "circOut" }}
            >
              <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="w-full"
              >
                <Image
                  src={SwitchLogo}
                  alt="About SWITCH"
                  className="rounded-md border border-background/20 shadow-lg w-full h-auto"
                  priority={false}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  )
}
