var { Command } = require("commander");
const User = require("./models/user.model");
var program = new Command();

program.argument("<username>", "user login details");
program
  .argument("[password]", "password for user, if needed", "default")
  .action(async (username, password) => {
    console.log("username", username);
    console.log("password", password);
    try {
      await User.create({ username, password });
      
    } catch (error) {
      console.log(error.message);
    }
  });

program.parse(process.argv);
