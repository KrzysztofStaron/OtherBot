const functions = require("../functions");
const fs = require('fs');
const config = require("../config.json");

module.exports = {
  "edit": function(msg, args) {
    if (args.length < 4) {
      // propety patch f.e. config.daily.base
      msg.reply("$edit filePath propetyPath value")
    } else if (!fs.existsSync(args[1])) {
      msg.reply("file is missing :red_circle: ")
    } else if (args[2].split(".").length == 0) {
      msg.reply("wrong propety path format")
    } else {
      var data = JSON.parse(fs.readFileSync(args[1]))
      var stringPath = ""
      args[2].split(".").forEach((item, i) => {
        stringPath += "."+item
      });

      eval(`data${stringPath} = "${args[3]}"`);

      fs.writeFileSync(args[1], JSON.stringify(data));

      msg.reply(`${stringPath} sets to ${args[3]}`)
    }
  }
}
