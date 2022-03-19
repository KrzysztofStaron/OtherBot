const functions = require("./functions");
const fs = require('fs');
function randomRange(num) {
  let min = -num;
  let max = num;
  return Math.floor(Math.random() * (max - min) + min);
}


module.exports = function(msg) {
  let data = functions.getUsersData();
  let user = data[msg.author.id];
  if (user.dailyClaimed){
    msg.reply(`Please wait untill **00:00 GMT+1**`);
    return;
  }

  user.dailyClaimed = true;
  const config = require("./config.json");
  const add = config.daily.base + randomRange(config.daily.random);
  user.money += add;
  msg.reply(`You get: **${add}${config.coin}** , now has: **${user.money}${config.coin}**`);
  fs.writeFileSync('data/users.json', JSON.stringify(data));
}
