import Link from "next/link";

const columns = [
  {
    heading: "product",
    links: [
      { label: "dashboard", href: "/dashboard" },
      { label: "leaderboard", href: "/dashboard/leaderboard" },
      { label: "how_it_works", href: "#how-it-works" },
      { label: "faq", href: "#faq" }
    ]
  },
  {
    heading: "resources",
    links: [
      { label: "docs", href: "#" },
      { label: "changelog", href: "#" }
    ]
  },
  {
    heading: "connect",
    links: [
      { label: "github", href: "#" },
      { label: "x", href: "#" },
      { label: "email", href: "#" }
    ]
  }
];

export function Footer() {
  return (
    <footer className="container-shell border-t border-border pb-10 pt-12">
      <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="flex flex-col gap-3">
          <Link href="/" className="flex items-center gap-3 text-sm font-semibold tracking-[0.02em]">
            <span className="inline-flex h-7 w-7 items-center justify-center border border-accent bg-accent/10 text-[11px] font-bold text-accent">
              E
            </span>
            <span className="text-text">essam_bot</span>
          </Link>
          <p className="max-w-xs text-sm text-muted">
            <span className="text-accent">{"> "}</span>your personal automation bot. always on.
          </p>
          <div className="mt-2 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-faint">
            <span className="live-dot" /> system_online
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.heading} className="flex flex-col gap-3">
            <p className="text-[11px] uppercase tracking-[0.22em] text-faint">[ {column.heading} ]</p>
            <ul className="flex flex-col gap-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-[11px] uppercase tracking-[0.22em] text-faint md:flex-row md:items-center">
        <span>&copy; {new Date().getFullYear()} essam_bot</span>
        <span>build_hash 01af4c9</span>
        <span>made_with_care</span>
      </div>
    </footer>
  );
}
