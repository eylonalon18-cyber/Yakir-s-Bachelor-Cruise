"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface HeroSectionProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  tag?: string;
}

export default function HeroSection({
  imageUrl,
  imageAlt,
  title,
  subtitle,
  tag,
}: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
      {/* Parallax background image */}
      <motion.div style={{ y }} className="absolute inset-0 scale-110">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4"
      >
        {tag && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-aqua text-sm font-semibold tracking-widest uppercase mb-4
              bg-aqua/10 px-4 py-1.5 rounded-full border border-aqua/20"
          >
            {tag}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-7xl
            font-bold text-white glow-text mb-4 max-w-4xl leading-tight"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/70 text-base sm:text-lg md:text-xl max-w-2xl"
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </section>
  );
}
