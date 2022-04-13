module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
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

        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send({ embed: {
                    color: 'GREEN',
                    author: {
                      name: `${client.emotes.title_name}`,
                      icon_url: client.user.displayAvatarURL()
                    },
                    title: `${client.emotes.success} │Repeat mode **disabled** !`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: `${client.emotes.footer_image}`,
                      text: `${client.emotes.text_name}`
                    }
                  }
                });
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send({ embed: {
                    color: 'GREEN',
                    author: {
                      name: `${client.emotes.title_name}`,
                      icon_url: client.user.displayAvatarURL()
                    },
                    title: `${client.emotes.success} │Repeat mode **enabled** the whole queue will be repeated endlessly !`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: `${client.emotes.footer_image}`,
                      text: `${client.emotes.text_name}`
                    }
                  }
                });
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send({ embed: {
                    color: 'GREEN',
                    author: {
                      name: `${client.emotes.title_name}`,
                      icon_url: client.user.displayAvatarURL()
                    },
                    title: `${client.emotes.success} │Repeat mode **disabled** !`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: `${client.emotes.footer_image}`,
                      text: `${client.emotes.text_name}`
                    }
                  }
                });
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send({ embed: {
                    color: 'GREEN',
                    author: {
                      name: `${client.emotes.title_name}`,
                      icon_url: client.user.displayAvatarURL()
                    },
                    title: `${client.emotes.success} │Repeat mode **enabled** the current music will be repeated endlessly !`,
                    timestamp: new Date(),
                    footer: {
                      icon_url: `${client.emotes.footer_image}`,
                      text: `${client.emotes.text_name}`
                    }
                  }
                });
            };
        };
    },
};