"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

export default function CountUp({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: {
  value: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(prefix + "0" + suffix);

  const numericPart = value.replace(/[^0-9.]/g, "");
  const num = parseFloat(numericPart);
  const isNumeric = !isNaN(num) && numericPart.length > 0;

  useEffect(() => {
    if (!isInView || !isNumeric) {
      if (!isNumeric && isInView) setDisplay(value);
      return;
    }

    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * num);

      const formatted = value.replace(numericPart, String(current));
      setDisplay(formatted);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    requestAnimationFrame(step);
  }, [isInView, isNumeric, num, numericPart, value, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {display}
    </motion.span>
  );
}
