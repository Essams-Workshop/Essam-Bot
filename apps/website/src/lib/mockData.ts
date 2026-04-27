import type { MockData } from "@/lib/types";

export const mock: MockData = {
  cohort: {
    status: "LIVE_DEMO_ONLINE",
    seats: 128,
    claimed: 87,
    uptime: 99.9
  },
  user: {
    handle: "OPERATOR_KAI",
    level: 42,
    rank: 4,
    sync: 98,
    sessionId: "882-AX-9"
  },
  stats: {
    throughputGbs: 1.2,
    coreLoadPct: 14.8
  },
  activity: [12, 20, 14, 28, 18, 34, 22, 30, 26, 44, 38, 52],
  leaderboard: [
    { rank: 1, handle: "ZERO_COOL", points: 99204 },
    { rank: 2, handle: "ACID_BURN", points: 94112 },
    { rank: 3, handle: "KAI_ROOT", points: 88009, you: true },
    { rank: 4, handle: "CEREAL_KILLER", points: 76420 }
  ],
  terminal: [
    { t: "14:22:01", level: "INFO", msg: "Handshake established with node_04." },
    { t: "14:22:04", level: "INFO", msg: "Encrypted packet stream verified. CRC OK." },
    { t: "14:22:08", level: "WARN", msg: "Unauthorized access attempt detected in sub-sector G-12." },
    { t: "14:22:15", level: "INFO", msg: "Firewall counter-protocols initiated." },
    { t: "14:23:42", level: "SYS", msg: "Waiting for operator command..." }
  ],
  features: [
    {
      title: "BOT_ACTIVITY",
      description: "Review recent bot events and command output in one focused feed."
    },
    {
      title: "SYSTEM_HEALTH",
      description: "Track runtime signals and key health metrics to keep Essam Bot stable."
    },
    {
      title: "QUICK_COMMANDS",
      description: "Run common bot actions instantly from the dashboard without context switching."
    }
  ]
};
