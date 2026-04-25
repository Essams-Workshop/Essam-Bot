import type { TerminalLine } from "@/lib/types";
import { Typewriter } from "@/components/fx/Typewriter";
import { Panel } from "@/components/ui/Panel";

type TerminalPanelProps = {
  title?: string;
  lines: TerminalLine[];
  compact?: boolean;
};

export function TerminalPanel({ title = "TERMINAL_OUT_V2.0", lines, compact = false }: TerminalPanelProps) {
  return (
    <Panel title={title} className={compact ? "h-full" : undefined}>
      <div className={`space-y-2 ${compact ? "text-[10px]" : "text-xs"}`}>
        {lines.map((line, index) => (
          <p key={`${line.t}-${index}`} className="mono leading-relaxed text-muted">
            [{line.t}]{" "}
            <span className={line.level === "WARN" ? "text-warn" : line.level === "SYS" ? "text-accent" : "text-ok"}>
              {line.level}
            </span>
            : <Typewriter text={line.msg} speedMs={compact ? 9 : 14} />
          </p>
        ))}
        <p className="mono text-accent">
          &gt; <span className="terminal-caret" />
        </p>
      </div>
    </Panel>
  );
}
