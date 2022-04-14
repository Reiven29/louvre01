const Discord = require("discord.js-12");
const config = require("./config.json");

const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });

const Profile = require("./profile.js");

client.login(process.env.token);