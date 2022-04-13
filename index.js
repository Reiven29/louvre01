const discord = require('discord.js');
client.config = require('./config/bot');

const CONFIG = require("./config/bot");

client.on('ready', () => {
    CONFIG(client);
  });