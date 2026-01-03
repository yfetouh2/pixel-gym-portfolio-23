import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 95, category: "Frontend", color: "neon-blue" },
  { name: "TypeScript", level: 90, category: "Frontend", color: "neon-blue" },
  { name: "Tailwind CSS", level: 92, category: "Frontend", color: "neon-blue" },
  { name: "Vue.js", level: 75, category: "Frontend", color: "neon-blue" },
  // Backend
  { name: "Node.js", level: 88, category: "Backend", color: "neon-green" },
  { name: "Python", level: 85, category: "Backend", color: "neon-green" },
  { name: "PostgreSQL", level: 82, category: "Backend", color: "neon-green" },
  { name: "GraphQL", level: 78, category: "Backend", color: "neon-green" },
  // Tools
  { name: "Git / GitHub", level: 95, category: "Tools", color: "neon-purple" },
  { name: "Docker", level: 80, category: "Tools", color: "neon-purple" },
  { name: "AWS", level: 75, category: "Tools", color: "neon-purple" },
  { name: "CI/CD", level: 85, category: "Tools", color: "neon-purple" },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="font-pixel text-xs text-muted-foreground">
          {skill.level}%
        </span>
      </div>
      <div className="progress-bar-gym">
        <motion.div
          className={`progress-bar-fill bg-${skill.color}`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, delay: index * 0.05, ease: "easeOut" }}
          style={{
            background: skill.color === "neon-blue" 
              ? "linear-gradient(90deg, hsl(199 89% 48%), hsl(199 89% 60%))"
              : skill.color === "neon-green"
              ? "linear-gradient(90deg, hsl(168 84% 42%), hsl(168 84% 55%))"
              : "linear-gradient(90deg, hsl(262 83% 58%), hsl(262 83% 70%))"
          }}
        />
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const categories = ["Frontend", "Backend", "Tools"];

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-accent">&lt;</span>
            SKILL_STATS
            <span className="text-accent">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">
            // Strength levels trained 💪
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <ScrollReveal key={category} delay={catIndex * 0.1}>
              <div className="pixel-card h-full">
                <h3 className="font-pixel text-sm mb-6 flex items-center gap-2">
                  <span className="text-2xl">
                    {category === "Frontend" ? "🎨" : category === "Backend" ? "⚙️" : "🛠️"}
                  </span>
                  {category}
                </h3>
                <div className="space-y-5">
                  {skills
                    .filter((s) => s.category === category)
                    .map((skill, index) => (
                      <SkillBar key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Fun achievement badges */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {[
              { emoji: "🏆", label: "Clean Code Champion" },
              { emoji: "🏋️", label: "Heavy Lifter" },
              { emoji: "🔥", label: "Bug Crusher" },
              { emoji: "💪", label: "Code Athlete" },
            ].map((badge) => (
              <motion.div
                key={badge.label}
                className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-border"
                whileHover={{ scale: 1.05, borderColor: "hsl(var(--primary))" }}
              >
                <span className="text-xl">{badge.emoji}</span>
                <span className="font-pixel text-xs">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
