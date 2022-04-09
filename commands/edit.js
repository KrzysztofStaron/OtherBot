const functions = require("../functions");
const fs = require('fs');
const config = require("../config.json");

module.exports = {
  "edit": function(msg, args) {
    if (args.length < 3) {
      // propety patch f.e. config.daily.base
      msg.reply("$edit propetyPath value")
    } else {
      msg.reply("Editing /config.json file is dangerous, so fuck you");
    }
  }
}
