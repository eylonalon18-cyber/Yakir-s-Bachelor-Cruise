"use client";

import { motion } from "framer-motion";

export default function DinnerThemeBanner({ theme }: { theme: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto px-6 sm:px-8 pt-10 sm:pt-12"
    >
      <div className="glass-card rounded-2xl px-6 py-5 text-center border-gold/25 shadow-lg shadow-gold/5">
        <span className="text-2xl sm:text-3xl block mb-2 leading-none">🍽️</span>
        <span className="block text-xs text-gold/70 uppercase tracking-[0.2em] mb-1.5">
          Tonight&apos;s Dinner Theme
        </span>
        <span className="block font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white">
          {theme}
        </span>
      </div>
    </motion.div>
  );
}
