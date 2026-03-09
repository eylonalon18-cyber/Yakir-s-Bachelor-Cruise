import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import OceanParticles from "@/components/OceanParticles";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yakir's Bachelor Cruise — Yakir's Bachelor Cruise",
  description:
    "Yakir's Bachelor Cruise • Freedom of the Seas • August 13–17, 2026 • 4-Night Bahamas & Perfect Day Cruise",
  keywords: "bachelor party, cruise, Freedom of the Seas, Bahamas, CocoCay, Bimini",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        <OceanParticles />
        <Header />
        <main className="relative z-10">{children}</main>
        <footer className="relative z-10 border-t border-white/10 py-4 text-center">
          <p className="text-white/40 text-sm">
            Yakir's Bachelor Cruise &bull; Yakir&apos;s Bachelor Cruise &bull; August 2026
          </p>
        </footer>
      </body>
    </html>
  );
}
