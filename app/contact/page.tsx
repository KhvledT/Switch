import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import SwitchLogo from "@/assets/imgs/about.jpeg"
import ContactForm from "@/components/pagesComponents/contactPage/contactForm"

export default function ContactPage() {
  

  return (
    <div className="flex flex-col pt-15">
      {/* Header Section */}
      <section className="border-b py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-black tracking-tighter sm:text-7xl uppercase mb-4">
            Contact
          </h1>
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

              <Image
                src={SwitchLogo}
                alt="About SWITCH"
                className="rounded-md border border-background/20 shadow-lg w-full max-w-lg h-auto"
                priority={false}
              />

            </div>

            {/* Contact Form */}
            <ContactForm />
            
          </div>
        </div>
      </section>
    </div>
  )
}
