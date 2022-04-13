const Discord = require('discord.js-12');
const client = new Discord.Client();

client.config = require('./config/bot');

client.on('ready', () => {
    console.log('Ready!');
});

const Welcome = require('./welcome/welcome');
client.on('ready', () => {
    Welcome(client);
});

client.login(client.config.discord.token);