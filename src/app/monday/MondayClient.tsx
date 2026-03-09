"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import DayNavigation from "@/components/DayNavigation";
import SectionWave from "@/components/SectionWave";
import { AnchorDecoration, FishDecoration, WavesDecoration, ShellDecoration, StarField } from "@/components/Decorations";
import { mondayEvents } from "@/lib/itinerary";

export default function MondayClient() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=1920&q=80"
        imageAlt="Miami sunrise skyline"
        title="Day 5 — Back to Reality ⚓"
        subtitle="Monday, August 17 • Miami, Florida"
        tag="Day 5 of 5"
      />

      <section className="relative mesh-gradient-2 py-8 overflow-hidden">
        <StarField />
        <AnchorDecoration className="absolute top-20 right-10 hidden lg:block" size={110} />
        <FishDecoration className="absolute top-[40%] left-6 hidden lg:block" size={95} direction="right" />
        <WavesDecoration className="absolute top-[55%] right-8 hidden lg:block" size={140} />
        <ShellDecoration className="absolute bottom-[35%] left-10 hidden lg:block" size={85} />
        <SectionWave flip />
        <div className="relative z-10">
          <Timeline events={mondayEvents} />

          {/* Closing message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-4 py-16 text-center"
          >
            <div className="glass-card rounded-3xl p-8 sm:p-12 pulse-glow">
              <motion.span
                className="text-5xl sm:text-6xl block mb-6"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                🤫
              </motion.span>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                What Happens on Yakir's Bachelor Cruise
                <br />
                <span className="text-aqua">Stays on Yakir's Bachelor Cruise</span>
              </h2>
              <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto mb-6">
                Yakir, this one&apos;s for you. The last ride before the ring goes on.
                Let&apos;s make it legendary.
              </p>
              <div className="flex items-center justify-center gap-2 text-gold/80 text-sm font-medium">
                <span>🔥</span>
                <span>Brotherhood. Adventure. Freedom.</span>
                <span>🔥</span>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionWave />
      </section>

      <section className="mesh-gradient-1">
        <DayNavigation
          prevDay={{ label: "Sunday — Day at Sea", href: "/sunday" }}
          nextDay={{ label: "Meet the Crew", href: "/crew", tag: "The Legends" }}
        />
      </section>
    </>
  );
}
