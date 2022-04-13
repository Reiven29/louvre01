module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

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

        if (!args[0]) return message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.error} │Please specify a valid filter to enable or disable !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.error} │This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`,
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
        
        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        const track = client.player.nowPlaying(message);

        if (filtersUpdated[filterToUpdate]) message.channel.send({ embed: {
            color: 'GREEN',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.adding_filter} │Adding Filter`,
            description: `Note: the longer the music is, the longer this will take.`,
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
        else message.channel.send({ embed: {
            color: 'RED',
            author: {
              name: `${client.emotes.title_name}`,
              icon_url: client.user.displayAvatarURL()
            },
            title: `${client.emotes.music} │Disabling Filter`,
            description: `Note: the longer the music is, the longer this will take.`,
            thumbnail: { url: track.thumbnail },
            timestamp: new Date(),
            footer: {
              icon_url: `${client.emotes.footer_image}`,
              text: `${client.emotes.text_name}`
            }
          }
        });
    },
};