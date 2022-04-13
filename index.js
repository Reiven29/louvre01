const Discord = require('discord.js-12');
const client = new Discord.Client();

client.config = require('./config/bot');

const CONFIG = require("./config/bot");

client.on('ready', () => {
    CONFIG(client);
});