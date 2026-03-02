"use client";

import { motion } from "framer-motion";

export interface TimelineEvent {
  time: string;
  activity: string;
  location?: string;
  icon: string;
  deck?: string;
}

function getIconForActivity(icon: string) {
  const icons: Record<string, string> = {
    breakfast: "🍳",
    board: "🚢",
    explore: "🧭",
    depart: "⛵",
    dinner: "🍽️",
    casino: "🎰",
    party: "🎶",
    pizza: "🍕",
    gym: "💪",
    pool: "🎉",
    island: "🏝️",
    show: "🎭",
    sports: "🏀",
    arrive: "⚓",
    deboard: "👋",
    tbd: "🤙",
    ship: "🚢",
    bars: "🍹",
  };
  return icons[icon] || "📍";
}

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-8 py-12">
      {events.map((event, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="relative pb-10 last:pb-0"
        >
          {/* Connecting line */}
          {i < events.length - 1 && (
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-gradient-to-b from-aqua/40 to-ocean/20 z-0" />
          )}

          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="relative z-10 glass-card rounded-2xl p-5 sm:p-6 group hover:border-aqua/30 transition-all duration-300 text-center"
          >
            {/* Time & deck badges */}
            <div className="flex items-center justify-center gap-2 mb-3 flex-wrap">
              <span className="text-xs font-semibold text-aqua bg-aqua/10 px-3 py-1 rounded-full border border-aqua/15">
                {event.time}
              </span>
              {event.deck && (
                <span className="text-xs font-medium text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/15">
                  {event.deck}
                </span>
              )}
            </div>

            {/* Icon */}
            <span className="text-3xl sm:text-4xl block mb-2 leading-none">
              {getIconForActivity(event.icon)}
            </span>

            {/* Activity name */}
            <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-aqua transition-colors leading-snug">
              {event.activity}
            </h3>

            {/* Location */}
            {event.location && (
              <p className="text-sm text-white/50 mt-1">{event.location}</p>
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
