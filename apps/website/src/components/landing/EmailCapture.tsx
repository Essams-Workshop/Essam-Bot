"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";

type EmailCaptureProps = {
  claimed: number;
};

export function EmailCapture({ claimed }: EmailCaptureProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="container-shell pb-16">
      <div className="panel panel-cut rounded-md px-5 py-10 text-center md:px-8">
        <p className="mono text-xs tracking-[0.18em] text-accent">SECURE_YOUR_NODE</p>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-muted">
          Request early access to Essam Bot updates. {claimed} people have already joined the list.
        </p>

        <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-2xl flex-col gap-3 md:flex-row">
          <input
            type="email"
            required
            placeholder="ENTER_EMAIL_ADDRESS"
            className="mono w-full rounded-sm border border-accent/30 bg-panel px-4 py-3 text-xs tracking-[0.12em] text-text outline-none transition focus:border-accent focus:shadow-cyan"
          />
          <Button variant="primary" className="min-w-44 py-3">
            REQUEST_ACCESS
          </Button>
        </form>

        {submitted ? <p className="mono mt-4 text-xs tracking-[0.12em] text-ok">NODE_LOCKED // CHECK DISCORD DM</p> : null}
      </div>
    </section>
  );
}
