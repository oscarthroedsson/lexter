import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

interface TypeWriterText_Props {
  text: string;
  shouldAnimate?: boolean;
}

export default function TypeWriterText({ text, shouldAnimate = true }: TypeWriterText_Props) {
  const count = useMotionValue(shouldAnimate ? 0 : text.length);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const displayText = useTransform(rounded, (latest) => text.slice(0, latest));

  useEffect(() => {
    if (!shouldAnimate) {
      count.set(text.length);
      return;
    }

    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, [text, animate]);

  return (
    <p>
      <motion.p>{displayText}</motion.p>
    </p>
  );
}
