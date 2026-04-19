import { REST, Routes } from "discord.js";
import fs from "node:fs";
import path from "node:path";
import * as dotenv from "dotenv";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "../../../../envs/bot.env") });

const commands = [];
// Grab all the command folders from the commands directory you created earlier
const foldersPath = path.resolve(__dirname, "../commands");
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
  // Grab all the command files from the commands directory you created earlier
  const commandsPath = path.resolve(foldersPath, folder);
  console.log("commandsPath --> " + commandsPath);

  const commandFiles = fs
    .readdirSync(commandsPath)
    // TODO: remove link from link.command.ts to .command.ts
    .filter((file) => file.endsWith("link.command.ts"));
  console.log("commandFiles --> " + commandFiles);

  // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
  for (const file of commandFiles) {
    const filePath = path.resolve(commandsPath, file);
    console.log("foldersPath --> " + filePath);

    const imported = await import(pathToFileURL(filePath).href);
    console.log("imported →", imported);
    const command = imported.default;
    console.log("command --> " + command.data.toJSON());

    if ("data" in command && "execute" in command) {
      commands.push(command.data.toJSON());
      console.log("commands --> " + commands);
    } else {
      console.log(
        `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`,
      );
    }
  }
}

const token = process.env.BOT_TOKEN;
const clientId = process.env.CLIENT_ID;

if (!token || !clientId)
  throw new Error("Missing BOT_TOKEN or CLIENT_ID in .env");
// Construct and prepare an instance of the REST module
const rest = new REST().setToken(token);

// and deploy your commands!
(async () => {
  try {
    console.log(
      `Started refreshing ${commands.length} application (/) commands.`,
    );

    // The put method is used to fully refresh all commands in the guild with the current set
    const data = (await rest.put(Routes.applicationCommands(clientId), {
      body: commands,
    })) as unknown[];

    console.log(
      `Successfully reloaded ${data.length} application (/) commands.`,
    );
  } catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
  }
})();
