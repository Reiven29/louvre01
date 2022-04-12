const Discord = require("discord.js");
const config = require("../config.json");
const prefix = config.prefix;

module.exports = async (client) => {

    let Reiven = client.users.fetch('631510002321981452');
    Reiven.then(function (result1) {
        imgUrl = result1.displayAvatarURL({ dynamic: true });
    });

    client.on('message', function (message) {
        if (
            message.content.toLowerCase().startsWith(prefix + 'author')
        ) {
            const embed = new Discord.MessageEmbed()
                .setTitle('Developer: Reiven.#6224')
                .setAuthor('Louvre Esports', client.user.displayAvatarURL())
                .setColor('#ffff00')
                .setThumbnail(imgUrl)
                .setFooter('Louvre Esports', 'https://imgur.com/iX6h2rZ.gif');

            message.channel.send(embed);
        }
    })
}