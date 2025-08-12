import React from "react";
import { assetPath } from "@/lib/utils";

type LoveCard = {
  title: string;
  detail: string;
  back?: string;
};

type ThingsILoveSectionProps = {
  photoSrc?: string;
  heading?: string;
  cards?: LoveCard[];
};

export default function ThingsILoveSection({
  photoSrc = "/aura-2.jpg",
  heading = "Things I love about you",
  cards = defaultCards,
}: ThingsILoveSectionProps) {
  return (
    <section className="max-w-5xl w-full">
      <div className="mb-4 flex items-end justify-between gap-4">
        <h3 className="display text-2xl md:text-4xl" style={{ color: "var(--rose-gold)" }}>
          {heading}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 grid-flow-dense gap-4 md:gap-6">
        <div className="polaroid lg:col-span-2 lg:row-span-2">
          <img src={assetPath(photoSrc)} alt="Aura" className="block w-full h-auto rounded-sm object-cover" />
          <span className="caption">Aura ♡</span>
        </div>
        {cards.map((c, i) => (
          <article key={`love-${i}`} className="flip-card h-full">
            <div className="flip-inner h-full" tabIndex={0}>
              <div className="flip-face love-card p-4 h-full">
                <div className="flex items-center gap-2 mb-2">
                  <div className="love-badge">{String(i + 1).padStart(2, "0")}</div>
                  <span aria-hidden>✨</span>
                </div>
                <div className="font-semibold mb-1">{c.title}</div>
                <p className="text-sm opacity-80">{c.detail}</p>
              </div>
              <div className="flip-face flip-back love-card p-4 h-full flex items-center justify-center text-center">
                <span className="text-sm opacity-80">{c.back ?? "★ You are loved — always."}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const defaultCards: LoveCard[] = [
  { title: "Your kindness", detail: "You make everyone feel seen and safe.", back: "★ Gentle heart, gentle soul." },
  { title: "Your laugh", detail: "It’s contagious—and it brightens the room.", back: "★ Your smile changes the day." },
  { title: "Your courage", detail: "You keep going, even when it’s hard.", back: "★ Brave in all the little ways." },
  { title: "Your eyes", detail: "They always shine when you’re excited.", back: "★ They sparkle when you’re happy." },
  { title: "Your thoughtfulness", detail: "The little things you remember mean so much.", back: "★ You notice what others miss." },
  { title: "Your curiosity", detail: "You ask, you learn, you grow.", back: "★ Never stop wondering." },
  { title: "Your calm", detail: "You’re my peace on the busiest days.", back: "★ My safe, quiet place." },
  { title: "Your support", detail: "You believe in me when I forget to.", back: "★ You always have my back." },
  { title: "Your dreams", detail: "The way you chase them inspires me too.", back: "★ I can’t wait to see them come true." },
  { title: "Your heart", detail: "Soft, warm, and full of love.", back: "★ A heart I’m grateful for." },
];


