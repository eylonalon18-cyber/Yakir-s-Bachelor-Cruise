"use client";

import HeroSection from "@/components/HeroSection";
import Timeline from "@/components/Timeline";
import DayNavigation from "@/components/DayNavigation";
import SectionWave from "@/components/SectionWave";
import { PalmTreeDecoration, CompassDecoration, FishSchool, CocktailDecoration, ShellDecoration, StarField } from "@/components/Decorations";
import { fridayEvents } from "@/lib/itinerary";

export default function FridayClient() {
  return (
    <>
      <HeroSection
        imageUrl="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&q=80"
        imageAlt="Tropical island paradise"
        title="Day 2 — Perfect Day at CocoCay 🏝️"
        subtitle="Friday, August 14 • CocoCay, Bahamas (7:00 AM – 5:00 PM)"
        tag="Day 2 of 5"
      />

      <section className="relative mesh-gradient-2 py-8 overflow-hidden">
        <StarField />
        <PalmTreeDecoration className="absolute top-20 left-6 hidden lg:block" size={120} />
        <CocktailDecoration className="absolute top-[30%] right-8 hidden lg:block" size={90} />
        <FishSchool className="absolute top-[50%] left-4 hidden lg:block" size={140} />
        <ShellDecoration className="absolute top-[60%] right-10 hidden lg:block" size={85} />
        <CompassDecoration className="absolute bottom-24 left-10 hidden lg:block" size={120} />
        <PalmTreeDecoration className="absolute bottom-16 right-6 hidden lg:block" size={100} />
        <SectionWave flip />
        <div className="relative z-10">
          <Timeline events={fridayEvents} />
        </div>
        <SectionWave />
      </section>

      <section className="mesh-gradient-1">
        <DayNavigation
          prevDay={{ label: "Thursday — Miami", href: "/thursday" }}
          nextDay={{ label: "Saturday — Bimini", href: "/saturday" }}
        />
      </section>
    </>
  );
}
