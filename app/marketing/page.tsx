"use client"

import { useI18n } from "@/components/i18n-context"
import { Button } from "@/components/ui/button"
import { Bot, Check, Megaphone, Sparkles, TrendingUp, Users } from "lucide-react"
import { useState } from "react"

export default function MarketingPage() {
  const { t } = useI18n()

  const [goal, setGoal] = useState<string | null>(null)
  const [query, setQuery] = useState("")

  const plans = [
    {
      title: "Growth Accelerator",
      desc: "Perfect for startups looking to establish their digital footprint.",
      duration: "3 Months",
      price: "$2,499",
      features: ["Social Media Management", "Content Creation", "Basic SEO", "Weekly Reports"],
    },
    {
      title: "Market Leader",
      desc: "Comprehensive strategy for established brands scaling up.",
      duration: "6 Months",
      price: "$5,999",
      features: [
        "Full Funnel Optimization",
        "Influencer Outreach",
        "Professional Photography",
        "Paid Ads Management",
        "Bi-weekly Strategy Calls",
      ],
      popular: true,
    },
    {
      title: "Dominion Suite",
      desc: "Enterprise-level market domination and total brand refresh.",
      duration: "12 Months",
      price: "$12,000",
      features: ["360 Degree Marketing", "Video Production", "International SEO", "Dedicated Manager", "Event Support"],
    },
  ]

  const funnelGoals = [
    "Get more leads",
    "Increase sales",
    "Grow brand awareness",
    "Automate marketing",
  ]

  const quickStarts = [
    "I want more Instagram customers",
    "I want to sell more online",
    "I need automated ads",
    "I want a full marketing strategy",
  ]

  return (
    <div className="flex flex-col pt-15">

      {/* ================= Header ================= */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">
            {t("marketing")}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Strategic campaigns engineered for measurable, scalable growth.
          </p>
        </div>
      </section>

      {/* ================= Featured Offers ================= */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-2">
              Featured solutions
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Proven marketing systems trusted by growing brands.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative flex flex-col border p-8 transition-all hover:border-foreground ${
                  plan.popular ? "bg-muted/10 border-foreground/50 shadow-xl" : "bg-background"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-8 bg-foreground text-background px-3 py-1 text-[10px] font-black uppercase tracking-widest">
                    Most Requested
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                  <span className="text-xs font-bold uppercase text-muted-foreground">
                    / {plan.duration}
                  </span>
                </div>

                <div className="flex-grow space-y-4 mb-8">
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    What’s included
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full font-black uppercase h-12">
                  Select Solution
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Decision Break ================= */}
      <section className="py-16 border-b bg-muted/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground">
            Not sure a package fits your business?
          </p>
        </div>
      </section>

      {/* ================= Direction Selector ================= */}
      <section className="py-20 border-b">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Getting Started
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Choose your direction
            </h2>
            <p className="mt-4 text-muted-foreground">
              This helps us understand your goal before creating a personalized strategy.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Get more leads", icon: Users },
              { title: "Increase sales", icon: TrendingUp },
              { title: "Build brand awareness", icon: Megaphone },
              { title: "Automate marketing", icon: Bot },
            ].map((item) => {
              const Icon = item.icon

              return (
                <button
                  key={item.title}
                  onClick={() => setQuery(item.title)}
                  className="group border p-8 text-left transition-all hover:bg-foreground hover:text-background"
                >
                  <Icon className="h-10 w-10 mb-6 opacity-60 group-hover:opacity-100" />
                  <h3 className="text-xl font-black tracking-tighter uppercase">
                    {item.title}
                  </h3>
                </button>
              )
            })}
          </div>
        </div>
      </section>



      {/* ================= AI Assistant ================= */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="border bg-background p-10">

            {/* Header */}
            <div className="mb-10">
              <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground">
                AI Assistant
              </p>
              <h2 className="text-4xl font-black tracking-tighter uppercase">
                Describe your objective
              </h2>
            </div>

            {/* Input + Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. I own a café and want more Instagram customers"
                className="flex-1 border bg-background px-5 py-4 text-lg outline-none focus:border-foreground"
              />

              <Button
                size="lg"
                className="h-14 px-8 font-black uppercase tracking-widest"
                disabled={!query.trim()}
              >
                Ask AI
              </Button>
            </div>

            {/* Quick Starts */}
            <div className="mb-12">
              <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
                Quick starts
              </p>
              <div className="flex flex-wrap gap-3">
                {quickStarts.map((s) => (
                  <button
                    key={s}
                    onClick={() => setQuery(s)}
                    className="border px-4 py-2 text-sm font-bold uppercase hover:bg-foreground hover:text-background transition-all"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="border-t my-10" />

            {/* AI Recommendation */}
            <div className="text-center">
              <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
                AI Recommendation
              </h3>

              <p className="text-muted-foreground max-w-md mx-auto">
                Your personalized marketing recommendation will appear here once we analyze your objective.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
