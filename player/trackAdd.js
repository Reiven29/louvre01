module.exports = (client, message, queue, track) => {
    message.channel.send({ embed: {
        color: "ORANGE",
        author: {
          name: `${client.emotes.title_name}`,
          icon_url: client.user.displayAvatarURL()
        },
        title: `${client.emotes.musicaddedqueue} │Music Added To Queue`,
        fields: [{
            name: `${track.title}`,
            value: `Added to queue!`
          },
        ],
        thumbnail: { url: track.thumbnail },
        timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
      }
    });
};