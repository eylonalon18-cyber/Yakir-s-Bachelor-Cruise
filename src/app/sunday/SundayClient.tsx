"use client";

import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import DayNavigation from "@/components/DayNavigation";
import SectionWave from "@/components/SectionWave";
import { ShipWheelDecoration, CompassDecoration, CocktailDecoration, BeerDecoration, FishSchool, ShellDecoration, StarField } from "@/components/Decorations";
import { sundayEvents } from "@/lib/itinerary";

export default function SundayClient() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1502933691298-84fc14542831?w=1920&q=80"
        imageAlt="FlowRider surfing wave machine"
        title="Day 4 — Cruising 🎰"
        subtitle="Sunday, August 16 • Day at Sea"
        tag="Day 4 of 5"
      />

      <section className="relative mesh-gradient-2 py-8 overflow-hidden">
        <StarField />
        <ShipWheelDecoration className="absolute top-16 left-8 hidden lg:block" size={120} />
        <CocktailDecoration className="absolute top-[30%] right-8 hidden lg:block" size={95} />
        <BeerDecoration className="absolute top-[50%] left-6 hidden lg:block" size={85} />
        <FishSchool className="absolute top-[60%] right-4 hidden lg:block" size={140} />
        <CompassDecoration className="absolute bottom-[25%] left-10 hidden lg:block" size={130} />
        <ShellDecoration className="absolute bottom-16 right-10 hidden lg:block" size={80} />
        <SectionWave flip />
        <div className="relative z-10">
          <Timeline events={sundayEvents} />
        </div>
        <SectionWave />
      </section>

      <section className="mesh-gradient-1">
        <DayNavigation
          prevDay={{ label: "Saturday — Bimini", href: "/saturday" }}
          nextDay={{ label: "Monday — Home", href: "/monday" }}
        />
      </section>
    </>
  );
}
