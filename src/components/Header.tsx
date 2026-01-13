import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Github, Linkedin, Mail } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-end">

        <nav className="hidden md:flex items-center gap-6">
          {["About", "Projects", "Experience", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href="https://github.com/yfetouh2"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Github className="h-5 w-5" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/youssef-abou-el-fetouh-94b414361"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-primary transition-colors"
            whileHover={{ scale: 1.1, rotate: -5 }}
          >
            <Linkedin className="h-5 w-5" />
          </motion.a>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
