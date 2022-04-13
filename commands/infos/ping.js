module.exports = {
    name: 'ping',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send({ embed: {
            color: 'YELLOW',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.success} │Ping : **${client.ws.ping}ms** !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};