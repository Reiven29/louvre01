module.exports = (client, message, query, tracks) => {
    message.channel.send({ embed: {
        color: 'RED',
        author: {
          name: `${client.emotes.title_name}`,
          icon_url: client.user.displayAvatarURL()
        },
        title: `${client.emotes.error} │You did not provide a valid response ... Please send the command again !`,
        timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
      }
    });
};