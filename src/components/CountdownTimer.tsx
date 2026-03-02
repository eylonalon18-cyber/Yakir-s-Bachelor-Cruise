"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-08-13T13:00:00-04:00"); // 1 PM EST

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const now = new Date();
  const diff = TARGET_DATE.getTime() - now.getTime();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function FlipUnit({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [flipping, setFlipping] = useState(false);
  const prevValue = useRef(value);

  useEffect(() => {
    if (prevValue.current !== value) {
      setFlipping(true);
      const timer = setTimeout(() => {
        setDisplayValue(value);
        setFlipping(false);
      }, 300);
      prevValue.current = value;
      return () => clearTimeout(timer);
    }
  }, [value]);

  const formatted = String(displayValue).padStart(label === "Days" ? 3 : 2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flip-card">
        <div className={`flip-card-inner ${flipping ? "flipping" : ""}`}>
          <div
            className="relative w-[4.5rem] h-20 sm:w-24 sm:h-28 md:w-28 md:h-32 rounded-xl overflow-hidden
            bg-gradient-to-b from-deep-blue to-navy border border-aqua/20 shadow-lg shadow-aqua/10
            flex items-center justify-center"
          >
            {/* Split line */}
            <div className="absolute inset-x-0 top-1/2 h-px bg-black/30 z-10" />
            <span className="text-2xl sm:text-4xl md:text-5xl font-bold font-[family-name:var(--font-playfair)] text-white glow-text tabular-nums">
              {formatted}
            </span>
          </div>
        </div>
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-aqua/80 uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

function Separator() {
  return (
    <div className="flex items-center self-start mt-6 sm:mt-8 md:mt-9 px-0.5">
      <span className="text-xl sm:text-3xl font-bold text-aqua/40">:</span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) {
    return (
      <div className="flex gap-2 sm:gap-3 justify-center flex-wrap">
        {["Days", "Hours", "Minutes", "Seconds"].map((label) => (
          <FlipUnit key={label} value={0} label={label} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="flex items-start gap-1.5 sm:gap-3 justify-center"
    >
      <FlipUnit value={timeLeft.days} label="Days" />
      <Separator />
      <FlipUnit value={timeLeft.hours} label="Hours" />
      <Separator />
      <FlipUnit value={timeLeft.minutes} label="Minutes" />
      <Separator />
      <FlipUnit value={timeLeft.seconds} label="Seconds" />
    </motion.div>
  );
}
