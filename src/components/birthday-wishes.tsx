import AnimatedText from "@/components/animated-text";

type BirthdayWishesSectionProps = {
  heading?: string;
  text?: string;
};

const defaultWishes = `Seventeen looks so beautiful on you.
Today is all about celebrating the amazing person you are—your kindness, your smile, and the way you light up every room you walk into.

May this year be the start of your happiest chapter yet.
May your days be filled with laughter, your nights with peace, and your heart with endless love.

Here’s to new adventures, dreams coming true, and moments you’ll remember forever.
The world is better with you in it, and I’m so lucky to see you shine.

Happy Birthday, my love.
You deserve nothing less than the absolute best.`;

export default function BirthdayWishesSection({
  heading = "Birthday wishes",
  text = defaultWishes,
}: BirthdayWishesSectionProps) {
  return (
    <section className="max-w-5xl w-full">
      <h3 className="display text-2xl md:text-4xl mb-4" style={{ color: "var(--rose-gold)" }}>
        {heading}
      </h3>
      <div className="scrapbook-note px-6 py-6 md:px-8 md:py-8">
        <AnimatedText
          text={text}
          className="text-lg md:text-xl leading-relaxed text-[var(--foreground)]"
          charClassName="[word-spacing:0.2rem]"
          delay={0.08}
        />
      </div>
    </section>
  );
}


