"use client";
import Beams from '@/components/reactBits/Beams';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
interface HomeHeroProps {
  revealUp: any;
  staggerContainer: any;
}

export default function HomeHero({revealUp, staggerContainer}: HomeHeroProps) {
  return (
    <motion.section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ contain: "layout paint", willChange: "transform" }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.06 }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          <Beams
            beamWidth={2}
            beamHeight={15}
            beamNumber={12}
            lightColor="#ffffff"
            speed={2}
            noiseIntensity={0.1}
            scale={0.2}
            rotation={200}
          />
        </div>

        <div className="absolute inset-0 bg-black pointer-events-none" />

        <div className="container relative z-10 mx-auto max-w-4xl text-center">
          <motion.h1
            className="mb-6 text-4xl px-5 font-black text-white tracking-tighter sm:text-6xl md:text-7xl uppercase"
            variants={revealUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Future of Digital Services
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed"
            variants={revealUp}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Scale your business with our cutting-edge website design, marketing strategies, and AI automation solutions.
          </motion.p>

          <motion.div
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            variants={revealUp}
            transition={{ duration: 0.9 }}
          >
            <Link href="/websites">
              <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white text-black hover:bg-gray-200 cursor-pointer">
                Explore Websites <ArrowRight className="ml-2 h-5 w-4" />
              </Button>
            </Link>

            <Link href="/marketing">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg font-bold bg-transparent border-white dark:border-white text-white dark:hover:bg-white dark:hover:text-black cursor-pointer"
              >
                Check Marketing Plans
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
  )
}
