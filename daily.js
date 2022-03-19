const functions = require("./functions");
const fs = require('fs');

function randomRange(num) {
  let min = -num;
  let max = num;
  return Math.floor(Math.random() * (max - min) + min);
}

module.exports = {
  "daily": function(msg) {
    let data = functions.getUsersData();
    let user = data[msg.author.id];

    if (user.dailyClaimed){
      msg.reply(`Wait until tomorrow`);
      return;
    }
    const config = require("./config.json");
    const add = config.daily.base + randomRange(config.daily.random);

    user.money += add;
    msg.reply(`You get: **${add}${config.coin}** , now has: **${user.money}${config.coin}**`);

    user.dailyClaimed = true;
    fs.writeFileSync('data/users.json', JSON.stringify(data));
  }
}
