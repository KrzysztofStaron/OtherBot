const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const config = require("./config.json")

client.on('ready', () => {
  console.log("yes");
});

client.on('messageCreate', (msg) => {
  let args = msg.content.split(" ");
  if (msg.author.bot || args[0] != config.prefix) return;

  console.log(args[1] == "daily");
  switch (args[1]) {
    case "daily":
      const daily = require("./daily");
      daily(msg, args);
      break;
    default:

  }
});

client.login(config.token);
