"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  type: "bubble" | "sparkle";
}

export default function OceanParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function createParticles() {
      particles = [];
      const count = Math.floor(window.innerWidth / 15);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1.5,
          speedX: (Math.random() - 0.5) * 0.4,
          speedY: -(Math.random() * 0.5 + 0.15),
          opacity: Math.random() * 0.5 + 0.2,
          type: Math.random() > 0.6 ? "sparkle" : "bubble",
        });
      }
    }

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        ctx.save();

        if (p.type === "bubble") {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 188, 212, ${p.opacity})`;
          ctx.fill();
          // Subtle ring
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size + 1, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 188, 212, ${p.opacity * 0.3})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        } else {
          // Sparkle — small cross
          ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`;
          ctx.lineWidth = 0.8;
          const s = p.size * 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x - s, p.y);
          ctx.lineTo(p.x + s, p.y);
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x, p.y + s);
          ctx.stroke();
        }

        ctx.restore();

        // Move
        p.x += p.speedX;
        p.y += p.speedY;

        // Slight wobble
        p.x += Math.sin(Date.now() * 0.001 + p.y * 0.01) * 0.15;

        // Reset when off screen
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.85 }}
    />
  );
}
