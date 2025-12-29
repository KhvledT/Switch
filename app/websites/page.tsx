"use client"

import { useI18n } from "@/components/i18n-context"
import { Button } from "@/components/ui/button"
import { Layers, Monitor, Phone, Tablet } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function WebsitesPage() {
  const { t } = useI18n()
  const router = useRouter()

  const projects = [
    {
      title: "Alpha Everlane",
      desc: "A sleek, modern e-commerce platform for sustainable fashion.",
      url: "https://brand-e-commerce-two.vercel.app/",
    },
    {
      title: "Pharmacy E-Commerce",
      desc: "A user-friendly online store for pharmaceutical products.",
      url: "https://pharmacy-e-commerce.vercel.app/",
    },
    {
      title: "Furniture E-Commerce",
      desc: "A modern online store for furniture and home decor.",
      url: "https://furniture-e-commerce-sandy.vercel.app/",
    },
    {
      title: "Electronics E-Commerce",
      desc: "A cutting-edge platform for electronics and gadgets.",
      url: "https://electronics-e-commerce-seven.vercel.app/",
    },
    {
      title: "Artist Portfolio",
      desc: "A modern portfolio website for an artist.",
      url: "https://artist-portfolio-e.netlify.app/",
    },
    {
      title: "Lawyer Portfolio",
      desc: "A professional portfolio website for a lawyer.",
      url: "http://lawyer-portfolio-e.netlify.app/",
    },
    {
      title: "Doctor Portfolio",
      desc: "A professional portfolio website for a doctor.",
      url: "https://doctor-portfolio-e.netlify.app/",
    },
  ]

  const templates = [
    { type: "Hero Section", name: "Blackout Hero" },
    { type: "Feature Section", name: "Bento Grid v2" },
    { type: "Pricing Page", name: "Clean Tier" },
    { type: "Contact Form", name: "Minimal Send" },
    { type: "Footer", name: "Brutalist Base" },
    { type: "Navigation", name: "Blur Nav" },
  ]

  const navigateToPreview = (url: string) => {
    router.push(`/webiframe?url=${encodeURIComponent(url)}`)
  }

  return (
    <div className="flex flex-col pt-15">
      {/* ================= Hero ================= */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-6">
            Websites
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore real-world projects built for clients, or unlock reusable website templates you can own and use
            without limits.
          </p>
        </div>
      </section>

      {/* ================= Client Projects ================= */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              Client Projects
            </p>
            <h2 className="text-4xl font-black tracking-tighter uppercase">
              Real websites. Real businesses.
            </h2>
            <p className="mt-4 text-muted-foreground">
              These projects are showcased for demonstration purposes and reflect real production-ready builds.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
            {projects.map((project, i) => (
              <div
                key={i}
                onClick={() => navigateToPreview(project.url)}
                className="group cursor-pointer space-y-4"
              >
                {/* Preview */}
                <div className="aspect-video relative overflow-hidden border bg-muted transition-colors group-hover:border-foreground">
                  <Image
                    width={600}
                    height={400}
                    src={`https://image.thum.io/get/width/1200/${project.url}`}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
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

                {/* Info */}
                <div className="flex items-end justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-black tracking-tighter uppercase">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.desc}
                    </p>
                  </div>

                  <Button
                    variant="outline"
                    className="font-bold bg-transparent shrink-0"
                    onClick={(e) => {
                      e.stopPropagation()
                      navigateToPreview(project.url)
                    }}
                  >
                    Build Similar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Transition ================= */}
      <section className="py-20 border-t border-b bg-muted/10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h3 className="text-3xl font-black tracking-tighter uppercase mb-4">
            Want something faster?
          </h3>
          <p className="text-muted-foreground text-lg">
            Skip the custom build and start with professionally designed templates you can reuse endlessly.
          </p>
        </div>
      </section>

      {/* ================= Templates ================= */}
      <section className="bg-foreground text-background py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black tracking-tighter sm:text-5xl uppercase mb-4">
                Website Templates — Unlimited License
              </h2>
              <p className="text-background/60 text-lg">
                Pay once. Use any template. Unlimited personal or client projects. Lifetime updates included.
              </p>
            </div>

            <div className="text-right">
              <p className="text-xs uppercase font-bold tracking-widest text-background/40 mb-2">
                One-time payment
              </p>
              <div className="text-5xl font-black tracking-tighter">$499</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {templates.map((template, i) => (
              <div
                key={i}
                className="group aspect-square border border-background/20 p-6 flex flex-col justify-between cursor-pointer transition-all hover:bg-background hover:text-foreground"
              >
                <div className="p-2 w-fit bg-background/10 group-hover:bg-foreground/10">
                  <Layers className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 group-hover:opacity-100">
                    {template.type}
                  </p>
                  <p className="font-black text-sm uppercase">
                    {template.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Value bullets */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-background/70">
            <div>✔ Unlimited usage — no per-site limits</div>
            <div>✔ Lifetime access & future templates</div>
            <div>✔ No subscriptions or hidden fees</div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-background text-foreground hover:bg-background/90 font-black px-14 h-14 uppercase">
              Unlock Templates
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
