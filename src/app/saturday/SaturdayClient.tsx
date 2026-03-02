"use client";

import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import DayNavigation from "@/components/DayNavigation";
import SectionWave from "@/components/SectionWave";
import { PalmTreeDecoration, AnchorDecoration, BeerDecoration, FishDecoration, WavesDecoration, StarField } from "@/components/Decorations";
import { saturdayEvents } from "@/lib/itinerary";

export default function SaturdayClient() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        imageAlt="Bimini Bahamas turquoise water"
        title="Day 3 — Bimini, Bahamas 🌴"
        subtitle="Saturday, August 15 • Bimini, Bahamas (8:00 AM – 5:00 PM)"
        tag="Day 3 of 5"
      />

      <section className="relative mesh-gradient-2 py-8 overflow-hidden">
        <StarField />
        <AnchorDecoration className="absolute top-24 right-10 hidden lg:block" size={95} />
        <BeerDecoration className="absolute top-[35%] left-6 hidden lg:block" size={90} />
        <FishDecoration className="absolute top-[50%] right-6 hidden lg:block" size={95} direction="left" />
        <PalmTreeDecoration className="absolute bottom-[30%] left-8 hidden lg:block" size={110} />
        <WavesDecoration className="absolute bottom-20 right-10 hidden lg:block" size={140} />
        <SectionWave flip />
        <div className="relative z-10">
          <Timeline events={saturdayEvents} />
        </div>
        <SectionWave />
      </section>

      <section className="mesh-gradient-1">
        <DayNavigation
          prevDay={{ label: "Friday — CocoCay", href: "/friday" }}
          nextDay={{ label: "Sunday — Day at Sea", href: "/sunday" }}
        />
      </section>
    </>
  );
}
