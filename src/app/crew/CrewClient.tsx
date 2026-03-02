"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWave from "@/components/SectionWave";
import { AnchorDecoration, CompassDecoration, ShipWheelDecoration, CocktailDecoration, BeerDecoration, FishSchool, StarField } from "@/components/Decorations";

interface CrewMember {
  name: string;
  role: string;
  image: string;
  highlight?: "gold" | "aqua";
  note?: string;
}

const crew: CrewMember[] = [
  {
    name: "Yakir Eylon",
    role: "The Groom",
    image: "/crew/yakir.jpg",
    highlight: "gold",
  },
  {
    name: "Alon Eylon",
    role: "Brother / Best Man",
    image: "/crew/alon.jpg",
    highlight: "aqua",
  },
  {
    name: "Yaron Eylon",
    role: "Groomsman",
    image: "/crew/yaron.jpg",
  },
  {
    name: "Ari Nahum",
    role: "Groomsman",
    image: "/crew/ari.jpg",
  },
  {
    name: "Cade Zaris",
    role: "Groomsman",
    image: "/crew/cade.jpg",
  },
  {
    name: "Dean Kenny",
    role: "Groomsman",
    image: "/crew/dean.jpg",
  },
  {
    name: "Jake Marcus",
    role: "Groomsman",
    image: "/crew/jake.jpg",
  },
  {
    name: "Jett Cohen",
    role: "Groomsman",
    image: "/crew/jett.jpg",
  },
  {
    name: "Justin Adler",
    role: "Groomsman",
    image: "/crew/justin-a.jpg",
  },
  {
    name: "Len Asari",
    role: "Groomsman",
    image: "/crew/len.jpg",
  },
  {
    name: "Matt Petcove",
    role: "Groomsman",
    image: "/crew/matt.jpg",
  },
  {
    name: "Nhat Tran",
    role: "Groomsman",
    image: "/crew/nhat.jpg",
  },
  {
    name: "Orel Alia",
    role: "In-Law to Be BH",
    image: "/crew/orel.jpg",
  },
  {
    name: "Tyler Esposito",
    role: "Groomsman",
    image: "/crew/tyler.jpg",
  },
  {
    name: "Justin Prechodko",
    role: "Groomsman",
    image: "/crew/justin-p.jpg",
    note: "GTD / TBD",
  },
];

function PlaceholderAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");
  return (
    <div className="w-full h-full bg-gradient-to-br from-deep-blue to-navy flex items-center justify-center">
      <span className="text-3xl sm:text-4xl font-bold text-white/30 font-[family-name:var(--font-playfair)]">
        {initials}
      </span>
    </div>
  );
}

function getBorderClass(highlight?: "gold" | "aqua") {
  if (highlight === "gold") return "border-gold/50 shadow-gold/20";
  if (highlight === "aqua") return "border-aqua/50 shadow-aqua/20";
  return "border-aqua/15";
}

function getRoleClass(highlight?: "gold" | "aqua") {
  if (highlight === "gold") return "text-gold";
  if (highlight === "aqua") return "text-aqua";
  return "text-aqua/70";
}

export default function CrewClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 mesh-gradient-1 text-center overflow-hidden">
        <StarField />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-aqua text-sm font-semibold tracking-widest uppercase mb-4
              bg-aqua/10 px-4 py-1.5 rounded-full border border-aqua/20"
          >
            15 Legends
          </motion.span>
          <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl md:text-6xl font-bold text-white glow-text mb-4">
            The Crew
          </h1>
          <p className="text-white/50 text-base sm:text-lg max-w-md mx-auto">
            The brotherhood setting sail on The Final Voyage
          </p>
        </motion.div>
      </section>

      <SectionWave />

      {/* Crew Grid */}
      <section className="relative mesh-gradient-2 py-16 sm:py-24 overflow-hidden">
        <CompassDecoration className="absolute top-20 left-6 hidden lg:block" size={130} />
        <AnchorDecoration className="absolute top-[25%] right-8 hidden lg:block" size={100} />
        <CocktailDecoration className="absolute top-[40%] left-8 hidden lg:block" size={90} />
        <BeerDecoration className="absolute top-[55%] right-10 hidden lg:block" size={85} />
        <FishSchool className="absolute top-[70%] left-4 hidden lg:block" size={140} />
        <ShipWheelDecoration className="absolute bottom-24 right-12 hidden lg:block" size={110} />
        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* Groom — featured large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="text-center">
              <div
                className={`relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mx-auto mb-4
                  border-[3px] shadow-lg ${getBorderClass("gold")} pulse-glow`}
              >
                <Image
                  src={crew[0].image}
                  alt={crew[0].name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <PlaceholderAvatar name={crew[0].name} />
              </div>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-1">
                {crew[0].name}
              </h2>
              <span className="text-gold font-semibold text-sm uppercase tracking-widest">
                👑 {crew[0].role}
              </span>
            </div>
          </motion.div>

          {/* Best Man — slightly featured */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-20"
          >
            <div className="text-center">
              <div
                className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-4
                  border-[3px] shadow-lg ${getBorderClass("aqua")}`}
              >
                <Image
                  src={crew[1].image}
                  alt={crew[1].name}
                  fill
                  className="object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <PlaceholderAvatar name={crew[1].name} />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl font-bold text-white mb-1">
                {crew[1].name}
              </h3>
              <span className="text-aqua font-semibold text-sm uppercase tracking-widest">
                {crew[1].role}
              </span>
            </div>
          </motion.div>

          {/* Rest of the crew */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {crew.slice(2).map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="text-center group"
              >
                <div
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden mx-auto mb-3
                    border-2 ${getBorderClass(member.highlight)}
                    group-hover:border-aqua/40 group-hover:shadow-lg group-hover:shadow-aqua/15 transition-all duration-300`}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                  <PlaceholderAvatar name={member.name} />
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-base sm:text-lg font-semibold text-white mb-0.5">
                  {member.name}
                </h3>
                <span className={`text-xs font-medium uppercase tracking-wider ${getRoleClass(member.highlight)}`}>
                  {member.role}
                </span>
                {member.note && (
                  <span className="block text-xs text-white/30 mt-1 italic">{member.note}</span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
