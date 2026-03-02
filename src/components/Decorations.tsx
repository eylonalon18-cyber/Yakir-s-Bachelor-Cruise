"use client";

import { motion } from "framer-motion";

// Anchor icon
export function AnchorDecoration({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-aqua/25 ${className}`}
      animate={{ rotate: [0, 8, -8, 0], y: [0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    >
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19c-4 0-6-3-6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 19c4 0 6-3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 19h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </motion.svg>
  );
}

// Compass rose
export function CompassDecoration({
  className = "",
  size = 150,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-gold/20 ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="0.5" />
      <path d="M12 2 L13.5 7 L12 5.5 L10.5 7 Z" fill="currentColor" />
      <path d="M12 22 L13.5 17 L12 18.5 L10.5 17 Z" fill="currentColor" opacity="0.6" />
      <path d="M22 12 L17 13.5 L18.5 12 L17 10.5 Z" fill="currentColor" opacity="0.6" />
      <path d="M2 12 L7 13.5 L5.5 12 L7 10.5 Z" fill="currentColor" opacity="0.6" />
      <path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="0.4" />
      <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" stroke="currentColor" strokeWidth="0.2" />
      <circle cx="12" cy="12" r="1.5" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </motion.svg>
  );
}

// Ship wheel
export function ShipWheelDecoration({
  className = "",
  size = 130,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-aqua/20 ${className}`}
      animate={{ rotate: -360 }}
      transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1" />
      <circle cx="12" cy="12" r="1" fill="currentColor" opacity="0.4" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <line key={angle} x1={12 + 3 * Math.cos(rad)} y1={12 + 3 * Math.sin(rad)} x2={12 + 9 * Math.cos(rad)} y2={12 + 9 * Math.sin(rad)} stroke="currentColor" strokeWidth="0.8" />
        );
      })}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return <circle key={angle} cx={12 + 10.5 * Math.cos(rad)} cy={12 + 10.5 * Math.sin(rad)} r="1.2" stroke="currentColor" strokeWidth="0.6" />;
      })}
    </motion.svg>
  );
}

