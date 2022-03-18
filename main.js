const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const config = require("./config.json")

client.on('ready', () => {
  console.log("yes");
  if (!fs.existsSync("data/user.json")) {
    fs.writeFileSync('data/user.json', "{}");
  }
});

client.on('messageCreate', (msg) => {
  console.log(JSON.parse(fs.readFileSync("data/users.json")))
  let args = msg.content.split(" ");
  if (msg.author.bot || args[0] != config.prefix) return;

  console.log(args[1] == "daily");

  const tryCreateUserData = require("./tryCreateUserData.js");
  tryCreateUserData(msg);

  switch (args[1]) {
    case "daily":
      const daily = require("./daily");
      daily(msg, args);
      break;
    default:

  }
});

client.login(config.token);
