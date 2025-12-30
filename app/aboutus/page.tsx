import { Button } from "@/components/ui/button"
import {
  Zap,
  Bot,
  Globe,
  ShieldCheck,
  Users,
  ArrowRight,
} from "lucide-react"
import Link from "next/link"

export default function AboutPage() {

  return (
    <div className="flex flex-col pt-15">
        {/* ================= Header ================= */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">
            About SWITCH
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            We are a digital studio focused on building scalable web platforms,
            intelligent automation, and growth-driven marketing systems for modern businesses.
          </p>
        </div>
      </section>

      {/* ================= Who We Are ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Who we are
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We are a small, high-impact team of engineers, designers, and strategists
              obsessed with performance, clarity, and automation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our approach is simple: remove complexity, automate what can be automated,
              and design systems that scale without breaking.
            </p>
          </div>

          <div className="border bg-background p-10 space-y-6">
            <Stat label="Founded" value="2024" />
            <Stat label="Core Focus" value="Web • Marketing • AI" />
            <Stat label="Projects Delivered" value="40+" />
            <Stat label="Operating Mode" value="Remote / Global" />
          </div>

        </div>
      </section>

      {/* ================= What We Believe ================= */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-16">
            Our philosophy
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <Principle
              icon={<Zap className="h-6 w-6" />}
              title="Speed matters"
              desc="Fast execution beats perfect planning."
            />
            <Principle
              icon={<Bot className="h-6 w-6" />}
              title="Automate everything"
              desc="If a human repeats it, a machine should do it."
            />
            <Principle
              icon={<Globe className="h-6 w-6" />}
              title="Build for scale"
              desc="Every system should grow without friction."
            />
            <Principle
              icon={<ShieldCheck className="h-6 w-6" />}
              title="Security first"
              desc="Trust is built through strong foundations."
            />
          </div>

        </div>
      </section>

      {/* ================= Services Snapshot ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">

          <div className="mb-16 max-w-3xl">
            <h2 className="text-4xl font-black tracking-tighter uppercase mb-6">
              What we do
            </h2>
            <p className="text-lg text-muted-foreground">
              SWITCH operates across three tightly integrated verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Web Platforms"
              desc="High-performance websites, dashboards, and internal systems built with modern stacks."
            />
            <ServiceCard
              title="Growth Marketing"
              desc="Full-funnel marketing systems focused on conversion, not vanity metrics."
            />
            <ServiceCard
              title="AI Automation"
              desc="Custom AI agents and workflows that eliminate manual operations."
            />
          </div>

        </div>
      </section>

      {/* ================= Team Mindset ================= */}
      <section className="py-24 border-t bg-muted/10">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="space-y-6">
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Built like a team, not an agency
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We work closely with founders, operators, and technical teams.
              No layers. No account managers. Just direct execution.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every project is treated as a long-term system, not a one-off delivery.
            </p>
          </div>

          <div className="border bg-background p-10 space-y-6">
            <InfoLine icon={<Users className="h-4 w-4" />} text="Founder-led execution" />
            <InfoLine icon={<Users className="h-4 w-4" />} text="Direct communication" />
            <InfoLine icon={<Users className="h-4 w-4" />} text="No outsourcing" />
            <InfoLine icon={<Users className="h-4 w-4" />} text="Long-term partnerships" />
          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter uppercase mb-8">
            Let’s build something that lasts.
          </h2>

          <p className="text-lg text-muted-foreground mb-12">
            If you’re looking for more than just a website — we should talk.
          </p>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-14 font-black uppercase tracking-widest">
                Start a conversation
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </Link>
        </div>
      </section>

    </div>
  )
}

/* ================= Helpers ================= */

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b pb-4">
      <span className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="font-black">{value}</span>
    </div>
  )
}

function Principle({ icon, title, desc }: any) {
  return (
    <div className="space-y-4">
      <div className="h-12 w-12 flex items-center justify-center border border-background/30">
        {icon}
      </div>
      <h3 className="text-xl font-black uppercase tracking-tighter">
        {title}
      </h3>
      <p className="text-background/60">
        {desc}
      </p>
    </div>
  )
}

function ServiceCard({ title, desc }: any) {
  return (
    <div className="border p-8 hover:border-foreground transition">
      <h3 className="text-2xl font-black tracking-tighter uppercase mb-4">
        {title}
      </h3>
      <p className="text-muted-foreground">
        {desc}
      </p>
    </div>
  )
}

function InfoLine({ icon, text }: any) {
  return (
    <div className="flex items-center gap-3 text-sm">
      {icon}
      <span className="font-medium">{text}</span>
    </div>
  )
}
