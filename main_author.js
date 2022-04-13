const Discord = require("discord.js");
const client = new Discord.Client();
client.config = require('./config/bot');

const prefix = client.config.discord.prefix;

let Reiven = client.users.fetch('631510002321981452');
Reiven.then(function(result1) {
    imgUrl = result1.displayAvatarURL({ dynamic: true });
});

client.on('message', function(message) {
    if (
        message.content.toLowerCase().startsWith(prefix + 'author')
    ) {
        const embed = new Discord.MessageEmbed()
        .setTitle('Developer: Reiven.#0001')
        .setAuthor('Vodify', client.user.displayAvatarURL())
        .setColor('#ffff00')
        .setThumbnail(imgUrl)
        .setFooter('Vodify 2021', 'https://imgur.com/iX6h2rZ.gif');

        message.channel.send(embed);
    }
  });

  client.login(client.config.discord.token);