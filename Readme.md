# Builder Cohort #1 — Coding Activity Tracker

## Overview

This project is a community-built system designed to track real coding activity and reflect it through a ranking system inside a Discord server.

Instead of rewarding chat activity, this focuses on actual building. Users gain ranks based on coding contributions, which can be viewed both in Discord and through a web dashboard.

This project is being developed collaboratively as part of Builder Cohort #1.

---

## Core Features

### Coding Activity Tracking
- Track user contributions (commits, activity, or manual logs)
- Store and update progress over time

### Ranking System
- Dynamic ranks based on activity
- Clear progression system

### Discord Bot
- View personal stats
- View leaderboard
- Check rank and progress

### Web Dashboard
- View detailed stats
- Leaderboards
- User profiles

---

## Tech Stack

### Backend
- TypeScript
- discord.js (Discord bot)
- TBD

### Database
- TBD

### Frontend
- Next.js
- TypeScript
- Tailwind CSS

### Tooling
- Turborepo (monorepo)
- pnpm
- ESLint + Prettier

---

## Project Structure
```
apps/
bot/ → Discord bot
api/ → Backend API (Fastify, TBD)
web/ → Dashboard (Next.js)

packages/
db/ → Prisma schema + client
types/ → Shared types
```

---

## Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm
- Git

### Setup (Initial)

1. Clone the repository
2. Install dependencies:
   pnpm install
3. Set up environment variables
4. Start development:
   pnpm dev

More detailed setup instructions will be added soon.

---

## Contributing

This is a collaborative project open to all skill levels.

### How to Contribute
1. Check GitHub Issues
2. Pick a task
3. Create a branch
4. Submit a PR

### Guidelines
- Keep changes focused
- Write clean, readable code
- Ask for help when needed
- Communicate progress

---

## Workflow

- Tasks are managed through GitHub Issues
- Work is done through pull requests
- Code is reviewed before merging

---

## Goals

- Build a real-world Discord bot system
- Simulate a real dev team environment
- Help contributors gain practical experience

---

## Vision

To create a space where developers gain real experience by working on collaborative, open-source projects.

This is the first cohort.

---

## Status

Active development