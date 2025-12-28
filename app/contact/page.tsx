"use client"

import type React from "react"

import { useI18n } from "@/components/i18n-context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  const { t } = useI18n()
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="flex flex-col">
      {/* Header Section */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">{t("contact")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Start the switch. Reach out to our team to discuss your next digital evolution.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-12">
              <div className="space-y-6">
                <h2 className="text-4xl font-black tracking-tighter uppercase">Get in touch.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you have a specific project in mind or just want to explore the possibilities of AI and modern
                  web design, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-foreground text-background p-3">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                    <p className="text-xl font-bold">hello@switch.io</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-foreground text-background p-3">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                    <p className="text-xl font-bold">+1 (555) 000-SWITCH</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-foreground text-background p-3">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground mb-1">Studio</p>
                    <p className="text-xl font-bold">123 Digital Ave, Cyber City</p>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-muted border grid-pattern" />
            </div>

            {/* Contact Form */}
            <div className="border bg-background p-8 md:p-12">
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                  <CheckCircle2 className="h-20 w-20 text-foreground" />
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black tracking-tighter uppercase">Message Sent.</h3>
                    <p className="text-muted-foreground">
                      Our team will review your request and get back to you within 24 hours.
                    </p>
                  </div>
                  <Button variant="outline" onClick={() => setIsSubmitted(false)} className="font-bold bg-transparent">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Name</label>
                    <Input required placeholder="Your Name" className="h-12 rounded-none border-foreground/20" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="email@example.com"
                      className="h-12 rounded-none border-foreground/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Service Type
                    </label>
                    <Select required>
                      <SelectTrigger className="h-12 rounded-none border-foreground/20">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="websites">Websites</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="ai">AI Automation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <Textarea
                      required
                      placeholder="Tell us about your project"
                      className="min-h-[150px] rounded-none border-foreground/20"
                    />
                  </div>

                  <Button type="submit" className="w-full h-14 font-black uppercase tracking-widest text-lg">
                    {t("submit")}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
