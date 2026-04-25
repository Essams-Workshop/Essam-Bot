"use client";

import { motion } from "framer-motion";
import { ScrambleText } from "@/components/fx/ScrambleText";
import { Button } from "@/components/ui/Button";

type HeroProps = {
  status: string;
};

export function Hero({ status }: HeroProps) {
  return (
    <section className="container-shell pb-12 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="panel panel-cut rounded-md px-6 py-10 md:px-10 md:py-14"
      >
        <p className="mono mb-5 inline-flex rounded-sm border border-accent/50 px-3 py-1 text-[10px] tracking-[0.18em] text-accent">
          [ STATUS: {status} ]
        </p>
        <h1 className="mono text-glow text-5xl font-semibold tracking-tight text-accent md:text-7xl">
          <ScrambleText text="BUILDER" />
          <br />
          <ScrambleText text="COHORT #1" />
        </h1>
        <p className="mt-6 max-w-2xl text-sm text-muted md:text-base">
          The ultimate trial for elite developers. Real-time activity tracking, dynamic hierarchy, and neural-link Discord
          integration. Prove your output or face de-prioritization.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button variant="solid">CLAIM YOUR SEAT</Button>
          <Button>VIEW_LIVE_LOGS</Button>
        </div>
      </motion.div>
    </section>
  );
}
