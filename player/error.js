module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send({ embed: {
                color: 'RED',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `${client.emotes.error} │There is no music being played on this server !`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
            break;
        case 'NotConnected':
            message.channel.send({ embed: {
                color: 'RED',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `${client.emotes.error} │You are not connected in any voice channel !`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
            break;
        case 'UnableToJoin':
            message.channel.send({ embed: {
                color: 'RED',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `${client.emotes.error} │I am not able to join your voice channel, please check my permissions !`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
            break;
        case 'VideoUnavailable':
            message.channel.send({ embed: {
                color: 'RED',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `${client.emotes.error} │${args[0].title} is not available in your country! Skipping...`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
            break;
        case 'MusicStarting':
            message.channel.send({ embed: {
                color: 'YELLOW',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `The music is starting... please wait and retry!`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
            break;
        default:
            message.channel.send({ embed: {
                color: 'RED',
                author: {
                  name: `${client.emotes.title_name}`,
                  icon_url: client.user.displayAvatarURL()
                },
                title: `${client.emotes.error} │Something went wrong ... Error : ${error}`,
                timestamp: new Date(),
                footer: {
                  icon_url: `${client.emotes.footer_image}`,
                  text: `${client.emotes.text_name}`
                }
              }
            });
    };
};
