"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const STORAGE_KEY = "ybc-app-setup-done";

const steps = [
  {
    body: (
      <>
        Download the{" "}
        <span className="text-white font-semibold">Royal Caribbean International</span>{" "}
        app.
      </>
    ),
  },
  {
    body: (
      <>
        Sign in, or <span className="text-white font-semibold">create an account</span>.
      </>
    ),
  },
  {
    body: (
      <>
        Enter your <span className="text-white font-semibold">reservation number</span> —
        find it on the{" "}
        <Link
          href="/crew"
          className="text-gold underline decoration-gold/40 underline-offset-2 hover:text-gold/80"
        >
          Crew page
        </Link>{" "}
        next to your name.
      </>
    ),
  },
];

export default function AppReminderModal() {
  const [open, setOpen] = useState(false);

  // Show only if the user hasn't completed setup on this device
  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  // Lock background scroll while the gate is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const complete = () => {
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore storage errors (private mode, etc.) */
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="app-reminder-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="glass-card rounded-3xl border-gold/25 shadow-2xl shadow-black/50 max-w-lg w-full p-7 sm:p-9 text-center max-h-[90vh] overflow-y-auto"
          >
            <Image
              src="/logo.png"
              alt="Yakir's Bachelor Trip logo"
              width={90}
              height={95}
              priority
              className="w-16 h-auto mx-auto mb-4"
            />

            <h2
              id="app-reminder-title"
              className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-white mb-2"
            >
              Before You Set Sail ⚓
            </h2>
            <p className="text-white/60 text-sm sm:text-base mb-7">
              A few quick things so you&apos;re ready to board:
            </p>

            <ol className="text-left space-y-4 mb-8">
              {steps.map((step, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-aqua/15 border border-aqua/30 text-aqua text-sm font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-white/80 text-sm sm:text-base leading-relaxed pt-0.5">
                    {step.body}
                  </span>
                </li>
              ))}
            </ol>

            <button
              onClick={complete}
              className="w-full px-8 py-3 rounded-full bg-gradient-to-r from-aqua to-teal text-navy font-bold text-sm uppercase tracking-wider hover:shadow-lg hover:shadow-aqua/25 hover:scale-[1.02] transition-all duration-200"
            >
              Completed ✓
            </button>
            <p className="text-white/30 text-xs mt-4">
              You won&apos;t see this again on this device.
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
