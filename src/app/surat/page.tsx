"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimatedText from "@/components/animated-text";
import AudioPlayer from "@/components/audio-player";
import ThingsILoveSection from "@/components/things-i-love";
import BirthdayWishesSection from "@/components/birthday-wishes";
import LastWishes from "@/components/last-wishes";

export default function SuratPage() {
  const fullText =
    "Seventeen.\nToday, the world celebrates the presence of someone truly remarkable—you, Aura. Turning 17 is more than just adding another year; it’s stepping into a chapter filled with dreams waiting to unfold, and stories yet to be written.\n\nYou’ve come so far, carrying kindness, laughter, and light that never fails to warm the hearts of those around you. May this year bring you closer to your dreams, fill your days with joy, and give you endless reasons to be grateful. Happy 17th Birthday, Aura. The world is brighter with you in it. ";

  // Cards are provided by the ThingsILoveSection component by default.

  return (
    <main className="min-h-screen flex flex-col items-center p-6 gap-10">
      {/* Top two-column section: photo + letter */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start max-w-5xl w-full">
        {/* Photo side */}
        <div className="relative md:self-center md:translate-y-4">
          <div className="polaroid">
            <img
              src="/photobooth-1.jpg"
              alt="Photobooth portrait"
              className="block w-full h-auto rounded-sm object-cover"
            />
            <span className="caption">us, being silly ♡</span>
          </div>
          <span className="photo-tape" aria-hidden />
        </div>

        {/* Letter side */}
        <div className="scrapbook-note px-6 py-6 md:px-8 md:py-8">
          <h2 className="display text-3xl md:text-5xl mb-4 text-[var(--rose-gold)]">
            For Aura ✨
          </h2>
          <AnimatedText
            text={fullText}
            className="text-lg md:text-xl leading-relaxed text-[var(--foreground)]"
            charClassName="[word-spacing:0.2rem]"
            delay={0.1}
          />
          <div className="mt-6">
            <AudioPlayer src="/its-just-us.mp3" title="It’s Just Us" />
          </div>
          <div className="mt-6 p-4 rounded-xl bg-[var(--muted)]/60 border border-[color:rgba(0,0,0,0.06)]">
            <div className="display text-[var(--rose-gold)] mb-1 text-lg">Did you know?</div>
            <p className="text-sm md:text-base opacity-80">
              This song is like our little secret world—soft, warm, and just us.
            </p>
          </div>
        </div>
      </div>

      {/* Things I love about you – placed below the letter */}
      <ThingsILoveSection />

      {/* Birthday wishes */}
      <BirthdayWishesSection />

      {/* Last wishes (finale) */}
      <LastWishes />
    </main>
  );
}


