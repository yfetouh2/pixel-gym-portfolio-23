import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.avif";
import profilePhoto from "@/assets/profile-photo.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-background/40" />

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-1/4 left-10 text-6xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        🏋️
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 right-10 text-6xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        💪
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-4xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🔥
      </motion.div>

      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-pixel text-2xl sm:text-3xl lg:text-4xl mb-6 leading-relaxed pixel-text-shadow text-foreground">
            HI! I'M YOUSSEF
            <br />
            ABOU EL FETOUH 💪
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

        </motion.div>

        {/* Pixel Avatar */}

        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            <motion.div
              className="w-full h-full rounded-full overflow-hidden border-4 border-foreground"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src={profilePhoto} alt="Profile photo" className="w-full h-full object-cover" />
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
