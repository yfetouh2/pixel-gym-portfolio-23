import { motion } from "framer-motion";
import { PixelIcon } from "./PixelIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.div
            className="flex items-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <PixelIcon icon="dumbbell" size="sm" className="text-primary" />
            <span className="font-pixel text-xs">
              Built with 💪 & ☕
            </span>
          </motion.div>

          <motion.p
            className="text-sm text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} DevGym Portfolio. All gains reserved.
          </motion.p>

          <motion.div
            className="font-pixel text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            v1.0.0
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
