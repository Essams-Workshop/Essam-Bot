import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "solid" | "ghost";
  className?: string;
  children: React.ReactNode;
};

const base =
  "mono inline-flex items-center justify-center rounded-sm border px-4 py-2 text-xs tracking-[0.16em] transition-all duration-200";

export function Button({ href, variant = "ghost", className, children }: ButtonProps) {
  const styles =
    variant === "solid"
      ? "border-accent bg-accent text-bg hover:shadow-cyan"
      : "border-accent/50 bg-transparent text-accent hover:border-accent hover:bg-accent/10";

  if (href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {children}
      </Link>
    );
  }

  return <button className={cn(base, styles, className)}>{children}</button>;
}
