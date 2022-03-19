const fs = require('fs');

if (!fs.existsSync("config.json")) fs.writeFileSync('config.json', JSON.stringify(require("./objects.json").config));
if (!fs.existsSync("data/users.json")) fs.writeFileSync('data/users.json', "{}");

console.log("setup finished")
