// this script is called after the bot logs in

var schedule = require('node-schedule');
const functions = require("./functions");
const fs = require("fs");

const reseting = () => {
  console.log("Preload: reseting")
  var reseting = schedule.scheduleJob('0 0 * * *', function() {
    console.log("reseted")
    let data = functions.getUsersData();
    const keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
      data[keys[i]].dailyClaimed = false;
    }
    fs.writeFileSync('data/users.json', JSON.stringify(data));
  });
}

module.exports = {
  // don't forget to add calling
  "preload": function(){
    reseting();
  }
}
