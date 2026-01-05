"use client";

import { Button } from "@/components/ui/button";
import { Monitor, Phone, Tablet } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion, Variants, MotionProps } from "framer-motion";

interface WebsiteCardProps {
  project: {
    title: string;
    desc: string;
    url: string;
    image: string;
  };
  /**
   * لو الأب عايز يتحكم في الأنيميشن، مرّر هنا الـ variants
   * لو متمرّش، الكارد هيستخدم cardItem داخليًا.
   */
  variants?: Variants;
  /** إضافي: يمكن تمرير أي MotionProps إضافية إذا احتجت */
  motionProps?: MotionProps;
}

const cardItem: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
  hover: { scale: 1.02, y: -4, transition: { duration: 0.18 } },
};

export default function WebsiteCard({ project, variants, motionProps }: WebsiteCardProps) {
  const Router = useRouter();
  const reduce = useReducedMotion();

  const navigateToPreview = (url: string) => {
    Router.push(`/webiframe?url=${encodeURIComponent(url)}`);
  };

  // لو الأب مرّر variants، نخلي الأب هو اللي يسيطر — ما نحددش initial/animate هنا.
  // لو الأب ما مرّش، نستخدم الـ cardItem الداخلي مع whileInView.
  const motionWrapperProps: MotionProps = variants
    ? {
        variants,
        whileHover: "hover",
        // لو الأب هيتحكم في الظهور فلا نحدد initial/whileInView هنا
        ...motionProps,
      }
    : {
        variants: cardItem,
        initial: reduce ? "visible" : "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.14 },
        whileHover: "hover",
        ...motionProps,
      };

  return (
    
      <>
      <motion.div
      {...motionWrapperProps}
      // مهم: احتفظ بالـ className وهيكل الـ DOM نفسه عشان التصميم ما يتغيرش
      className="group cursor-pointer space-y-4"
      onClick={() => navigateToPreview(project.url)}
    >
      {/* Preview */}
      <div className="aspect-video relative overflow-hidden border bg-muted transition-colors group-hover:border-foreground">
        <Image
          src={project.image}
          alt={project.title}
          fill
          quality={75}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />

        {/* Devices */}
        <div className="absolute top-4 right-4 flex gap-2">
          {[Monitor, Tablet, Phone].map((Icon, idx) => (
            <div key={idx} className="bg-background border p-1 rounded-sm">
              <Icon className="h-3 w-3" />
            </div>
          ))}
        </div>
      </div>

    </motion.div>
      {/* Info */}
      <div className="flex items-end justify-between gap-6">
        <div>
          <h3 className="text-2xl font-black tracking-tighter uppercase">
            {project.title}
          </h3>
          <p className="text-muted-foreground">{project.desc}</p>
        </div>

        <Button
          variant="outline"
          className="font-bold bg-transparent shrink-0 hover:bg-transparent"
          onClick={(e) => {
            // مهم: منع انتشار الحدث حتى لا يفعّل onClick الخاص بالـ card root
            e.stopPropagation();
            navigateToPreview(project.url);
          }}
        >
          Preview
        </Button>
      </div>
      </>
  );
}
