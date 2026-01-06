import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Message sent! 💪 (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { icon: Mail, href: "mailto:hello@example.com", label: "Email", color: "hover:text-primary" },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-accent">&lt;</span>
            CONTACT
            <span className="text-accent">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">// Let's train together 🏋️</p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollReveal direction="left">
            <form onSubmit={handleSubmit} className="pixel-card">
              <h3 className="font-pixel text-sm mb-6 text-primary">SEND MESSAGE</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 font-medium">Message *</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-background border-2 border-border focus:border-primary outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full pixel-btn bg-primary text-primary-foreground flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="h-4 w-4" />
                  SEND MESSAGE
                </motion.button>
              </div>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal direction="right">
            <div className="pixel-card h-full flex flex-col">
              <h3 className="font-pixel text-sm mb-6 text-accent">CONNECT</h3>

              <p className="text-muted-foreground mb-8">
                Ready to team up? Whether you have a project in mind, want to discuss opportunities, or just want to say
                hi – I'm always down for a good conversation!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:hello@example.com" className="hover:text-primary transition-colors">
                      hello@example.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-auto">
                <p className="font-pixel text-xs mb-4 text-muted-foreground">// Find me on:</p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background border-2 border-border text-muted-foreground transition-colors ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun CTA */}
              <motion.div
                className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-accent/10 border-l-4 border-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="font-pixel text-xs text-primary">💪 Current Status:</p>
                <p className="text-sm mt-1">Open to new opportunities and collaborations!</p>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
