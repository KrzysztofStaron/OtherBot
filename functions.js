const fs = require('fs');

module.exports = {
  "getUsersDatar": function(msg) {
    return JSON.parse(fs.readFileSync("data/users.json"));
  },
  "fixUser": function(msg) {
    const data = JSON.parse(fs.readFileSync("data/users.json"));
    if (!data.hasOwnProperty(msg.author.id)) {
      data[msg.author.id] = JSON.parse(fs.readFileSync("objects.json")).user;

      fs.writeFileSync('data/users.json', JSON.stringify(data));
    }
  }
}
