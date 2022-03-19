const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const config = require("./config.json")

client.on('ready', () => {
  console.log("yes");
  if (!fs.existsSync("data/users.json")) {
    fs.writeFileSync('data/users.json', "{}");
  }
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;

  const functions = require("./functions.js");
  functions.fixUser(msg);

  let args = msg.content.split(" ");
  if (args[0] != config.prefix) return;
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
