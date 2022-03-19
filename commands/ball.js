const functions = require("../functions");

module.exports = {
  "ball": function(msg, args) {
    var author = msg.author.id

    var money = functions.getUsersData()[author].money;
    var coin = require("../config.json").coin;
    msg.reply(`You have: **${money}** ${coin}`);
  }
}
