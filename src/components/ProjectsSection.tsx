import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "FitnessHun",
    description:
      "A comprehensive fitness tracking app with workout planning, food logging tracker, and TDEE Calculator (Total Daily Energy Expenditure).",
    image: "🏋️",
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "CodeArena",
    description: "Real-time competitive coding platform with live battles, leaderboards, and skill-based matchmaking.",
    image: "⚔️",
    tech: ["Next.js", "WebSocket", "MongoDB", "Docker"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "PixelQuest",
    description: "Retro-style RPG game built with web technologies. Features procedural dungeon generation.",
    image: "🎮",
    tech: ["TypeScript", "Canvas API", "Web Audio"],
    github: "#",
  },
  {
    title: "DevDash",
    description: "Developer productivity dashboard integrating GitHub, Jira, and Slack into one unified view.",
    image: "📊",
    tech: ["React", "GraphQL", "OAuth2"],
    github: "#",
    live: "#",
  },
  {
    title: "NutritionAI",
    description: "AI-powered meal planning and nutrition tracking with image recognition for food logging.",
    image: "🥗",
    tech: ["Python", "TensorFlow", "FastAPI", "React"],
    github: "#",
  },
  {
    title: "CloudSync",
    description: "Cross-platform file synchronization tool with end-to-end encryption and conflict resolution.",
    image: "☁️",
    tech: ["Rust", "React", "AWS S3", "WebRTC"],
    github: "#",
    live: "#",
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [selectedProject, setSelectedProject] = useState(false);

  const toggleModal = () => {
    setSelectedProject(!selectedProject);
  };

  return (
    <motion.div
      onClick={toggleModal}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className={`pixel-card group cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* Project Icon/Image */}
      <div className="text-6xl mb-4 transition-transform group-hover:scale-110">{project.image}</div>

      {/* Featured badge */}
      {project.featured && (
        <div className="inline-block mb-3 px-2 py-1 bg-gym-gold/20 text-gym-gold font-pixel text-[10px] border border-gym-gold">
          ⭐ FEATURED
        </div>
      )}

      {/* Title */}
      <h3 className="font-pixel text-sm mb-3 text-primary group-hover:neon-glow transition-all">{project.title}</h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tech?.map((tech) => (
          <span key={tech} className="px-2 py-1 bg-secondary text-xs font-mono text-muted-foreground">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-4 border-t border-border">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <Github className="h-4 w-4" />
            Code
          </motion.a>
        )}
        {project.live && (
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-accent transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink className="h-4 w-4" />
            Live
          </motion.a>
        )}
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="font-pixel text-xl sm:text-2xl text-center mb-4">
            <span className="text-primary">&lt;</span>
            PROJECTS
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 font-pixel text-xs">
            // Reps completed: {projects.length} 🏆
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 pixel-btn bg-card border-2 border-foreground"
              whileHover={{ scale: 1.02 }}
            >
              <Github className="h-4 w-4" />
              VIEW ALL ON GITHUB
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
