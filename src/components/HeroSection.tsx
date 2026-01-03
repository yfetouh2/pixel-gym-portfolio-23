import { motion } from "framer-motion";
import { PixelAvatar } from "./PixelIcons";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background grid pattern */}
      <div className="absolute inset-0 retro-scanlines pointer-events-none" />
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        💪
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-6xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        ⚡
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-4xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🎮
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-primary/10 border-2 border-primary text-primary font-pixel text-xs"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            LEVEL 99 DEVELOPER
          </motion.div>

          <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl mb-6 leading-relaxed pixel-text-shadow">
            <span className="text-foreground">LIFTING </span>
            <span className="text-primary neon-glow">CODE</span>
            <br />
            <span className="text-foreground">DAILY</span>
            <span className="text-accent"> 💪</span>
          </h1>

          <div className="mb-8 overflow-hidden">
            <motion.p
              className="text-lg sm:text-xl text-muted-foreground font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Full-Stack Developer | Problem Solver | Code Athlete
            </motion.p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              href="#projects"
              className="pixel-btn bg-primary text-primary-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              VIEW PROJECTS
            </motion.a>
            <motion.a
              href="#contact"
              className="pixel-btn bg-card border-2 border-foreground"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              CONTACT ME
            </motion.a>
          </div>
        </motion.div>

        {/* Pixel Avatar */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <PixelAvatar className="w-full h-full" />
            {/* XP Badge */}
            <motion.div
              className="absolute -top-4 -right-4 bg-gym-gold text-foreground font-pixel text-xs px-3 py-2 pixel-border"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              +500 XP
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </motion.div>
    </section>
  );
}
