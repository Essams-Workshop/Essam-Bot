import {
  Client,
  GatewayIntentBits,
  Events,
  Collection,
  MessageFlags,
} from "discord.js";
import fs from "node:fs";
import path from "node:path";
import * as dotenv from "dotenv";
import { Command } from "../types/command.ts";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../../../envs/bot.env") });

export const client: Client<boolean> = new Client({
  intents: [GatewayIntentBits.Guilds],
});

export async function startClient() {
  const token = process.env.BOT_TOKEN;
  if (!token) throw new Error("BOT_TOKEN is not defined");
  client.once(Events.ClientReady, (readyClient: Client<true>) => {
    console.log(`Logged in as ${readyClient.user.tag}`);
  });
  await client.login(token);

  client.commands = new Collection<string, Command>();

  const foldersPath = path.join(__dirname, "../commands");
  const commandFolders = fs.readdirSync(foldersPath);

  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);

    const commandFiles = fs
      .readdirSync(commandsPath)
      // TODO: remove link from link.command.ts to .command.ts
      .filter((file) => file.endsWith("link.command.ts"));

    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = (await import(filePath)).default;
      if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command);
      } else {
        console.log(
          `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
        );
      }
    }
  }

  client.on(Events.InteractionCreate, async (interaction) => {
    if (!interaction.isChatInputCommand()) return;
    console.log(interaction);
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
      console.error(
        `No command matching ${interaction.commandName} was found.`,
      );
      return;
    }
    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      } else {
        await interaction.reply({
          content: "There was an error while executing this command!",
          flags: MessageFlags.Ephemeral,
        });
      }
    }
  });
}
