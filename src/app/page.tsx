"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "@/components/CountdownTimer";
import SectionWave from "@/components/SectionWave";
import {
  AnchorDecoration,
  CompassDecoration,
  ShipWheelDecoration,
  PalmTreeDecoration,
  CocktailDecoration,
  BeerDecoration,
  FishDecoration,
  FishSchool,
  WavesDecoration,
  ShellDecoration,
  StarField,
  WaveDivider,
} from "@/components/Decorations";

const days = [
  {
    day: "Thursday",
    date: "Aug 13",
    title: "Boarding Day",
    emoji: "🚢",
    location: "Miami, FL",
    href: "/thursday",
    color: "from-ocean to-deep-blue",
  },
  {
    day: "Friday",
    date: "Aug 14",
    title: "CocoCay",
    emoji: "🏝️",
    location: "Bahamas",
    href: "/friday",
    color: "from-teal to-ocean",
  },
  {
    day: "Saturday",
    date: "Aug 15",
    title: "Bimini",
    emoji: "🌴",
    location: "Bahamas",
    href: "/saturday",
    color: "from-aqua to-teal",
  },
  {
    day: "Sunday",
    date: "Aug 16",
    title: "Cruising",
    emoji: "🎰",
    location: "Day at Sea",
    href: "/sunday",
    color: "from-ocean to-aqua",
  },
  {
    day: "Monday",
    date: "Aug 17",
    title: "Home",
    emoji: "⚓",
    location: "Miami, FL",
    href: "/monday",
    color: "from-deep-blue to-ocean",
  },
];

