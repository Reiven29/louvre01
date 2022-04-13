const Discord = require("discord.js");
const client = new Discord.Client();

client.config = require('./config/bot');
const prefix = client.config.discord.prefix;
  
client.on('ready', () => {
    client.guilds.cache.get('862777466014400532')
    client.channels.fetch('863724024278024192')
    .then(channel => {
      const READY = new Discord.MessageEmbed()
      .setTitle('Vodify is Ready!')
      .setColor('GREEN')
      .setFooter('Date:', 'https://imgur.com/iX6h2rZ.gif')
      .setTimestamp()
      channel.send(READY);
    })
  });

  client.on("ready", () =>{
    client.user.setPresence({
        status: "idle",  //- online, idle....
    });
 });

  client.login(client.config.discord.token);