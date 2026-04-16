import { Client, Events, GatewayIntentBits } from "discord.js";
import "dotenv/config";

const client: Client<boolean> = new Client({
  intents: [GatewayIntentBits.Guilds],
});

client.once(Events.ClientReady, (readyClient: Client<true>) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.login(process.env.DISCORD_BOT);
