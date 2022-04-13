module.exports = (client, message, query) => {
    message.channel.send({ embed: {
        color: "RED",
        author: {
          name: `${client.emotes.title_name}`,
          icon_url: client.user.displayAvatarURL()
        },
        title: `${client.emotes.error} │No results found on YouTube for ${query} !`,
        timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
      }
    });
};