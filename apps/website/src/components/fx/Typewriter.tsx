"use client";

import { useEffect, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number;
  className?: string;
};

export function Typewriter({ text, speedMs = 20, className }: TypewriterProps) {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setVisible((curr) => {
        if (curr >= text.length) {
          window.clearInterval(id);
          return curr;
        }
        return curr + 1;
      });
    }, speedMs);

    return () => window.clearInterval(id);
  }, [speedMs, text]);

  return <span className={className}>{text.slice(0, visible)}</span>;
}
