"use client";

import { useEffect, useState } from "react";
import { Panel } from "@/components/ui/Panel";

type StatCardProps = {
  title: string;
  value: number;
  suffix?: string;
};

export function StatCard({ title, value, suffix = "" }: StatCardProps) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 650;
    const start = performance.now();
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setDisplay(value * progress);
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [value]);

  return (
    <Panel title={title}>
      <p className="mono text-3xl text-accent text-glow">{display.toFixed(1)}</p>
      <p className="mono mt-1 text-xs tracking-[0.12em] text-muted">{suffix}</p>
    </Panel>
  );
}
