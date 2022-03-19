const fs = require("fs");

// discord
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');

const functions = require('./functions');

if (!fs.existsSync("config.json")) fs.writeFileSync('config.json', JSON.stringify(require("./objects.json").config));
var config = require("./config.json");

client.on('ready', () => {
  console.log("Logged");
  require("./preload").reseting();
  if (!fs.existsSync("data/users.json")) fs.writeFileSync('data/users.json', "{}");
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;

  functions.fixUser(msg);

  let args = msg.content.split(" ");
  if (!args[0].startsWith(config.prefix)) return;
  args[0] = args[0].substring(1);

  switch (args[0]) {
    case "daily":
      require("./daily").daily(msg);
      break;
    default:

  }
});

client.login(config.token);
