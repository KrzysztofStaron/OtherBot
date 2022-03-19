const fs = require('fs');

module.exports = {
  "getUsersData": function() {
    return JSON.parse(fs.readFileSync("data/users.json"));
  },
  "fixUser": function(msg) {
    let data = JSON.parse(fs.readFileSync("data/users.json"));
    let user = data[msg.author.id] || {};

    const userObj = JSON.parse(fs.readFileSync("objects.json")).user;
    for (var propety in userObj) {
      if (!user.hasOwnProperty(propety)) {
        user[propety] = userObj[propety];
      }
    }
    data[msg.author.id] = user;
    fs.writeFileSync('data/users.json', JSON.stringify(data));
  }
}
