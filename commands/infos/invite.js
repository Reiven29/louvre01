module.exports = {
    name: 'invite',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}invite',

    execute(client, message) {
        message.channel.send({ embed: {
            color: 'YELLOW',
            thumbnail: {
              url: client.user.displayAvatarURL(),
            },
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: 'Invite Vodify',
            description: '[Add the bot to your server](https://discord.com/api/oauth2/authorize?client_id=862011272417116180&permissions=4294966263&scope=bot)',
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};