module.exports = (client, message, queue) => {
    message.channel.send({ embed: {
        color: "RED",
        author: {
          name: `${client.emotes.title_name}`,
          icon_url: client.user.displayAvatarURL()
        },
        title: `${client.emotes.error} │Music stopped as there is no more music in the queue !`,
        timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
      }
    });
};