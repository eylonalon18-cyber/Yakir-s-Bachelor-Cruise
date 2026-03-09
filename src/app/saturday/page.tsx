import type { Metadata } from "next";
import SaturdayClient from "./SaturdayClient";

export const metadata: Metadata = {
  title: "Day 3 — Bimini, Bahamas | Yakir's Bachelor Cruise",
  description: "Saturday, August 15 • Bimini, Bahamas — Explore the island and soak up the vibes.",
};

export default function SaturdayPage() {
  return <SaturdayClient />;
}
