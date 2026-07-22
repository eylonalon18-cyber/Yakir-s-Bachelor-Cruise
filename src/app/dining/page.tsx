import type { Metadata } from "next";
import DiningClient from "./DiningClient";

export const metadata: Metadata = {
  title: "Dining | Yakir's Bachelor Cruise",
  description:
    "Every place to eat aboard Freedom of the Seas — deck by deck, and what's included vs. an extra charge.",
};

export default function DiningPage() {
  return <DiningClient />;
}
