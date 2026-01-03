import { motion } from "framer-motion";
import { ScrollReveal, AnimatedCounter } from "./ScrollReveal";
import { PixelIcon } from "./PixelIcons";

const stats = [
  { label: "Years Training", value: 5, icon: "trophy" as const },
  { label: "Projects Built", value: 50, suffix: "+", icon: "code" as const },
  { label: "Total Commits", value: 2000, suffix: "+", icon: "lightning" as const },
  { label: "PRs Merged", value: 300, suffix: "+", icon: "dumbbell" as const },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-primary">&lt;</span>
            ABOUT_ME
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">// Building strength in code...</p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {/* Bio */}
          <ScrollReveal direction="left">
            <div className="pixel-card">
              <div className="flex items-center gap-3 mb-6">
                <PixelIcon icon="dumbbell" className="text-primary" animate />
                <h3 className="font-pixel text-sm text-primary">BIO</h3>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Hey! I'm a passionate full-stack developer who treats coding like a workout routine – consistent,
                intense, and always pushing for that next PR (Pull Request, obviously 😉).
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                I specialize in building scalable web applications with modern technologies. When I'm not crushing bugs,
                you'll find me crushing actual weights at the gym.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in clean code, continuous improvement, and the power of
                <span className="text-primary font-semibold"> caffeine + determination</span>.
              </p>

              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {["React", "TypeScript", "Node.js", "Python", "AWS"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono border border-primary/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
