import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export default {
  data: new SlashCommandBuilder()
    .setName("link")
    .setDescription("Links github username to bot"),
  async execute(interaction: ChatInputCommandInteraction) {
    await interaction.reply(`This links github username to bot`);
  },
};
