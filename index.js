// Developed By https://github.com/Ramodev88
require('http').createServer(function (req, res) {res.write('');res.end();}).listen(8080); // You can change the port if you want.

const { AoiClient, LoadCommands } = require("aoi.js");

const bot = new AoiClient({
    token: "", // If You Want To Hide Your Token, Install .env File!
    prefix: "", // Enter Bot Prefix
    intents: ["Guilds", "GuildMessages", "MessageContent"],
    events: ["onMessage", "onInteractionCreate"],
    database: {
        type: "aoi.db",
        db: require("aoi.db"),
        tables: ["main"],
        path: "./database/",
        extraOptions: {
            dbType: "KeyValue"
        }
    }
});

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./commands/") // If you want, you can change the folder where the commands will be installed.
// Ping Command Don't Touch!
bot.command({
name: "ping",
code: `
$title[1;$userTag[$clientID] | Ping]
$description[1;
Bot Ping: $ping 
Message Ping: $messagePing
Database Ping: $dbPing ]`
})

bot.variables ({
  totalowo:"0",
  monthlyowo:"0",
  weeklyowo: "0",
  dailyowo: "0"

// Developed For https://github.com/Ramodev88
