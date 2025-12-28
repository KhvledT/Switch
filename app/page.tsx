"use client"
import { useI18n } from "@/components/i18n-context"
import Beams from "@/components/reactBits/Beams"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Search, Globe, Zap, Megaphone, Bot } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react" // Added Suspense import
import Image from "next/image"
import about from "@/assets/imgs/about.jpeg"
import DomainSection from "@/components/domainSection"

function HomeContent() {
  const { t } = useI18n()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center grid-pattern">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-10">
        <Beams
          beamWidth={2}
          beamHeight={15}
          beamNumber={12}
          lightColor="#ffffff"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={200}
        />
      </div>
        <div className="absolute inset-0 bg-black pointer-events-none" />
        <div className="container relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-6 text-5xl font-black tracking-tighter sm:text-7xl uppercase">
            {t("hero_title")}
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">{t("hero_desc")}</p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-14 px-10 text-lg font-bold">
              {t("get_started")} <ArrowRight className="ml-2 h-5 w-4" />
            </Button>
            <Link href="/websites">
              <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold bg-transparent">
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Search Section */}
      <DomainSection />

      {/* About Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">About SWITCH</p>
              <h2 className="mb-6 text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl uppercase">
                Redefining the digital boundary.
              </h2>
              <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
                We are a collective of designers, engineers, and strategists dedicated to creating seamless digital
                experiences. Our approach combines brutalist aesthetics with high-performance technology to deliver
                results that stand out.
              </p>
              <Button variant="outline" className="font-bold bg-transparent">
                Learn More About Us
              </Button>
            </div>
            <div>
              <Image
                src= {about}
                alt="About SWITCH"
                width={600}
                height={400}
                className="rounded-md border border-background/20 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl uppercase">{t("services")}</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: <Zap className="h-10 w-10" />,
                title: t("websites"),
                desc: "Custom high-performance websites built for scale.",
                link: "/websites",
              },
              {
                icon: <Megaphone className="h-10 w-10" />,
                title: t("marketing"),
                desc: "Data-driven marketing campaigns that convert.",
                link: "/marketing",
              },
              {
                icon: <Bot className="h-10 w-10" />,
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
                <h3 className="mb-4 text-2xl font-black tracking-tighter uppercase">{service.title}</h3>
                <p className="mb-6 text-background/60 group-hover:text-foreground/60">{service.desc}</p>
                <div className="flex items-center text-sm font-bold uppercase tracking-widest">
                  Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  )
}
