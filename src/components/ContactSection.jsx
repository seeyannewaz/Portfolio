import { SectionHeading } from "@/components/SectionHeading";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/25 border-t border-border/50">
      <div className="container mx-auto max-w-5xl">
        <SectionHeading eyebrow="// handshake">
          Get In <span className="text-primary">Touch</span>
        </SectionHeading>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        <div className="flex flex-col items-center space-y-8">
          <h3 className="text-xl font-semibold font-mono text-primary/90 tracking-wide uppercase text-sm">
            Contact channels
          </h3>

          <div className="grid w-full max-w-2xl gap-5 sm:grid-cols-1 md:grid-cols-3">
            <div className="glass-card rounded-2xl p-6 text-center noise-overlay card-hover border border-border/70">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Mail className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm mb-1">Email</h4>
              <span className="text-muted-foreground text-sm break-all">seeyannewaz@gmail.com</span>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center noise-overlay card-hover border border-border/70">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Phone className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm mb-1">Phone</h4>
              <span className="text-muted-foreground text-sm">+1 (945) 400-7069</span>
            </div>

            <div className="glass-card rounded-2xl p-6 text-center noise-overlay card-hover border border-border/70 md:col-span-1">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <MapPin className="h-6 w-6" />
              </div>
              <h4 className="font-semibold text-sm mb-1">Location</h4>
              <span className="text-muted-foreground text-sm">Richardson, TX, USA</span>
            </div>
          </div>

          <div className="pt-6 text-center w-full">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Social graph
            </h4>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://www.linkedin.com/in/seeyan-newaz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground hover:text-primary hover:border-primary/45 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/seeyan_236/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground hover:text-primary hover:border-primary/45 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.facebook.com/seeyan.newaz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/50 text-foreground hover:text-primary hover:border-primary/45 hover:shadow-[0_0_24px_hsl(var(--primary)/0.2)] transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
