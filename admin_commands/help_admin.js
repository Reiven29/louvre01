const Discord = require("discord.js");
const config = require("../config.json");

const prefix = config.prefix;

module.exports = async (client) => {

    const help_color = 'YELLOW';
    const help_thumbnail = 'https://imgur.com/96MK2a0.jpg';
    const help_author = 'Vodify Moderator';
    const help_author_url = 'https://imgur.com/iX6h2rZ.gif';

    client.on('message', function (message) {
        if (
            message.content.toLowerCase().startsWith(prefix + 'admin')
        ) {
            const help_admin_embed = new Discord.MessageEmbed()
                .setColor(help_color)
                .setTitle('Admin Commands:')
                .setAuthor(help_author, help_author_url)
                .setThumbnail(help_thumbnail)

                .addFields(
                    { name: "<:Settings:863173260615483432>︱Prefix", value: `\`Current Prefix: ${prefix}\`` },
                    { name: "<:DJ:867866615629873162>︱DJ role:", value: '`djrole`, `rdjrole`', },
                    { name: "<:Channel:867866986679369738>︱Channels:", value: '`lock`, `unlock`, `private`, `unprivate`', },
                    { name: "<:Others:867867789502185472>︱Others:", value: '`clear`' },
                )

                .setTimestamp();

            message.channel.send(help_admin_embed);
        }
    })
}