// Palm tree
export function PalmTreeDecoration({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-teal/25 ${className}`}
      animate={{ rotate: [0, 4, -4, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M12 22 C12 22 11 14 12 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 10 C8 6 3 7 2 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C16 6 21 7 22 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C9 4 5 3 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C15 4 19 3 21 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C12 5 10 2 9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10 C12 5 14 2 15 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="11" cy="10.5" r="0.8" fill="currentColor" opacity="0.5" />
      <circle cx="13" cy="10.5" r="0.8" fill="currentColor" opacity="0.5" />
    </motion.svg>
  );
}

// Tropical cocktail
export function CocktailDecoration({
  className = "",
  size = 100,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-gold/25 ${className}`}
      animate={{ rotate: [0, 6, -6, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glass */}
      <path d="M5 4h14l-5 10h-4L5 4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Liquid */}
      <path d="M7 7h10l-3.5 7h-3L7 7z" fill="currentColor" opacity="0.15" />
      {/* Stem */}
      <path d="M12 14v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Base */}
      <path d="M8 19h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Straw */}
      <path d="M15 4l2-2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Umbrella */}
      <path d="M16 2c0 0-1.5 1-3 1s-3-1-3-1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      {/* Lime */}
      <circle cx="8" cy="6" r="1.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M7.2 6h1.6" stroke="currentColor" strokeWidth="0.5" />
    </motion.svg>
  );
}

// Beer bottle
export function BeerDecoration({
  className = "",
  size = 100,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-gold/22 ${className}`}
      animate={{ rotate: [0, -5, 5, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Bottle body */}
      <path d="M9 22V12c0-1-1-2-1-3V6h8v3c0 1-1 2-1 3v10H9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Neck */}
      <path d="M10 6V3c0-.5.5-1 2-1s2 .5 2 1v3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      {/* Cap */}
      <path d="M10 3h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      {/* Label */}
      <rect x="9.5" y="13" width="5" height="4" rx="0.5" stroke="currentColor" strokeWidth="0.8" />
      {/* Liquid fill */}
      <path d="M9.5 12v10h5V12" fill="currentColor" opacity="0.1" />
    </motion.svg>
  );
}

// Swimming fish
export function FishDecoration({
  className = "",
  size = 90,
  direction = "right",
}: {
  className?: string;
  size?: number;
  direction?: "left" | "right";
}) {
  const flip = direction === "left" ? "scale(-1, 1)" : "scale(1, 1)";
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-aqua/25 ${className}`}
      style={{ transform: flip }}
      animate={{ x: direction === "right" ? [0, 30, 0] : [0, -30, 0], y: [0, -5, 3, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Body */}
      <path d="M2 12c0 0 3-6 10-6s10 6 10 6s-3 6-10 6S2 12 2 12z" stroke="currentColor" strokeWidth="1.2" fill="currentColor" fillOpacity="0.08" />
      {/* Tail */}
      <path d="M2 12l-0.5-3v6L2 12z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.15" />
      {/* Eye */}
      <circle cx="16" cy="11.5" r="1.2" stroke="currentColor" strokeWidth="0.8" />
      <circle cx="16.3" cy="11.3" r="0.4" fill="currentColor" />
      {/* Fin top */}
      <path d="M10 6c0 0 1-3 3-3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      {/* Fin bottom */}
      <path d="M10 18c0 0 1 2 2 2" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      {/* Gill line */}
      <path d="M14 9.5c-.5 1-.5 4 0 5" stroke="currentColor" strokeWidth="0.6" strokeLinecap="round" />
      {/* Scales hint */}
      <path d="M8 11c.3.5.3 1.5 0 2" stroke="currentColor" strokeWidth="0.4" />
      <path d="M10 10.5c.3.7.3 2.3 0 3" stroke="currentColor" strokeWidth="0.4" />
    </motion.svg>
  );
}

// Small fish school (3 tiny fish)
export function FishSchool({
  className = "",
  size = 120,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 48 20"
      fill="none"
      className={`text-teal/20 ${className}`}
      animate={{ x: [0, 40, 0], y: [0, -3, 2, 0] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Fish 1 */}
      <path d="M4 6l6-3v6L4 6z" fill="currentColor" opacity="0.3" />
      <path d="M10 6c0-2 3-4 6-4s5 2 5 4-2 4-5 4-6-2-6-4z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="18" cy="5.5" r="0.7" fill="currentColor" />
      {/* Fish 2 */}
      <path d="M18 14l5-2.5v5L18 14z" fill="currentColor" opacity="0.3" />
      <path d="M23 14c0-1.8 2.5-3.5 5-3.5s4.5 1.7 4.5 3.5-2 3.5-4.5 3.5-5-1.7-5-3.5z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="30" cy="13.5" r="0.6" fill="currentColor" />
      {/* Fish 3 */}
      <path d="M30 6l4-2v4l-4-2z" fill="currentColor" opacity="0.3" />
      <path d="M34 6c0-1.5 2-3 4-3s3.5 1.5 3.5 3-1.5 3-3.5 3-4-1.5-4-3z" stroke="currentColor" strokeWidth="0.8" fill="currentColor" fillOpacity="0.1" />
      <circle cx="39.5" cy="5.5" r="0.5" fill="currentColor" />
    </motion.svg>
  );
}

// Waves decoration
export function WavesDecoration({
  className = "",
  size = 140,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size * 0.4}
      viewBox="0 0 48 18"
      fill="none"
      className={`text-ocean/20 ${className}`}
      animate={{ x: [0, 10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <path d="M0 8c4-4 8 0 12-4s8 0 12-4 8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M0 13c4-4 8 0 12-4s8 0 12-4 8 0 12-4 8 0 12-4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <path d="M0 17c4-3 8 0 12-3s8 0 12-3 8 0 12-3 8 0 12-3" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.3" />
    </motion.svg>
  );
}

// Seashell
export function ShellDecoration({
  className = "",
  size = 80,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`text-sand/20 ${className}`}
      animate={{ rotate: [0, 10, -5, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Shell spiral */}
      <path d="M12 20c-5 0-9-4-9-9C3 6 7 2 12 2c3 0 6 2 7 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 7c1 2 1 4 0 6-1 3-4 5-7 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M12 18c-3 0-6-3-6-6s3-6 6-6c2 0 4 1 5 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M17 9c.5 1 .5 3-.5 4.5S14 16 12 16" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
      <path d="M12 16c-2 0-4-2-4-4s2-4 4-4c1.5 0 3 1 3 2.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" />
      {/* Ridge lines */}
      <path d="M6 14l10-8" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      <path d="M5 11l8-6" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
      <path d="M8 17l9-9" stroke="currentColor" strokeWidth="0.4" opacity="0.5" />
    </motion.svg>
  );
}

// Wave divider between sections
export function WaveDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`w-full flex items-center justify-center gap-4 py-8 ${className}`}>
      <div className="h-px flex-1 max-w-[140px] bg-gradient-to-r from-transparent to-aqua/40" />
      <motion.span
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-aqua/60 text-xl"
      >
        ⚓
      </motion.span>
      <div className="h-px flex-1 max-w-[140px] bg-gradient-to-l from-transparent to-aqua/40" />
    </div>
  );
}

// Starry background overlay
export function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    left: `${(i * 37.7 + 13) % 100}%`,
    top: `${(i * 53.3 + 7) % 100}%`,
    size: (i % 3) + 1.5,
    delay: (i * 0.3) % 4,
    duration: 2 + (i % 3),
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
          }}
          animate={{ opacity: [0.15, 0.7, 0.15] }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
