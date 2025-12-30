import AskAI from "@/components/pagesComponents/marketingPage/AskAI";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function MarketingPage() {
  const plans = [
    {
      title: "Growth Accelerator",
      desc: "Perfect for startups looking to establish their digital footprint.",
      features: [
        "Social Media Management",
        "Content Creation",
        "Basic SEO",
        "Weekly Reports",
      ],
    },
    {
      title: "Market Leader",
      desc: "Comprehensive strategy for established brands scaling up.",
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
      features: [
        "360 Degree Marketing",
        "Video Production",
        "International SEO",
        "Dedicated Manager",
        "Event Support",
      ],
    },
  ];

  return (
    <div className="flex flex-col pt-15">
      {/* ================= Header ================= */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">
            Marketing
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
                  plan.popular
                    ? "bg-muted/10 border-foreground/50 shadow-xl"
                    : "bg-background"
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
                {/* 
                <div className="mb-8 flex items-baseline gap-2">
                  <span className="text-4xl font-black tracking-tighter">
                    {plan.price}
                  </span>
                  <span className="text-xs font-bold uppercase text-muted-foreground">
                    / {plan.duration}
                  </span>
                </div> */}

                <div className="flex-grow space-y-4 mb-8">
                  <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                    What’s included
                  </p>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact">
                  <Button className="w-full font-black uppercase h-12">
                    Select Solution
                  </Button>
                </Link>
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

      {/* ================= AI Assistant ================= */}
      <AskAI />
    </div>
  );
}
