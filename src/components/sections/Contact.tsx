import { FadeInView } from "../ui/FadeInView";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:contact@example.com", label: "Email" }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <FadeInView>
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
        </FadeInView>
        
        <FadeInView delay={0.2}>
          <p className="text-xl text-muted-foreground mb-8">
            I'm always open to new opportunities and collaborations.
          </p>
        </FadeInView>
        
        <FadeInView delay={0.4}>
          <div className="flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="icon"
                asChild
                className="hover:text-primary hover:border-primary transition-colors"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
