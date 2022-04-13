module.exports = {
  name: 'queue',
  aliases: [],
  category: 'Music',
  utilisation: '{prefix}queue',

  execute(client, message) {
      if (!message.member.voice.channel) return message.channel.send({
          embed: {
              color: 'RED',
              author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
              },
              title: `${client.emotes.error} │ You're not in a voice channel !`,
              timestamp: new Date(),
              footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
              }
          }
      });

      if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({
          embed: {
              color: 'RED',
              author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
              },
              title: `${client.emotes.error} │ You are not in the same voice channel !`,
              timestamp: new Date(),
              footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
              }
          }
      });

      const queue = client.player.getQueue(message);

      if (!queue) return message.channel.send({
          embed: {
              color: 'RED',
              author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
              },
              title: `${client.emotes.error} │ No music currently playing !`,
              timestamp: new Date(),
              footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
              }
          }
      });

      return message.channel.send({
          embed: {
              color: 'WHITE',
              author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
              },
              title: `${client.emotes.queue} │ Queue List:`,
              timestamp: new Date(),
              footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
              },
              description: (`**Server queue - ${message.guild.name} ${queue.loopMode ? '(looped)' : ''}**\n**Current :** ${queue.playing.title} | ${queue.playing.author}\n\n` + (queue.tracks.map((track, i) => {
                  return `**#${i + 1}** - **${track.title}** | [requested by : ${track.requestedBy.username}]`
              }).slice(0, 5).join('\n') + `\n\n${queue.tracks.length > 5 ? `And **${queue.tracks.length - 5}** other songs...` : `In the playlist **${queue.tracks.length}** song(s)...`}`)),
          }
      });
  },
};