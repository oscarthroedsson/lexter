// src/motion/hooks/useTypewriter.ts
import { useEffect } from "react";
import { animate, MotionValue } from "motion";

export const useTypewriter = (text: string, isBot: boolean = false) => {
  const value = { motion: new MotionValue() };

  useEffect(() => {
    if (isBot) {
      const controls = animate(value.motion, text.length, {
        type: "tween",
        duration: text.length * 0.05,
        ease: "linear",
        onUpdate: (latest) => {
          const displayLength = Math.round(latest);
          value.motion.set(text.slice(0, displayLength));
        },
      });

      return () => controls.stop();
    }
  }, [text, isBot]);

  return value.motion;
};
