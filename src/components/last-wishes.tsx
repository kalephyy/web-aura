"use client";

import { useEffect, useRef } from "react";
import AnimatedText from "@/components/animated-text";
import { assetPath } from "@/lib/utils";

type LastWishesProps = {
  heading?: string;
  text?: string;
};

const defaultText = `Thank you for being you.
Thank you for the warmth, the laughter, and the gentle love you give every day.

As this page ends, our story doesn’t—it keeps going, more beautiful with time.
Here’s to us, to what we have, and everything we’ll build together.

Happy birthday, Aura. I love you—always.`;

export default function LastWishes({ heading = "Last wishes", text = defaultText }: LastWishesProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // create a few confetti dots
    const colors = ["#F3D0D7", "#FFEFEF", "#F0EBE3", "#d9a55a"]; // palette accents
    const dots: HTMLSpanElement[] = [];
    for (let i = 0; i < 30; i++) {
      const s = document.createElement("span");
      s.className = "confetti-dot";
      s.style.left = Math.random() * 100 + "%";
      s.style.top = Math.random() * 10 + "%";
      s.style.background = colors[i % colors.length];
      s.style.animationDuration = 6 + Math.random() * 5 + "s";
      s.style.animationDelay = (Math.random() * 2).toFixed(2) + "s";
      el.appendChild(s);
      dots.push(s);
    }
    return () => {
      dots.forEach((d) => d.remove());
    };
  }, []);

  return (
    <section className="max-w-5xl w-full">
      <h3 className="display text-2xl md:text-4xl mb-4" style={{ color: "var(--rose-gold)" }}>
        {heading}
      </h3>
      <div ref={ref} className="celebrate px-6 py-8 md:px-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-start">
          <div className="polaroid hidden md:block">
            <img src={assetPath('/photobooth-2.jpg')} alt="Photobooth 2" className="block w-full h-auto rounded-sm object-cover" />
            <span className="caption">more memories ♡</span>
          </div>
          <div className="polaroid hidden md:block">
            <img src={assetPath('/photobooth-3.jpeg')} alt="Photobooth 3" className="block w-full h-auto rounded-sm object-cover" />
            <span className="caption">and more smiles ♡</span>
          </div>
          <div className="polaroid hidden md:block">
            <img src={assetPath('/photobooth-4.jpeg')} alt="Photobooth 4" className="block w-full h-auto rounded-sm object-cover" />
            <span className="caption">never-ending giggles ♡</span>
          </div>
          <div className="md:col-span-3 flex justify-center">
            <div className="max-w-2xl w-full">
              <AnimatedText
                text={text}
                className="text-lg md:text-xl leading-relaxed text-[var(--foreground)] text-center"
                charClassName="[word-spacing:0.2rem]"
                delay={0.06}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


