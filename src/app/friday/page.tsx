import type { Metadata } from "next";
import FridayClient from "./FridayClient";

export const metadata: Metadata = {
  title: "Day 2 — Perfect Day at CocoCay | Yakir's Bachelor Cruise",
  description: "Friday, August 14 • CocoCay, Bahamas — Paradise island, pool party, and good vibes.",
};

export default function FridayPage() {
  return <FridayClient />;
}
