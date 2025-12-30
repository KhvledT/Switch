"use client";

import { useI18n } from "@/components/i18n-context";
import Beams from "@/components/reactBits/Beams";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Megaphone, Bot } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import SwitchLogo from "@/assets/imgs/about.jpeg"
import DomainSection from "@/components/domainSection";
import CountUp from "@/components/reactBits/CountUp";

function HomeContent() {
  const { t } = useI18n();

  const stats = [
    { number: 50, suffix: "+", label: "Projects Delivered" },
    { number: 98, suffix: "%", label: "Client Satisfaction" },
    { number: 3, suffix: "x", label: "Performance Boost" },
    { number: 24, suffix: "/7", label: "Support & Monitoring" },
  ]



  return (
    <div className="flex flex-col">
      {/* ================= Hero Section ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          contain: "layout paint",
          willChange: "transform",
        }}
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

        <div className="container relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-4xl font-black text-white tracking-tighter sm:text-6xl md:text-7xl uppercase text-center">
            {t("hero_title")}
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-white/70 leading-relaxed text-center">
            {t("hero_desc")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 px-10 text-lg font-bold bg-white text-black hover:bg-gray-200 cursor-pointer">
              {t("get_websites")} <ArrowRight className="ml-2 h-5 w-4" />
            </Button>

            <Link href="/websites">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg font-bold bg-transparent border-white dark:border-white text-white dark:hover:bg-white dark:hover:text-black cursor-pointer" 
              >
                {t("get_marketing")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= Domain Search ================= */}
      <DomainSection />

      {/* ================= About ================= */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
            <div>
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

              <Button variant="outline" className="font-bold bg-transparent">
                Learn More About Us
              </Button>
            </div>

            <Image
              src={SwitchLogo}
              alt="About SWITCH"
              className="rounded-md border border-background/20 shadow-lg w-full h-auto"
              priority={false}
            />
          </div>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section className="bg-foreground text-background py-20 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-14 text-center text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
            {t("services")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-9 w-9" />,
                title: t("websites"),
                desc: "Custom high-performance websites built for scale.",
                link: "/websites",
              },
              {
                icon: <Megaphone className="h-9 w-9" />,
                title: t("marketing"),
                desc: "Data-driven marketing campaigns that convert.",
                link: "/marketing",
              },
              {
                icon: <Bot className="h-9 w-9" />,
                title: t("ai_automation"),
                desc: "Intelligent automation to streamline your workflow.",
                link: "/ai-automation",
              },
            ].map((service, i) => (
              <Link
                key={i}
                href={service.link}
                className="group border border-background/20 p-8 transition-all hover:bg-background hover:text-foreground"
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
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* ================= Why Choose Switch ================= */}
<section className="py-20 md:py-24 border-t border-border">
  <div className="container mx-auto px-4">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
        Why SWITCH
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
        Built to perform. Designed to convert.
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Performance First", desc: "Optimized for speed, SEO, and real users." },
        { title: "Modern Stack", desc: "Next.js, scalable architecture, clean code." },
        { title: "Business Focused", desc: "Design decisions driven by conversions." },
        { title: "Future Proof", desc: "Built to grow with your business." },
      ].map((item, i) => (
        <div
          key={i}
          className="border border-border p-8 transition-all hover:bg-foreground hover:text-background"
        >
          <h3 className="mb-4 text-xl font-black tracking-tighter uppercase">
            {item.title}
          </h3>
          <p className="text-muted-foreground group-hover:text-background/70">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= Process ================= */}
<section className="py-20 md:py-24 bg-foreground text-background">
  <div className="container mx-auto px-4">
    <div className="mb-16 max-w-3xl">
      <p className="mb-4 text-xs font-black uppercase tracking-widest text-background/60">
        Our Process
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
        From idea to impact.
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
      {[
        { step: "01", title: "Discover", desc: "Understand goals and users." },
        { step: "02", title: "Design", desc: "Bold UI with clear UX." },
        { step: "03", title: "Build", desc: "Scalable, high-performance code." },
        { step: "04", title: "Launch", desc: "Deploy, test, and optimize." },
      ].map((item, i) => (
        <div key={i}>
          <span className="text-sm font-black text-background/60">
            {item.step}
          </span>
          <h3 className="mt-3 mb-4 text-xl font-black tracking-tighter uppercase">
            {item.title}
          </h3>
          <p className="text-background/70">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= Stats ================= */}
<section className="py-20 md:py-24 border-t border-border">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
      {stats.map((item, i) => (
        <div key={i}>
          <h3 className="text-4xl md:text-5xl font-black">
            <CountUp
              from={0}
              to={item.number}
              duration={1.5}
              startWhen={true}
              className="count-up-text"
            />
            <span>{item.suffix}</span>
          </h3>

          <p className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>





{/* ================= Tech Stack ================= */}
<section className="py-20 md:py-24">
  <div className="container mx-auto px-4">
    <div className="mb-14 max-w-3xl">
      <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
        Technology
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
        Built with modern tools.
      </h2>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {["Next.js", "React", "Node.js", "Laravel", "SQL"].map((tech, i) => (
        <div
          key={i}
          className="border border-border p-4 text-center font-bold uppercase"
        >
          {tech}
        </div>
      ))}
    </div>
  </div>
</section>

{/* ================= Final CTA ================= */}
<section className="py-28 md:py-36 text-center bg-foreground text-background">
  <div className="container mx-auto px-4">
    <h2 className="mb-6 text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter uppercase">
      Let’s build something powerful.
    </h2>
    <p className="mx-auto mb-12 max-w-2xl text-base sm:text-lg text-background/70">
      Tell us about your project and we’ll turn it into a high-performance digital experience.
    </p>
    <Button size="lg" className="h-16 px-14 text-lg font-black uppercase">
      Start Your Project <ArrowRight className="ml-3 h-5 w-5" />
    </Button>
  </div>
</section>

    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}
