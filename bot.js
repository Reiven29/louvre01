const Discord = require("discord.js");

const client = new Discord.Client();

client.on('ready', () => {
  console.log('NICE');
});

client.login(process.env.token);