import { Panel } from "@/components/ui/Panel";
import type { UserInfo } from "@/lib/types";

type ProfileCardProps = {
  user: UserInfo;
};

export function ProfileCard({ user }: ProfileCardProps) {
  return (
    <Panel className="h-full">
      <div className="flex items-start gap-4">
        <div className="h-16 w-16 rounded-sm border border-accent/45 bg-gradient-to-br from-accent/20 to-transparent" />
        <div className="mono">
          <p className="text-xs tracking-[0.14em] text-accent">{user.handle}</p>
          <p className="mt-1 text-[11px] text-muted">LEVEL {user.level} // ELITE_ACCESS</p>
          <div className="mt-3 flex gap-2 text-[10px]">
            <span className="rounded-sm border border-accent/45 px-2 py-1 text-accent">SYNC:{user.sync}%</span>
            <span className="rounded-sm border border-accent/45 px-2 py-1 text-accent">RANK:#{String(user.rank).padStart(3, "0")}</span>
          </div>
        </div>
      </div>
      <p className="mono mt-4 text-[10px] tracking-[0.16em] text-muted">SESS_ID: {user.sessionId}</p>
    </Panel>
  );
}
