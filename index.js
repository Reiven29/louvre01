const Discord = require("discord.js-12");
const config = require("./config.json");

const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });

const Profile = require("./profile.js");

const express = require('express')
const canvas = require('canvas')
const PORT = process.env.PORT || 5000

express()
    .get('/', (req, res) => res.send({ version: canvas.version, cairoVersion: canvas.cairoVersion }))
    .listen(PORT, () => console.log(`Listening on ${PORT}`))

client.login(process.env.token);