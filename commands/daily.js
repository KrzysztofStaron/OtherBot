const functions = require("../functions");
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

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    if (user.claimedDate == today){
      msg.reply(`Wait until tomorrow`);
    } else {
      const config = require("../config.json");
      const add = config.daily.base + randomRange(config.daily.random);

      user.money += add;
      msg.reply(`You get: **${add} ${config.coin}** , now has: **${user.money} ${config.coin}**`);

      user.claimedDate = today;
      data[msg.author.id] = user;
      fs.writeFileSync('data/users.json', JSON.stringify(data));
    }
  }
}
