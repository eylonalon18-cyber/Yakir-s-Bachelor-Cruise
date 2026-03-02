"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface DayNavigationProps {
  prevDay?: { label: string; href: string };
  nextDay?: { label: string; href: string; tag?: string };
}

export default function DayNavigation({ prevDay, nextDay }: DayNavigationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-between max-w-4xl mx-auto px-4 py-12"
    >
      {prevDay ? (
        <Link
          href={prevDay.href}
          className="group flex items-center gap-3 glass-card rounded-2xl px-5 py-4 sm:px-8 sm:py-5
            hover:border-aqua/30 transition-all duration-300"
        >
          <svg
            className="w-5 h-5 text-aqua transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <div className="text-left">
            <span className="block text-xs text-white/40 uppercase tracking-wider">
              Previous Day
            </span>
            <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-aqua transition-colors">
              {prevDay.label}
            </span>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextDay ? (
        <Link
          href={nextDay.href}
          className="group flex items-center gap-3 glass-card rounded-2xl px-5 py-4 sm:px-8 sm:py-5
            hover:border-aqua/30 transition-all duration-300"
        >
          <div className="text-right">
            <span className="block text-xs text-white/40 uppercase tracking-wider">
              {nextDay.tag || "Next Day"}
            </span>
            <span className="block text-sm sm:text-base font-semibold text-white group-hover:text-aqua transition-colors">
              {nextDay.label}
            </span>
          </div>
          <svg
            className="w-5 h-5 text-aqua transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ) : (
        <div />
      )}
    </motion.div>
  );
}
