const discord = require('discord.js');
client.config = require('./config/bot');
const client = new Discord.Client();

const CONFIG = require("./config/bot");

client.on('ready', () => {
    CONFIG(client);
  });