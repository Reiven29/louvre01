const Discord = require("discord.js-12");

const client = new Discord.Client();

client.on('ready', () => {
  console.log('NICE');
});

client.login(process.env.token);