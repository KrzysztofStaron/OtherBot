const functions = require("../functions");

module.exports = {
  "bal": function(msg, args) {
    var author = msg.mentions.users.first() || msg.author;

    var money = functions.getUsersData()[author.id].money;
    var coin = require("../config.json").coin;
    msg.reply(`**${author.username}** has: **${money}** ${coin}`);
  }
}
