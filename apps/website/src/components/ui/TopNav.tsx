import Link from "next/link";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { label: "how_it_works", href: "#how-it-works" },
  { label: "faq", href: "#faq" },
  { label: "dashboard", href: "/dashboard" }
];

export function TopNav() {
  return (
    <header className="container-shell pt-6">
      <div className="flex items-center justify-between border-b border-border pb-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.02em]">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-none border border-accent bg-accent/10 text-[11px] font-bold text-accent">
            E
          </span>
          <span className="text-text">essam_bot</span>
          <span className="hidden text-faint sm:inline">v0.1</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
            >
              <span className="text-faint transition-colors group-hover:text-accent">[</span>
              {item.label}
              <span className="text-faint transition-colors group-hover:text-accent">]</span>
            </Link>
          ))}
        </nav>

        <Button href="/dashboard" variant="primary">
          open_live_demo
          <span aria-hidden="true">-&gt;</span>
        </Button>
      </div>
    </header>
  );
}
