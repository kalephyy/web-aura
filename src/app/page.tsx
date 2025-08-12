"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // lock scroll for home page
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";

    const container = containerRef.current;
    if (!container) return;
    const createSparkle = () => {
      const s = document.createElement("span");
      s.className = "sparkle";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 100 + "%";
      s.style.opacity = (0.6 + Math.random() * 0.4).toString();
      const size = 10 + Math.random() * 16; // 10px - 26px
      s.style.width = `${size}px`;
      s.style.height = `${size}px`;
      container.appendChild(s);
      setTimeout(() => s.remove(), 6500);
    };
    const id = setInterval(createSparkle, 220);
    for (let i = 0; i < 20; i++) createSparkle();
    return () => {
      clearInterval(id);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, []);

  return (
    <main ref={containerRef} className="relative h-dvh overflow-hidden flex items-center justify-center p-6">
      <div className="fade-in max-w-3xl w-full text-center px-6 py-10 -translate-y-6 md:-translate-y-10">
        <div className="mx-auto mb-4 inline-block rounded-2xl">
          <Link href="/surat" aria-label="Open the letter" className="group block">
            <Image
              src="/Mail-Photos.png"
              alt="Envelope with a heart seal"
              width={520}
              height={320}
              className="rounded-xl cursor-pointer transition-transform duration-300 group-hover:-translate-y-1"
              priority
            />
          </Link>
        </div>
        <p className="hint-bounce text-sm md:text-base opacity-80 mb-6">
          Click the envelope to open the letter 💌
        </p>
        <h1 className="display text-4xl md:text-6xl leading-tight mb-6 text-[var(--foreground)]">
          Happy 17th Birthday, <span className="text-[var(--rose-gold)]">Aura</span> 💕
        </h1>
        <p className="text-base md:text-lg opacity-80 mb-8">
          A small gift for you: a digital love letter and little fun facts.
        </p>
        <div className="flex items-center justify-center gap-4" />
      </div>
    </main>
  );
}
