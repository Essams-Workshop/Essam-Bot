"use client";

import { useEffect, useMemo, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

export function ScrambleText({ text, className }: ScrambleTextProps) {
  const [frame, setFrame] = useState(0);
  const letters = useMemo(() => text.split(""), [text]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setFrame((prev) => {
        if (prev >= letters.length + 8) {
          window.clearInterval(id);
          return prev;
        }
        return prev + 1;
      });
    }, 34);

    return () => window.clearInterval(id);
  }, [letters.length]);

  const output = letters
    .map((ch, index) => {
      if (ch === " ") {
        return " ";
      }
      if (index < frame) {
        return ch;
      }
      return CHARS[(frame + index) % CHARS.length];
    })
    .join("");

  return <span className={className}>{output}</span>;
}
