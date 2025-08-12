"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  delay?: number;
}

export const AnimatedText = ({
  text,
  className,
  wordClassName,
  charClassName,
  delay = 0,
}: AnimatedTextProps) => {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.02,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 18, stiffness: 140 },
    },
    hidden: {
      opacity: 0,
      x: -10,
      y: 0,
      filter: "blur(10px)",
      transition: { type: "spring", damping: 18, stiffness: 140 },
    },
  };

  const wordWrapper: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.02 } },
  };

  const tokens = text.split(/(\s+)/);

  return (
    <motion.div
      className={cn("overflow-visible whitespace-pre-wrap", className)}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {tokens.map((token, idx) => {
        if (/^\s+$/.test(token)) {
          return <span key={`space-${idx}`}>{token}</span>;
        }
        const letters = token.split("");
        return (
          <motion.span key={`word-${idx}`} variants={wordWrapper} className={cn("inline-block", wordClassName)}>
            {letters.map((char, cidx) => (
              <motion.span
                key={`char-${idx}-${cidx}`}
                variants={child}
                className={cn("inline-block", charClassName)}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        );
      })}
    </motion.div>
  );
};

export default AnimatedText;


