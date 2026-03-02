import type { Metadata } from "next";
import ThursdayClient from "./ThursdayClient";

export const metadata: Metadata = {
  title: "Day 1 — Boarding Day | The Final Voyage",
  description: "Thursday, August 13 • Miami, Florida — Board Freedom of the Seas and set sail!",
};

export default function ThursdayPage() {
  return <ThursdayClient />;
}
