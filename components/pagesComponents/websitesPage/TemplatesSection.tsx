'use client';
import { Button } from "@/components/ui/button";
import { motion, useReducedMotion } from "framer-motion";
import { Layers } from "lucide-react";
interface TemplateProps {
  revealUp: any;
  pageStagger: any;
  templates: {
    type: string;
    name: string;
  }[];
}
export default function TemplatesSection({revealUp ,  pageStagger ,templates}: TemplateProps) {
      
    
  const shouldReduceMotion = useReducedMotion();
    // helper: choose motion props based on reduced motion
  const animateProps = shouldReduceMotion
    ? { initial: 'visible', whileInView: 'visible', viewport: { once: true, amount: 0.01 } }
    : { initial: 'hidden', whileInView: 'visible', viewport: { once: true, amount: 0.12 } };
  return (
    <div>
        {/* ================= Transition Block ================= */}
      <div className="transition-block py-20 border-t border-b bg-muted/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <motion.div variants={revealUp} {...animateProps}>
            <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">Want something faster?</h3>
            <p className="text-muted-foreground text-lg">
              Skip the custom build and start with professionally designed templates you can reuse endlessly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* ================= TEMPLATES block (outer plain) ================= */}
      <div className="templates bg-foreground text-background py-24">
        <div className="container mx-auto px-4">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16" variants={revealUp} {...animateProps}>
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase mb-4">Website Templates — Unlimited License</h2>
              <p className="text-background/60 text-lg">Pay once. Use any template. Unlimited personal or client projects. Lifetime updates included.</p>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase font-bold tracking-widest text-background/40 mb-2">One-time payment</p>
              <div className="text-5xl font-black tracking-tighter">$499</div>
            </div>
          </motion.div>

          <motion.div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6" variants={pageStagger} {...animateProps}>
            {templates.map((template, i) => (
                <div key={template.name + i} className="group aspect-square border border-background/20 p-6 flex flex-col justify-between cursor-pointer transition-all hover:bg-background hover:text-foreground">
                  <div className="p-2 w-fit bg-background/10 group-hover:bg-foreground/10">
                    <Layers className="h-5 w-5" />
                    </div>

                    <div>
                        <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 group-hover:opacity-100">{template.type}</p>
                        <p className="font-black text-sm uppercase">{template.name}</p>
                    </div>  
                </div>
              
            ))}
          </motion.div>

          {/* Value bullets */}
          <motion.div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-background/70" variants={revealUp} {...animateProps}>
            <div>✔ Unlimited usage — no per-site limits</div>
            <div>✔ Lifetime access & future templates</div>
            <div>✔ No subscriptions or hidden fees</div>
          </motion.div>

          <motion.div className="mt-16 text-center" variants={revealUp} {...animateProps}>
            <Button className="bg-background text-foreground hover:bg-background/90 font-black px-14 h-14 uppercase">Unlock Templates</Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
