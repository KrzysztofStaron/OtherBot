const fs = require('fs');

module.exports = {
  "getUsersDatar": function(msg) {
    return JSON.parse(fs.readFileSync("data/users.json"));
  },
  "fixUser": function(msg) {
    let data = JSON.parse(fs.readFileSync("data/users.json"));
    let user = data[msg.author.id];

    for (var propety in user) {
      if (!user.hasOwnProperty(propety)) {
        user[propety] = JSON.parse(fs.readFileSync("objects.json"))[propety];
      }
    }
    data[msg.author.id] = user;
    fs.writeFileSync('data/users.json', JSON.stringify(data));
  }
}
