"use client"

import { useI18n } from "@/components/i18n-context"
import { Button } from "@/components/ui/button"
import { Check, Filter, SlidersHorizontal } from "lucide-react"

export default function MarketingPage() {
  const { t } = useI18n()

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

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">{t("marketing")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Strategic campaigns designed to amplify your message and drive measurable growth.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-12 lg:flex-row">
            {/* Sidebar Filters */}
            <aside className="w-full space-y-8 lg:w-64">
              <div className="flex items-center gap-2 border-b pb-4">
                <Filter className="h-4 w-4" />
                <h3 className="font-bold uppercase tracking-widest text-sm">Filters</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-black uppercase mb-4 text-muted-foreground">Price Range</h4>
                  <div className="space-y-2">
                    {["$0 - $2,500", "$2,500 - $7,500", "$7,500+"].map((range) => (
                      <label key={range} className="flex items-center gap-2 cursor-pointer group">
                        <div className="h-4 w-4 border rounded-none group-hover:border-foreground" />
                        <span className="text-sm">{range}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase mb-4 text-muted-foreground">Campaign Type</h4>
                  <div className="space-y-2">
                    {["One-time", "Monthly", "Annual"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer group">
                        <div className="h-4 w-4 border rounded-none group-hover:border-foreground" />
                        <span className="text-sm">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase mb-4 text-muted-foreground">Includes</h4>
                  <div className="space-y-2">
                    {["Photography", "Video", "Copywriting", "SEO"].map((item) => (
                      <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <div className="h-4 w-4 border rounded-none group-hover:border-foreground" />
                        <span className="text-sm">{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full font-bold bg-transparent">
                Reset Filters
              </Button>
            </aside>

            {/* Main Content */}
            <div className="flex-grow space-y-8">
              <div className="flex items-center justify-between border-b pb-4">
                <p className="text-sm text-muted-foreground">{plans.length} Packages Available</p>
                <Button variant="ghost" size="sm" className="font-bold uppercase tracking-widest text-[10px]">
                  Sort By: Relevance <SlidersHorizontal className="ml-2 h-3 w-3" />
                </Button>
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
                        Most Popular
                      </div>
                    )}
                    <div className="mb-8">
                      <h3 className="text-2xl font-black tracking-tighter uppercase mb-2">{plan.title}</h3>
                      <p className="text-sm text-muted-foreground">{plan.desc}</p>
                    </div>

                    <div className="mb-8 flex items-baseline gap-2">
                      <span className="text-4xl font-black tracking-tighter">{plan.price}</span>
                      <span className="text-xs font-bold uppercase text-muted-foreground">/ {plan.duration}</span>
                    </div>

                    <div className="flex-grow space-y-4 mb-8">
                      <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">Features</p>
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm">
                            <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className={`w-full font-black uppercase h-12 ${!plan.popular && "variant-outline"}`}>
                      Select Plan
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
