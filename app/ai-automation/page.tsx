"use client"

import { useI18n } from "@/components/i18n-context"
import { Button } from "@/components/ui/button"
import { Bot, Cpu, BarChart3, ShieldCheck, Mail } from "lucide-react"

export default function AIAutomationPage() {
  const { t } = useI18n()

  const useCases = [
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Automation",
      desc: "Automatically categorize, draft, and respond to common inquiries.",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Data Analysis",
      desc: "Turn raw spreadsheets into actionable visual insights instantly.",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Customer Support",
      desc: "24/7 intelligent agents that resolve issues without human intervention.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8" />,
      title: "Risk Monitoring",
      desc: "Real-time threat detection and automated security protocols.",
    },
  ]

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl uppercase mb-6">
            {t("ai_automation")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Leverage the power of autonomous agents and intelligent workflows to eliminate repetitive tasks and scale
            your output exponentially.
          </p>
        </div>
      </section>

      {/* What is AI Automation */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-foreground text-background p-12 flex flex-col justify-center">
              <Cpu className="h-16 w-16 mb-8" />
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">Intelligence by Design.</h2>
              <p className="text-lg opacity-60 leading-relaxed">
                AI Automation is more than just scripts. It's the implementation of autonomous systems that learn,
                adapt, and execute complex business logic at a speed and scale impossible for humans.
              </p>
            </div>
            <div className="space-y-8">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">The Advantage</p>
              <h3 className="text-3xl font-black tracking-tighter uppercase">Why Switch to Autonomous?</h3>
              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 60%",
                  "Eliminate human error in critical workflows",
                  "Free your team for high-value creative work",
                  "Scale operations without increasing headcount",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="h-2 w-2 bg-foreground" />
                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">Implementation Spheres</h2>
            <p className="text-muted-foreground max-w-xl">
              From back-office operations to front-end customer interaction, AI can be integrated across every layer of
              your business.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, i) => (
              <div
                key={i}
                className="border bg-background p-8 group hover:bg-foreground hover:text-background transition-all"
              >
                <div className="mb-6 opacity-40 group-hover:opacity-100">{useCase.icon}</div>
                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground group-hover:text-background/60">{useCase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / CTA Section */}
      <section className="py-24 border-y">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase">Ready to automate?</h2>
            <p className="text-muted-foreground text-lg">
              Our AI implementation packages start from <span className="text-foreground font-black">$1,999/mo</span>.
              Custom enterprise solutions are available upon request.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-14 px-12 font-black uppercase tracking-widest">
                Get a Free Audit
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-12 font-black uppercase tracking-widest bg-transparent"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
