"use client";

export default function SectionWave({ flip = false }: { flip?: boolean }) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""}`}>
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="w-full h-10 sm:h-14"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,30 C360,55 720,5 1080,30 C1260,42.5 1380,25 1440,30 L1440,60 L0,60 Z"
          fill="rgba(0,188,212,0.05)"
        />
        <path
          d="M0,40 C240,20 480,55 720,35 C960,15 1200,50 1440,35 L1440,60 L0,60 Z"
          fill="rgba(21,101,192,0.06)"
        />
      </svg>
    </div>
  );
}