const routeStops = [
  { name: "Miami", emoji: "🌆" },
  { name: "CocoCay", emoji: "🏝️" },
  { name: "Bimini", emoji: "🌴" },
  { name: "At Sea", emoji: "🌊" },
  { name: "Miami", emoji: "🏠" },
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] overflow-hidden">
        <StarField />
        {/* Background image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1548574505-5e239809ee19?w=1920&q=80"
            alt="Cruise ship at sunset"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/50 to-navy" />
        </motion.div>

        {/* Animated mesh overlay */}
        <div className="absolute inset-0 mesh-gradient-1 opacity-60" />

        {/* Hero content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 pt-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block text-aqua text-sm sm:text-base font-semibold tracking-[0.2em] uppercase mb-6
                bg-aqua/10 px-5 py-2 rounded-full border border-aqua/20"
            >
              Yakir&apos;s Bachelor Cruise
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl sm:text-6xl md:text-7xl
                font-bold text-white glow-text mb-6 leading-[1.1]"
            >
              The Final Voyage
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-white/60 text-base sm:text-lg md:text-xl mb-2"
            >
              Freedom of the Seas &bull; 4-Night Bahamas &amp; Perfect Day Cruise
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gold/80 text-sm sm:text-base font-medium tracking-wide"
            >
              August 13&ndash;17, 2026
            </motion.p>
          </motion.div>

          {/* Countdown */}
          <div className="mt-10 sm:mt-14">
            <CountdownTimer />
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
            >
              <div className="w-1.5 h-1.5 bg-aqua rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* TRIP OVERVIEW */}
      <section className="relative py-28 sm:py-36 mesh-gradient-2 overflow-hidden">
        {/* Decorative elements */}
        <AnchorDecoration className="absolute top-20 left-8 hidden lg:block" size={100} />
        <CompassDecoration className="absolute top-32 right-10 hidden lg:block" size={140} />
        <CocktailDecoration className="absolute top-[45%] left-6 hidden lg:block" size={90} />
        <BeerDecoration className="absolute top-[30%] right-14 hidden lg:block" size={85} />
        <FishDecoration className="absolute top-[55%] right-6 hidden lg:block" size={100} direction="left" />
        <FishSchool className="absolute top-[65%] left-4 hidden lg:block" size={130} />
        <ShipWheelDecoration className="absolute bottom-[30%] left-10 hidden lg:block" size={110} />
        <PalmTreeDecoration className="absolute bottom-[25%] right-12 hidden lg:block" size={110} />
        <WavesDecoration className="absolute bottom-16 left-16 hidden lg:block" size={150} />
        <ShellDecoration className="absolute bottom-12 right-8 hidden lg:block" size={80} />

        <SectionWave flip />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Trip Overview
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              4 nights, 5 days, 1 legendary adventure
            </p>
          </motion.div>

          {/* Info cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-28">
            {[
              { emoji: "🚢", label: "Ship", value: "Freedom of the Seas" },
              { emoji: "📍", label: "Departing", value: "Miami, Florida" },
              { emoji: "🗓️", label: "Dates", value: "Aug 13–17, 2026" },
              { emoji: "👥", label: "Crew", value: "13–16 Legends" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-5 sm:p-6 text-center group hover:border-aqua/30 transition-all"
              >
                <span className="text-3xl sm:text-4xl block mb-3">{item.emoji}</span>
                <span className="block text-xs text-aqua/70 uppercase tracking-wider mb-1">
                  {item.label}
                </span>
                <span className="block text-sm sm:text-base font-semibold text-white">
                  {item.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Route map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-28"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-center mb-12">
              The Route
            </h3>
            <div className="relative flex items-center justify-between max-w-3xl mx-auto px-4">
              {/* Connecting line */}
              <div className="absolute left-8 right-8 top-1/2 h-0.5 -translate-y-1/2 bg-gradient-to-r from-aqua/60 via-ocean/40 to-aqua/60" />

              {routeStops.map((stop, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, type: "spring" }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-deep-blue border-2 border-aqua/40 flex items-center justify-center text-xl sm:text-2xl shadow-lg shadow-aqua/20 mb-2">
                    {stop.emoji}
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium text-white/70 text-center">
                    {stop.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <WaveDivider />

          {/* Day cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-center mb-4">
              Pick Your Day &amp; Get Ready 🔥
            </h3>
            <p className="text-white/40 text-center mb-14">
              Tap a day to see the full itinerary
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {days.map((d, i) => (
              <motion.div
                key={d.day}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={d.href} className="block group">
                  <div
                    className="glass-card rounded-2xl p-5 sm:p-6 text-center
                    hover:border-aqua/30 hover:scale-105 transition-all duration-300
                    relative overflow-hidden"
                  >
                    {/* Gradient accent */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${d.color} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />
                    <span className="text-3xl sm:text-4xl block mb-3">{d.emoji}</span>
                    <span className="block text-xs text-aqua/70 uppercase tracking-wider mb-1">
                      {d.day}
                    </span>
                    <span className="block text-lg font-bold text-white mb-0.5 font-[family-name:var(--font-playfair)]">
                      {d.title}
                    </span>
                    <span className="block text-xs text-white/40">{d.date}</span>
                    <span className="block text-xs text-white/30 mt-1">{d.location}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Packing Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-28"
          >
            <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-center mb-4">
              Packing Checklist 🧳
            </h3>
            <p className="text-white/40 text-center mb-12">
              Don&apos;t be that guy who forgot something
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              {[
                { emoji: "🛂", item: "Passport / ID" },
                { emoji: "🧴", item: "Sunscreen" },
                { emoji: "🩳", item: "Swim Trunks" },
                { emoji: "🕶️", item: "Sunglasses" },
                { emoji: "👟", item: "Sneakers / Slides" },
                { emoji: "👔", item: "Dinner Outfits (x5)" },
                { emoji: "🎰", item: "Casino Cash" },
                { emoji: "🔌", item: "Phone Charger" },
                { emoji: "🧢", item: "Hat / Cap" },
                { emoji: "🎒", item: "Day Bag for Islands" },
                { emoji: "💧", item: "Reusable Water Bottle" },
                { emoji: "🪥", item: "Toiletries" },
              ].map((item, i) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  className="glass-card rounded-xl p-4 flex items-center gap-3 group hover:border-aqua/30 transition-all"
                >
                  <span className="text-xl sm:text-2xl flex-shrink-0">{item.emoji}</span>
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                    {item.item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="mt-28">
          <SectionWave />
        </div>
      </section>
    </>
  );
}
