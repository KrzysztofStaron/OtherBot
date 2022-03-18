const fs = require("fs");
const {Client, Intents, MessageEmbed } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const Discord = require('discord.js');
const {token} = require("./config.json")

client.on('ready', () => {
  console.log(`Bot starto`);
});

client.on('messageCreate', (msg) => {
 // main functionality
}

client.login(token);
