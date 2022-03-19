const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const config = require("./config.json")
const cron = require("cron");

client.on('ready', () => {
  console.log("yes");
  if (!fs.existsSync("data/users.json")) {
    fs.writeFileSync('data/users.json', "{}");
  }
  if (!fs.existsSync("config.json")) {
    fs.writeFileSync('config.json', JSON.stringify(require("./objects.json").config));
  }
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;

  require("./functions").fixUser(msg);

  let args = msg.content.split(" ");
  if (args[0] != config.prefix) return;

  switch (args[1]) {
    case "daily":
      const daily = require("./daily");
      daily(msg, args);
      break;
    default:

  }
});

client.login(config.token);
