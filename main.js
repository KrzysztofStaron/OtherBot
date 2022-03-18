const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const {token, prefix} = require("./config.json")

client.on('ready', () => {
  console.log(`Bot starto`);
});

client.on('messageCreate', (msg) => {
  let args = msg.content.split(" ");
  if (msg.author.bot || args[0] != prefix) return;

  switch (args[1]) {
    case "daily":
      require("./daily").daily(msg, args)
      break;
    default:

  }
}

client.login(token);
