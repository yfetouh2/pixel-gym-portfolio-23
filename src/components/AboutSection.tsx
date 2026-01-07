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
                Hey! My Name is Yousssef Abou El Fetouh and I’m a Computer Science graduate from Dalhousie University
                based in Halifax, Nova-Scota, with hands-on experience in software development, cybersecurity, and
                systems automation. I enjoy building practical, user-focused applications and working with technologies
                that solve real-world problems—from mobile apps to network security tools. I was born from Egypt and
                moved to Canada when I was four years old and I grew up playing soccer and developed a strong passion
                for video games, which I showcased through content creation on my YouTube channel. Training at the gym
                is a passion of mine and it inspired a fitness project I’ve developed and continues to drive my interest
                in building more.I treat coding like a workout routine – consistent and intense.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I believe in clean code, continuous improvement, and the power of
                <span className="text-primary font-semibold"> caffeine + determination</span>.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
