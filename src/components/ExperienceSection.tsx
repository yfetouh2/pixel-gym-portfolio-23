import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface Experience {
  company: string;
  role: string;

  period: string;

  achievements: string[];

  tech: string[];
}

const experiences: Experience[] = [
  {
    company: "Department Of National Defense",
    role: "Student Programmer",
    period: "September 2023 - April 2024",
    achievements: [
      "Developed a Cybersecurity tool called Security Onion on a virtual machine to monitor network traffic",
      "Set up Ansible on a virtual machine to be able to complete automation tasks like being able to create dockercontainers within a playbook",
      "Worked with Cisco Embedded Event Manager to change an Ip Address of the internet default gateway andinterface of a router.",
      "Used Wireshark in the SANS Holiday Hack Challenge to view the content of a suspicious activity and to identifya series of network traffic",
    ],
    tech: ["Ansible", "Docker", "Wireshark", "Security Onion"],
  },
  {
    company: "StartupFlex",
    role: "Full-Stack Developer",
    period: "2020 - 2022",
    achievements: [
      "Designed and imple",
      "Built CI/CD pipeline reducing deployment time by 80%",
      "Mentored 3 junior developers",
    ],
    tech: ["Vue.js", "Python", "MongoDB", "Docker"],
  },
  {
    company: "CodeForge Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    achievements: [
      "Delivered 20+ client projects on time and budget",
      "Improved site performance scores by average of 40%",
      "Created reusable component library",
    ],
    tech: ["React", "TypeScript", "SCSS", "GraphQL"],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-accent">&lt;</span>
            EXPERIENCE
            <span className="text-accent">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">// Career gains timeline 📈</p>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-border md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative mb-12 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`}
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-0 md:left-auto top-0 w-4 h-4 bg-primary border-4 border-background md:-translate-x-1/2"
                style={{
                  [index % 2 === 0 ? "right" : "left"]: "-8px",
                  ...(index % 2 !== 0 && { left: "-8px" }),
                }}
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
              />

              {/* Content card */}
              <div className="pixel-card ml-8 md:ml-0">
                {/* Period badge */}
                <div className="inline-block mb-3 px-3 py-1 bg-primary/10 text-primary font-pixel text-[10px] border border-primary/30">
                  {exp.period}
                </div>

                <h3 className="font-pixel text-sm text-primary mb-1">{exp.role}</h3>
                <p className="text-muted-foreground font-semibold mb-3">@ {exp.company}</p>

                <p className="text-muted-foreground text-sm mb-4">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-4">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <span className="text-accent mt-1">▸</span>
                      <span className="text-muted-foreground">{achievement}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-secondary text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
