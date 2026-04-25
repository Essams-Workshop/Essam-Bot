import { cn } from "@/lib/cn";

type PanelProps = {
  title?: string;
  className?: string;
  children: React.ReactNode;
};

export function Panel({ title, className, children }: PanelProps) {
  return (
    <section className={cn("panel panel-cut rounded-md p-4 md:p-5", className)}>
      {title ? (
        <p className="mono mb-3 text-[10px] tracking-[0.22em] text-accent/80 md:text-xs">{title}</p>
      ) : null}
      {children}
    </section>
  );
}
