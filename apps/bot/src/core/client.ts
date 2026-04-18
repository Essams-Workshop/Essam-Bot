import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
dotenv.config();

export const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

export async function startClient() {
  const token = process.env.DISCORD_TOKEN;
  if (!token) throw new Error('DISCORD_TOKEN is not defined');
  await client.login(token);
}
