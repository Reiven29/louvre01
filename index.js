const Discord = require('discord.js-12');
const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });
const config = require("./config.json");

const PROFILE = require('./profile.js');

client.login(process.env.token);