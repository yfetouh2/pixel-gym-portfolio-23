import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "One of the most dedicated developers I've worked with. Treats every project like a personal best to beat.",
    author: "Sarah Chen",
    role: "Engineering Manager",
    company: "TechGym Corp",
  },
  {
    quote: "Incredible problem-solving skills and always delivers clean, maintainable code. A true code athlete!",
    author: "Marcus Johnson",
    role: "CTO",
    company: "StartupFlex",
  },
  {
    quote: "Their attention to detail and commitment to quality is unmatched. Every sprint feels like a championship game.",
    author: "Emily Rodriguez",
    role: "Product Lead",
    company: "CodeForge Agency",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-primary">&lt;</span>
            REVIEWS
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">
            // What the squad says 🗣️
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className="pixel-card relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 p-2 bg-primary text-primary-foreground">
                <Quote className="h-4 w-4" />
              </div>

              {/* Quote text */}
              <p className="text-muted-foreground italic mb-6 pt-4">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  {/* Pixel avatar placeholder */}
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-pixel text-xs">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>

              {/* 5-star rating */}
              <div className="mt-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="text-gym-gold"
                  >
                    ⭐
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
