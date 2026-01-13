import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <motion.p
            className="text-sm text-muted-foreground text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Code Gym Portfolio. All gains reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
