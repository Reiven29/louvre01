module.exports = (client, message, queue, playlist) => {
    message.channel.send({ embed: {
        color: 'YELLOW',
        author: {
          name: `${client.emotes.title_name}`,
          icon_url: client.user.displayAvatarURL()
        },
        title: `${client.emotes.music} │${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`,
        timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
      }
    });
};