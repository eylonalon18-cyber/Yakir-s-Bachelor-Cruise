import type { Metadata } from "next";
import CrewClient from "./CrewClient";

export const metadata: Metadata = {
  title: "The Crew | Yakir's Bachelor Cruise",
  description: "Meet the legends joining Yakir's Bachelor Cruise — August 13–17, 2026",
};

export default function CrewPage() {
  return <CrewClient />;
}
