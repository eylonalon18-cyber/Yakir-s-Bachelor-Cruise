"use client";

export default function WaveFooter() {
  return (
    <footer className="relative mt-auto">
      <div className="wave-container">
        <svg
          className="wave-svg"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="wave-path-1"
            d="M0,40 C150,65 350,10 500,35 C650,60 800,15 1000,40 C1200,65 1350,20 1440,40 L1440,80 L0,80 Z"
            fill="rgba(0,188,212,0.08)"
          />
          <path
            className="wave-path-2"
            d="M0,50 C200,25 400,65 600,40 C800,15 1000,60 1200,35 C1350,15 1400,50 1440,45 L1440,80 L0,80 Z"
            fill="rgba(21,101,192,0.1)"
          />
          <path
            className="wave-path-3"
            d="M0,60 C180,40 360,70 540,50 C720,30 900,65 1080,45 C1260,25 1380,55 1440,50 L1440,80 L0,80 Z"
            fill="rgba(0,151,167,0.08)"
          />
        </svg>
      </div>
      <div className="bg-navy/80 py-6 text-center">
        <p className="text-white/40 text-sm font-[family-name:var(--font-outfit)]">
          Yakir's Bachelor Cruise &bull; Yakir&apos;s Bachelor Cruise &bull; August 2026
        </p>
      </div>
    </footer>
  );
}
