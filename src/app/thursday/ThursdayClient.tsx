"use client";

import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import DayNavigation from "@/components/DayNavigation";
import SectionWave from "@/components/SectionWave";
import { AnchorDecoration, ShipWheelDecoration, CocktailDecoration, FishDecoration, WavesDecoration, StarField } from "@/components/Decorations";
import { thursdayEvents } from "@/lib/itinerary";

export default function ThursdayClient() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1920&q=80"
        imageAlt="Miami cruise port at sunset"
        title="Day 1 — Boarding Day 🚢"
        subtitle="Thursday, August 13 • Miami, Florida"
        tag="Day 1 of 5"
      />

      <section className="relative mesh-gradient-2 py-8 overflow-hidden">
        <StarField />
        <AnchorDecoration className="absolute top-16 right-10 hidden lg:block" size={100} />
        <ShipWheelDecoration className="absolute top-[35%] left-6 hidden lg:block" size={110} />
        <CocktailDecoration className="absolute top-[55%] right-8 hidden lg:block" size={85} />
        <FishDecoration className="absolute bottom-[30%] left-8 hidden lg:block" size={90} direction="right" />
        <WavesDecoration className="absolute bottom-20 right-12 hidden lg:block" size={140} />
        <SectionWave flip />
        <div className="relative z-10">
          <Timeline events={thursdayEvents} />
        </div>
        <SectionWave />
      </section>

      <section className="mesh-gradient-1">
        <DayNavigation
          nextDay={{ label: "Friday — CocoCay", href: "/friday" }}
        />
      </section>
    </>
  );
}
