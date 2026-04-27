import Link from "next/link";
import { SideNav } from "@/components/dashboard/SideNav";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="container-shell py-8">
      <header className="mb-6 flex items-center justify-between border-b border-border pb-4">
        <div>
          <p className="text-[11px] uppercase tracking-[0.18em] text-accent">[ coding_tracker ]</p>
          <h1 className="mt-1 text-xl font-semibold text-text">dashboard</h1>
        </div>
        <Link href="/" className="text-xs uppercase tracking-[0.14em] text-muted hover:text-accent">
          back_to_landing
        </Link>
      </header>
      <div className="grid gap-4 md:grid-cols-[224px_1fr]">
        <SideNav />
        <section>{children}</section>
      </div>
    </main>
  );
}
