module.exports = {
    name: 'stats',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}stats',

    execute(client, message) {
        message.channel.send({ embed: {
            color: 'YELLOW',
            thumbnail: {
              url: 'https://imgur.com/Zsg5Obf.jpg'
            },
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `Vodify Stats:`,
            fields: [
              { name: 'Guild Count:', value: `${client.guilds.cache.size}`, inline: true },
              { name: 'User Count:', value: `${client.users.cache.size}`, inline: true },
            ],
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};