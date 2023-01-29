var { Command } = require("commander");
var program = new Command();
const connect = require("./configs/db");
const Account = require("./models/account.model");

// Connect to MongoDB
connect();

program
  .command("CREATE")
  .argument("<code>", "Account holder code")
  .argument("<name>", "Account holder name")
  .action((code, name) => {
    Account.findOne({ code }, (err, existingAccount) => {
      if (err) throw err;
      if (existingAccount) {
        console.log(`Account ${code} already exists`);
        process.exit();
      }
    });
    const account = new Account({ name, code, balance: 0 });
    account.save((err) => {
      if (err) throw err;
      console.log(`Account ${code} created successfully`);
      process.exit();
    });
  });

program
  .command("DEPOSIT")
  .argument("<code>", "Account holder code")
  .argument("<amount>", "Amount to deposit")
  .action((code, amount) => {
    Account.findOne({ code }, (err, account) => {
      if (err) throw err;
      if (!account) {
        console.log(`Account ${code} not found`);
        process.exit();
      }
      account.balance += parseFloat(amount);
      account.save((err) => {
        if (err) throw err;
        console.log(`Deposited ₹${amount} into ${code}'s account`);
        process.exit();
      });
    });
  });

program
  .command("WITHDRAW")
  .argument("<code>", "Account holder code")
  .argument("<amount>", "Amount to deposit")
  .action((code, amount) => {
    Account.findOne({ code }, (err, account) => {
      if (err) throw err;
      if (!account) {
        console.log(`Account ${code} not found`);
        process.exit();
      }
      if (account.balance < amount) {
        console.log(`Insufficient funds in ${code}'s account`);
        process.exit();
      }
      account.balance -= parseFloat(amount);
      account.save((err) => {
        if (err) throw err;
        console.log(`Withdrew ₹${amount} from ${code}'s account`);
        process.exit();
      });
    });
  });

program
  .command("BALANCE")
  .argument("<code>", "Account holder code")
  .action((code) => {
    Account.findOne({ code }, (err, account) => {
      if (err) throw err;
      if (!account) {
        console.log(`Account ${code} not found`);
        process.exit();
      }
      console.log(`${account.name}'s account balance: ₹${account.balance}`);
      process.exit();
    });
  });

program.parse(process.argv);
