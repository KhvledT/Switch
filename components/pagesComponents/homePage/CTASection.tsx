"use client";
import TextType from '@/components/reactBits/TextType';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface CTASectionProps {
  revealUp: any;
}

export default function CTASection({ revealUp }: CTASectionProps) {
  return (
    <motion.section className="py-28 md:py-36 text-center bg-foreground text-background"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container mx-auto px-4 flex flex-col items-center gap-5">
          <motion.div variants={revealUp}>
            <TextType
              text={["Let’s build something powerful.", "Let’s grow your business.", "Let’s innovate together."]}
              typingSpeed={100}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </motion.div>

          <motion.div variants={revealUp} transition={{ delay: 0.12 }}>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-14 text-lg font-black uppercase">
                Start Your Project <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
  )
}
