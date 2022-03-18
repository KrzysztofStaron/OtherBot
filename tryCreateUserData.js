const fs = require('fs');

module.exports = function(msg) {
  const data = JSON.parse(fs.readFileSync("data/users.json"));
  msg.reply(data);
}
