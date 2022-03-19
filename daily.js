const functions = require("./functions");

module.exports = function(msg, args) {
  let user = functions.getUsersData()[msg.author.id];
  user.dailyClaimed = true;
  msg.reply()
}
