const Discord = require("discord.js-12");
const client = new Discord.Client();
const config = require("./config.json");

const Profile = require("./profile.js");

client.on('ready', () => {
    console.log(`Louvre Esports Is Ready!`);
    client.user.setActivity(`Louvre Esports`, {
      type: "WATCHING",
      url: "https://youtube.com"
    });
  });
  
client.login(process.env.token);