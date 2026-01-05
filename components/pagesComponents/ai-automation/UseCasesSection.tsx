"use client";
import { motion, useReducedMotion } from "framer-motion";

interface UseCasesSectionProps {
  sectionReveal: any;
  card: any;
    useCases: {
      icon: React.ReactNode;
      title: string;
      desc: string;
    }[];
}

export default function UseCasesSection({ sectionReveal, card ,useCases } : UseCasesSectionProps) {
  
  const reduceMotion = useReducedMotion();

  
  const inViewMotion = reduceMotion
    ? { initial: "visible", whileInView: "visible" }
    : {
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.25 },
      };

  return (
    <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            className="mb-16"
            variants={sectionReveal}
            {...inViewMotion}
          >
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">
              Implementation Spheres
            </h2>
            <p className="text-muted-foreground max-w-xl">
              AI automation can be embedded across every business function.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                variants={card}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={reduceMotion ? undefined : "hover"}
                className="border bg-background p-8 group hover:bg-foreground hover:text-background transition-all"
              >
                <div className="mb-6 opacity-40 group-hover:opacity-100">
                  {useCase.icon}
                </div>

                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">
                  {useCase.title}
                </h3>

                <p className="text-sm text-muted-foreground group-hover:text-background/60">
                  {useCase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
