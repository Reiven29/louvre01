module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.error} │You're not in a voice channel !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.error} │You are not in the same voice channel !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });

        if (!client.player.getQueue(message)) return message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.error} │No music currently playing !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        if (success) message.channel.send({ embed: {
            color: 'GREEN',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.success} │Music **stopped** into this server !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};