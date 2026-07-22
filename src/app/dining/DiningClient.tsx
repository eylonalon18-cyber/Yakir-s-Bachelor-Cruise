"use client";

import { motion } from "framer-motion";
import SectionWave from "@/components/SectionWave";
import {
  AnchorDecoration,
  CompassDecoration,
  ShipWheelDecoration,
  CocktailDecoration,
  BeerDecoration,
  FishSchool,
  StarField,
} from "@/components/Decorations";

interface Venue {
  name: string;
  deck: string;
  cuisine: string;
  included?: boolean;
  note?: string;
}

// Dining aboard Freedom of the Seas — decks reflect Royal Caribbean's current layout.
const included: Venue[] = [
  {
    name: "Main Dining Room",
    deck: "Decks 3, 4 & 5",
    cuisine: "Multi-course sit-down dinner — the classic cruise dining experience",
  },
  {
    name: "Windjammer Marketplace",
    deck: "Deck 11",
    cuisine: "Casual all-you-can-eat buffet for breakfast, lunch & dinner",
  },
  {
    name: "Sorrento's Pizza",
    deck: "Deck 5 · Royal Promenade",
    cuisine: "Fresh slices and late-night pizza",
  },
  {
    name: "Café Promenade",
    deck: "Deck 5 · Royal Promenade",
    cuisine: "24/7 coffee, pastries, sandwiches & bites",
  },
  {
    name: "El Loco Fresh",
    deck: "Deck 11",
    cuisine: "Poolside Mexican — tacos, burritos, quesadillas & a salsa bar",
  },
  {
    name: "Sprinkles",
    deck: "Deck 11",
    cuisine: "Self-serve soft-serve ice cream by the pool",
  },
  {
    name: "Room Service",
    deck: "Your Stateroom",
    cuisine: "In-room dining, day or night",
    note: "Continental breakfast free · service fee applies to other orders",
  },
];

const specialty: Venue[] = [
  {
    name: "Chops Grille",
    deck: "Deck 11",
    cuisine: "Signature steakhouse — hand-cut prime steaks & seafood",
    included: false,
  },
  {
    name: "Giovanni's Italian Kitchen",
    deck: "Deck 11",
    cuisine: "Rustic Italian — pasta, wood-fired flavors & wine",
    included: false,
  },
  {
    name: "Izumi Hibachi & Sushi",
    deck: "Deck 11",
    cuisine: "Japanese hibachi teppanyaki, sushi & sashimi",
    included: false,
  },
  {
    name: "Playmakers Sports Bar & Arcade",
    deck: "Deck 5 · Royal Promenade",
    cuisine: "Wings, burgers & pub grub with the game on",
    included: false,
  },
  {
    name: "Johnny Rockets",
    deck: "Deck 12",
    cuisine: "Retro American diner — burgers, fries & milkshakes",
    included: false,
    note: "Breakfast included in cruise fare · milkshakes included with the Deluxe Beverage Package",
  },
  {
    name: "Chef's Table",
    deck: "Deck 11",
    cuisine: "Intimate multi-course fine dining with wine pairings",
    included: false,
  },
  {
    name: "Ben & Jerry's",
    deck: "Deck 5 · Royal Promenade",
    cuisine: "Scoops of your favorite ice cream",
    included: false,
  },
  {
    name: "Starbucks",
    deck: "Deck 5 · Royal Promenade",
    cuisine: "Full Starbucks coffee menu",
    included: false,
    note: "Select coffees included with the Deluxe Beverage Package",
  },
];

function IncludedPill({ included }: { included?: boolean }) {
  if (included) {
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide
        text-aqua bg-aqua/10 border border-aqua/25 px-2.5 py-1 rounded-full">
        ✓ Included
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide
      text-gold bg-gold/10 border border-gold/25 px-2.5 py-1 rounded-full">
      $ Extra Charge
    </span>
  );
}

function VenueCard({ venue, i }: { venue: Venue; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      className={`relative rounded-2xl border p-5 sm:p-6 backdrop-blur-sm transition-all duration-300
        ${
          venue.included
            ? "border-aqua/15 bg-white/[0.03] hover:border-aqua/35"
            : "border-gold/20 bg-gold/[0.03] hover:border-gold/40"
        } hover:shadow-lg hover:-translate-y-1`}
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-[family-name:var(--font-playfair)] text-lg sm:text-xl font-bold text-white leading-snug">
          {venue.name}
        </h3>
        <IncludedPill included={venue.included} />
      </div>
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/50 mb-3">
        <span className="text-aqua">⚓</span> {venue.deck}
      </span>
      <p className="text-sm text-white/60 leading-relaxed">{venue.cuisine}</p>
      {venue.note && (
        <p className="text-[11px] text-gold/60 mt-2 italic">{venue.note}</p>
      )}
    </motion.div>
  );
}

export default function DiningClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 mesh-gradient-1 text-center overflow-hidden">
        <StarField />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-aqua text-sm font-semibold tracking-widest uppercase mb-4
              bg-aqua/10 px-4 py-1.5 rounded-full border border-aqua/20"
          >
            Freedom of the Seas
          </motion.span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white glow-text mb-4">
            Where to Eat
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-lg mx-auto">
            Every galley on the ship — deck by deck, and what&apos;s on the house vs. worth the splurge.
          </p>
        </motion.div>
      </section>

      <SectionWave />

      {/* Venues */}
      <section className="relative mesh-gradient-2 py-16 sm:py-24 overflow-hidden">
        <CompassDecoration className="absolute top-20 left-6 hidden lg:block" size={130} />
        <AnchorDecoration className="absolute top-[25%] right-8 hidden lg:block" size={100} />
        <CocktailDecoration className="absolute top-[45%] left-8 hidden lg:block" size={90} />
        <BeerDecoration className="absolute top-[60%] right-10 hidden lg:block" size={85} />
        <FishSchool className="absolute top-[75%] left-4 hidden lg:block" size={140} />
        <ShipWheelDecoration className="absolute bottom-24 right-12 hidden lg:block" size={110} />

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-3 mb-14"
          >
            <IncludedPill included={true} />
            <span className="text-white/40 text-sm">= in your cruise fare</span>
            <span className="text-white/20 mx-1">·</span>
            <IncludedPill included={false} />
            <span className="text-white/40 text-sm">= additional cost to dine</span>
          </motion.div>

          {/* Included */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-1"
            >
              <span className="text-aqua">Included</span> Dining
            </motion.h2>
            <p className="text-white/40 text-sm mb-8">Eat all you want — it&apos;s already paid for.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {included.map((venue, i) => (
                <VenueCard key={venue.name} venue={{ ...venue, included: true }} i={i} />
              ))}
            </div>
          </div>

          {/* Specialty */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-1"
            >
              <span className="text-gold">Specialty</span> Dining
            </motion.h2>
            <p className="text-white/40 text-sm mb-8">A cut above — reserve ahead, pay a cover or à la carte.</p>
            <div className="grid sm:grid-cols-2 gap-5">
              {specialty.map((venue, i) => (
                <VenueCard key={venue.name} venue={venue} i={i} />
              ))}
            </div>
          </div>

          <p className="text-center text-white/25 text-xs mt-14 max-w-xl mx-auto">
            Decks &amp; venues reflect Freedom of the Seas&apos; current layout. Menus, hours &amp; prices are set by
            Royal Caribbean and can change — confirm onboard.
          </p>
        </div>
      </section>
    </>
  );
}
