const Discord = require("discord.js");
const client = new Discord.Client();
client.config = require('./config/bot');

const prettyMilliseconds = require("pretty-ms");
// 15d 11h 23m 20s

const prefix = client.config.discord.prefix;

client.on('message', function(message) {
    if (
        message.content.toLowerCase().startsWith(prefix + 'uptime')
    ) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Vodify Uptime:')
        .setThumbnail('https://imgur.com/oGxWruv.gif')
        .addField('Uptime:', `${prettyMilliseconds(client.uptime)}`)
        .setAuthor('Vodify', client.user.displayAvatarURL())
        .setColor('#ffff00')
        .setTimestamp()
        .setFooter('Vodify 2021', 'https://imgur.com/rlO72rk.jpg');

        message.channel.send(embed);
    }
  });

  client.login(client.config.discord.token);