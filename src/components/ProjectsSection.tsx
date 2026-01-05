import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogDescription } from "@/components/ui/dialog";

// FitnessHub screenshots
import fitnesshub1 from "@/assets/fitnesshub-1.png";
import fitnesshub2 from "@/assets/fitnesshub-2.png";
import fitnesshub3 from "@/assets/fitnesshub-3.png";
import fitnesshub4 from "@/assets/fitnesshub-4.png";

// QuickCash screenshots
import quickcash1 from "@/assets/quickcash-1.png";
import quickcash2 from "@/assets/quickcash-2.png";
import quickcash3 from "@/assets/quickcash-3.png";
import quickcash4 from "@/assets/quickcash-4.png";
import quickcash5 from "@/assets/quickcash-5.png";
import quickcash6 from "@/assets/quickcash-6.png";

// Star Wars screenshots
import starwars1 from "@/assets/starwars-1.png";
import starwars2 from "@/assets/starwars-2.png";
import starwars3 from "@/assets/starwars-3.png";
import starwars4 from "@/assets/starwars-4.png";
import starwars5 from "@/assets/starwars-5.png";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  live?: string;
  featured?: boolean;
  images?: string[];
}

const projects: Project[] = [
  {
    title: "FitnessHub",
    description:
      "A comprehensive fitness tracking app with workout planning, food logging tracker, and TDEE Calculator (Total Daily Energy Expenditure).",
    image: fitnesshub1,
    tech: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
    github: "#",
    live: "#",
    featured: true,
    images: [fitnesshub1, fitnesshub2, fitnesshub3, fitnesshub4],
  },
  {
    title: "QuickCash",
    description:
      "mobile application as a team for users to find small paid work in their local area. The application allows users to sign in as an employer or employee. The application include several key factors like being able to identify the local area of the user (Google Map API) and integrating an online payment system (PayPal)",
    image: quickcash1,
    tech: ["Next.js", "WebSocket", "MongoDB", "Docker"],
    github: "#",
    live: "#",
    featured: true,
    images: [quickcash6, quickcash5, quickcash4, quickcash3, quickcash2, quickcash1],
  },
  {
    title: "Star Wars Social Networking Website",
    description:
      "As a Star Wars fan, I was inspired to build a simple social networking website that allows users to connect and share their interests within a Star Wars–themed environment",
    image: starwars1,
    tech: ["TypeScript", "Canvas API", "Web Audio"],
    github: "#",
    images: [starwars1, starwars2, starwars3, starwars4, starwars5],
  },
];

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onClick={onClick}
      className={`pixel-card group cursor-pointer ${project.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
    >
      {/* Project Thumbnail */}
      <div className="mb-4 overflow-hidden rounded-lg aspect-video">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform group-hover:scale-110"
        />
      </div>

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
            onClick={(e) => e.stopPropagation()}
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
            onClick={(e) => e.stopPropagation()}
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev === selectedProject.images!.length - 1 ? 0 : prev + 1));
    }
  };

  const prevImage = () => {
    if (selectedProject?.images) {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images!.length - 1 : prev - 1));
    }
  };

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
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onClick={() => handleProjectClick(project)}
            />
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

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-lg flex flex-col min-h-[400px]">
          {/* Image Carousel */}
          {selectedProject?.images && selectedProject.images.length > 0 && (
            <div className="relative flex-1 flex items-center justify-center">
              <motion.img
                key={currentImageIndex}
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} screenshot ${currentImageIndex + 1}`}
                className="max-h-[300px] w-auto rounded-lg object-contain"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-background/80 hover:bg-background border border-border rounded-full transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                {selectedProject.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      idx === currentImageIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <DialogHeader className="mt-auto pt-4 border-t border-border">
            <DialogDescription className="text-muted-foreground">{selectedProject?.description}</DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
