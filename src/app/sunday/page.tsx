import type { Metadata } from "next";
import SundayClient from "./SundayClient";

export const metadata: Metadata = {
  title: "Day 4 — Cruising | The Final Voyage",
  description: "Sunday, August 16 • Day at Sea — Sports, pool, casino, and full send on the ship.",
};

export default function SundayPage() {
  return <SundayClient />;
}
