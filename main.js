const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
var schedule = require('node-schedule');

if (!fs.existsSync("config.json")) {
  fs.writeFileSync('config.json', JSON.stringify(require("./objects.json").config));
}
var config = require("./config.json");

client.on('ready', () => {
  console.log("yes");
  if (!fs.existsSync("data/users.json")) fs.writeFileSync('data/users.json', "{}");

  var j = schedule.scheduleJob('0 0 * * *', function(){
    console.log("reseted")
    let data = require("./functions").getUsersData();
    const keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[keys[i]].dailyClaimed = false;
    }
    fs.writeFileSync('data/users.json', JSON.stringify(data));
  });
});

client.on('messageCreate', (msg) => {
  if (msg.author.bot) return;

  require("./functions").fixUser(msg);

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
