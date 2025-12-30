import { Button } from "@/components/ui/button"
import { Bot, Cpu, BarChart3, ShieldCheck, Mail } from "lucide-react"

export default function AIAutomationPage() {

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
    <div className="flex flex-col pt-15">

      {/* ================= Header ================= */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">
            Ai Automation
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Leverage autonomous agents and intelligent workflows to eliminate repetitive work and scale efficiently.
          </p>
        </div>
      </section>

      {/* ================= What is AI Automation ================= */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="aspect-square bg-foreground text-background p-12 flex flex-col justify-center">
              <Cpu className="h-16 w-16 mb-8" />
              <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
                Intelligence by Design.
              </h2>
              <p className="text-lg opacity-60 leading-relaxed">
                AI Automation replaces manual processes with systems that learn, adapt, and execute business logic
                faster and more accurately than humans.
              </p>
            </div>

            <div className="space-y-8">
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                The Advantage
              </p>
              <h3 className="text-3xl font-black tracking-tighter uppercase">
                Why switch to autonomous systems?
              </h3>

              <div className="space-y-6">
                {[
                  "Reduce operational costs by up to 60%",
                  "Eliminate human error in workflows",
                  "Free your team for strategic work",
                  "Scale without hiring more staff",
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

      {/* ================= Problems ================= */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
            The Problem
          </p>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">
            Manual work blocks growth.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              "Teams wasting hours on repetitive tasks",
              "Slow response times and bottlenecks",
              "Costly human errors",
              "Scaling limited by manpower",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="h-2 w-2 mt-2 bg-foreground" />
                <p className="text-lg font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Process ================= */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-background/60">
            Our Process
          </p>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-16">
            From workflow to automation.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {[
              { step: "01", title: "Audit", desc: "Analyze existing workflows." },
              { step: "02", title: "Design", desc: "Architect automation logic." },
              { step: "03", title: "Build", desc: "Develop and integrate AI." },
              { step: "04", title: "Optimize", desc: "Monitor and improve." },
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

      {/* ================= Use Cases ================= */}
      <section className="py-24 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-4">
              Implementation Spheres
            </h2>
            <p className="text-muted-foreground max-w-xl">
              AI automation can be embedded across every business function.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, i) => (
              <div
                key={i}
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Results ================= */}
      <section className="py-24 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {[
              { value: "60%", label: "Cost Reduction" },
              { value: "24/7", label: "Automation" },
              { value: "3x", label: "Speed Increase" },
              { value: "0", label: "Manual Errors" },
            ].map((item, i) => (
              <div key={i}>
                <h3 className="text-5xl font-black">{item.value}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Why Switch ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <p className="mb-4 text-xs font-black uppercase tracking-widest text-muted-foreground">
            Why SWITCH
          </p>
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-12">
            Real automation. Real results.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { title: "Custom AI Systems", desc: "Tailored to your business logic." },
              { title: "ROI Driven", desc: "Every solution is built for impact." },
              { title: "Secure & Private", desc: "Your data remains protected." },
              { title: "Scalable Architecture", desc: "Built to grow with you." },
            ].map((item, i) => (
              <div key={i} className="border p-8">
                <h3 className="text-xl font-black tracking-tighter uppercase mb-4">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black tracking-tighter uppercase mb-12 text-center">
            Common Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: "Will AI replace my team?",
                a: "No. AI removes repetitive work so teams focus on high-value tasks.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. We follow strict privacy and security standards.",
              },
              {
                q: "Do I need technical knowledge?",
                a: "No. We handle everything end-to-end.",
              },
              {
                q: "Can it scale with my business?",
                a: "Absolutely. Scalability is built-in.",
              },
            ].map((item, i) => (
              <div key={i} className="border-b pb-6">
                <h3 className="font-black uppercase mb-2">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 border-y">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Ready to automate?
            </h2>
            <p className="text-muted-foreground text-lg">
              AI automation packages start from{" "}
              <span className="text-foreground font-black">$1,999/mo</span>.
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
