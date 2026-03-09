import type { Metadata } from "next";
import MondayClient from "./MondayClient";

export const metadata: Metadata = {
  title: "Day 5 — Back to Reality | Yakir's Bachelor Cruise",
  description: "Monday, August 17 • Miami, Florida — The voyage ends, but the memories last forever.",
};

export default function MondayPage() {
  return <MondayClient />;
}
