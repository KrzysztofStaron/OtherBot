const functions = require("../functions");
const fs = require('fs');

module.exports = {
  "give": function(msg, args) {
    var giveTo = msg.mentions.users.first();
    var data = functions.getUsersData();

    if (args.length != 3) {
      msg.reply("$give @user amount" + args.length)
    } else if (!parseInt(args[2])){
      msg.reply("amount must be a number");
    } else if (!giveTo) {
      msg.reply("please specyfy a user");
    } else if (parseInt(args[2]) > data[msg.author.id].money) {
      msg.reply("you don't have enough money");
    } else {
      data[giveTo.id].money += parseInt(args[2]);
      data[msg.author.id].money -= parseInt(args[2]);
      msg.reply(`From: **${msg.author.username}** To: **${giveTo.username}** Amount: **${parseInt(args[2])}**`);
      fs.writeFileSync('data/users.json', JSON.stringify(data));
    }
  }
}
