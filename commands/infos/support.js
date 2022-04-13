module.exports = {
    name: 'support',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}support',

    execute(client, message) {
        message.channel.send({ embed: {
            color: 'YELLOW',
            thumbnail: {
              url: 'https://imgur.com/gtK87a0.jpg',
            },
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: 'Vodify Community:',
            description: '[Join Vodify Community](https://discord.gg/53hpbqr8CS)',
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};