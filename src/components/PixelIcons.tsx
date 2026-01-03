import { motion } from "framer-motion";

interface PixelIconProps {
  icon: "dumbbell" | "code" | "trophy" | "lightning" | "heart" | "star";
  size?: "sm" | "md" | "lg";
  className?: string;
  animate?: boolean;
}

export function PixelIcon({ icon, size = "md", className = "", animate = false }: PixelIconProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const icons = {
    dumbbell: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <rect x="2" y="12" width="4" height="8" fill="currentColor" />
        <rect x="6" y="10" width="4" height="12" fill="currentColor" />
        <rect x="10" y="14" width="12" height="4" fill="currentColor" />
        <rect x="22" y="10" width="4" height="12" fill="currentColor" />
        <rect x="26" y="12" width="4" height="8" fill="currentColor" />
      </svg>
    ),
    code: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <path d="M10 8L2 16L10 24" stroke="currentColor" strokeWidth="3" fill="none" />
        <path d="M22 8L30 16L22 24" stroke="currentColor" strokeWidth="3" fill="none" />
        <rect x="14" y="6" width="4" height="20" fill="currentColor" transform="rotate(15 16 16)" />
      </svg>
    ),
    trophy: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <rect x="8" y="4" width="16" height="16" fill="currentColor" />
        <rect x="4" y="4" width="4" height="8" fill="currentColor" />
        <rect x="24" y="4" width="4" height="8" fill="currentColor" />
        <rect x="12" y="20" width="8" height="4" fill="currentColor" />
        <rect x="8" y="24" width="16" height="4" fill="currentColor" />
      </svg>
    ),
    lightning: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <polygon points="18,2 8,16 14,16 12,30 24,14 18,14" fill="currentColor" />
      </svg>
    ),
    heart: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <path d="M16 28L4 16C2 14 2 10 4 8C6 6 10 6 12 8L16 12L20 8C22 6 26 6 28 8C30 10 30 14 28 16L16 28Z" fill="currentColor" />
      </svg>
    ),
    star: (
      <svg viewBox="0 0 32 32" className={`${sizeClasses[size]} ${className}`}>
        <polygon points="16,2 20,12 30,12 22,18 26,28 16,22 6,28 10,18 2,12 12,12" fill="currentColor" />
      </svg>
    ),
  };

  if (animate) {
    return (
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
      >
        {icons[icon]}
      </motion.div>
    );
  }

  return icons[icon];
}

interface PixelAvatarProps {
  className?: string;
}

export function PixelAvatar({ className = "" }: PixelAvatarProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <svg viewBox="0 0 64 64" className="w-full h-full">
        {/* Body */}
        <rect x="24" y="40" width="16" height="20" className="fill-primary" />
        {/* Head */}
        <rect x="20" y="16" width="24" height="24" className="fill-foreground" />
        {/* Face */}
        <rect x="24" y="20" width="16" height="16" className="fill-card" />
        {/* Eyes */}
        <rect x="26" y="26" width="4" height="4" className="fill-primary" />
        <rect x="34" y="26" width="4" height="4" className="fill-primary" />
        {/* Mouth */}
        <rect x="28" y="34" width="8" height="2" className="fill-primary" />
        {/* Hair */}
        <rect x="20" y="12" width="24" height="6" className="fill-foreground" />
        {/* Laptop */}
        <rect x="10" y="48" width="20" height="12" className="fill-neon-blue" />
        <rect x="12" y="50" width="16" height="8" className="fill-card" />
        {/* Code on screen */}
        <rect x="14" y="52" width="8" height="1" className="fill-neon-green" />
        <rect x="14" y="54" width="10" height="1" className="fill-neon-purple" />
        {/* Dumbbell in other hand */}
        <rect x="42" y="46" width="2" height="8" className="fill-muted-foreground" />
        <rect x="40" y="44" width="6" height="3" className="fill-gym-red" />
        <rect x="40" y="51" width="6" height="3" className="fill-gym-red" />
      </svg>
    </motion.div>
  );
}
