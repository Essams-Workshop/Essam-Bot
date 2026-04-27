import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-none font-medium tracking-tight transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg";

const sizeStyles: Record<NonNullable<ButtonProps["size"]>, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-sm"
};

const variantStyles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-accent text-bg border border-accent hover:bg-accentSoft hover:shadow-cyan",
  secondary: "border border-borderStrong bg-transparent text-text hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-accent"
};

export function Button({ href, variant = "primary", size = "md", className, children }: ButtonProps) {
  const classes = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
