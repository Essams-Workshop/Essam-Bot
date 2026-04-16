[![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)]()
[![Tanstack](https://img.shields.io/badge/-Tanstack-FF4154?style=flat&logo=reactquery&logoColor=white)]()
[![NestJS](https://img.shields.io/badge/-NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)]()
[![Discord.js](https://img.shields.io/badge/-Discord.js-5865F2?style=flat&logo=discord&logoColor=white)]()
[![Turborepo](https://img.shields.io/badge/-Turborepo-EF4444?style=flat&logo=turborepo&logoColor=white)]()
[![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white)]()
[![Redis](https://img.shields.io/badge/-Redis-DC382D?style=flat&logo=redis&logoColor=white)]()
[![Pulumi](https://img.shields.io/badge/-Pulumi-8A3391?style=flat&logo=pulumi&logoColor=white)]()
[![MkDocs](https://img.shields.io/badge/-MkDocs%20(Zensical)-000000?style=flat&logo=markdown&logoColor=white)]()

![Essam Bot Demo](./.github/demo/working-cat.gif)

<!-- TODO: REFACTOR BELOW -->
<!-- <div align="start">
  <img src="./.github/assets/eosc-logo.png" alt="Essam Open Source Community Logo" width="200" height="200"/>
</div> -->

<div align="start">
  <img src="./.github/assets/logo-ipsum.png" alt="Essam Open Source Community Logo" width="200" height=""/>
</div>

# Builder Cohort #1 — Coding Activity Tracker

> [!WARNING]
> This project is currently in **active development** as part of Builder Cohort #1. 
> It is undergoing continuous iteration and is not yet ready for a final release. 
> We are actively building, testing, and working on the project
>
> This project serves as a collaborative environment to simulate a real dev team 
> workflow, helping contributors gain practical experience while building a 
> real-world Discord bot and web system.
>
> **Vision**: To create a space where developers gain real experience by 
> working on collaborative, open-source projects. This is the first cohort.

> Track real coding activity, not just chat. Build, rank, and grow together.

Builder Cohort #1 is a community-built system designed to track real coding 
activity and reflect it through a ranking system inside a Discord server. 
Instead of rewarding chat activity, this focuses on actual building. Users
gain ranks based on coding contributions, which can be viewed both in Discord
and through a dedicated web dashboard.

This project is being developed collaboratively, using a modern monorepo approach
to house our bot, api's, site, and more. 

- **Frontend:** Tanstack Query, Tanstack Router, React
- **Backend:** NestJS
- **Discord Bot:** Discord.js (`Essam Bot`)
- **Database:** PostgreSQL, Redis
- **Documentation:** MkDocs (Zensical)
- **Infrastructure (IaC):** Pulumi
- **CI/CD:** GitHub Actions

## Table of Contents

- [Builder Cohort #1 — Coding Activity Tracker](#builder-cohort-1--coding-activity-tracker)
  - [Table of Contents](#table-of-contents)
  - [Architecture & Features Overview](#architecture--features-overview)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Project Workflow & Documentation](#project-workflow--documentation)
  - [System Requirements](#system-requirements)
  - [Contact/Socials](#contactsocials)
  - [Contributing](#contributing)

## Architecture & Features Overview

Here are the core features and architectural decisions for the Coding Activity Tracker:

1. **Coding Activity Tracking**: Tracks user contributions (commits, activity, 
   or manual logs) and stores progress over time.
2. **Dynamic Ranking System**: Implements a clear progression system where 
   users earn dynamic ranks based on actual development activity.
3. **Discord Bot (Discord.js)**: Allows users to view personal stats, check
   the leaderboard, and monitor their rank and progress directly within the server.
4. **Web Dashboard (Next.js & Tailwind CSS)**: A frontend interface to view 
   detailed stats, global leaderboards, and extended user profiles.
5. **Monorepo Structure (Turborepo)**: Organized into distinct applications 
   (`apps/bot`, `apps/api`, `apps/web`) and shared packages 
   (`packages/db`, `packages/types`).

## Installation

> **TODO**: Write proper information about the installation steps for Essam Bot.

## Contact/Socials for Hazel

> **TODO**: Write proper information about the contact/socials for Essam Bot.

## Contributing

Contributors are welcome for Essam Bot. Read [CONTRIBUTING.md](/.github/CONTRIBUTING.md) 
for guidelines and best practices.

With that being said, all the best, and to the moon 🚀!
