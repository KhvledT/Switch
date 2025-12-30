"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


import { CheckCircle2 } from "lucide-react"
import { useState } from "react"

export default function contactForm() {
const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

    return (
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
                    Submit
                  </Button>
                </form>
              )}
            </div>
  )
}
