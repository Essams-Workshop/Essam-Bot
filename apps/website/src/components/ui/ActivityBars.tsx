"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type ActivityBarsProps = {
  values: number[];
  className?: string;
};

export function ActivityBars({ values, className }: ActivityBarsProps) {
  const max = Math.max(...values);

  return (
    <div className={cn("grid h-28 grid-cols-12 items-end gap-1", className)}>
      {values.map((value, index) => (
        <motion.div
          key={`${value}-${index}`}
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: `${(value / max) * 100}%`, opacity: 1 }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className={cn(
            "rounded-sm border border-accent/35 bg-gradient-to-t from-accent/20 to-accent/80",
            index === values.length - 1 ? "animate-glowPulse" : ""
          )}
        />
      ))}
    </div>
  );
}
