const Discord = require("discord.js");
const config = require("../config.json");

const prefix = config.prefix;

module.exports = async (client) => {
  client.on('message', async (message) => {
    if (
      message.content.toLowerCase().startsWith(prefix + 'clear') ||
      message.content.toLowerCase().startsWith(prefix + 'c ')
    ) {
      if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send("You cant use this command since you're missing `Administrator` role");
      if (!isNaN(message.content.split(' ')[1])) {
        let amount = 0;
        if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
          amount = 1;
        } else {
          amount = message.content.split(' ')[1];
          if (amount > 100) {
            amount = 100;
          }
        }
        await message.channel.bulkDelete(amount, true).then((_message) => {
          const clear_embed = new Discord.MessageEmbed()
            .setTitle(`**Bot cleared \`${_message.size}\` messages :broom:**`)
            .setColor('GREEN')
          message.channel.send(clear_embed).then((sent) => {
            setTimeout(function () {
              sent.delete();
            }, 2500);
          });
        });
      } else {
        message.channel.send('Enter the amount of messages that you would like to clear').then((sent) => {
          setTimeout(function () {
            sent.delete();
          }, 2500);
        });
      }
    } else {
      if (message.content.toLowerCase() === prefix + 'help clear') {
        const newEmbed = new Discord.MessageEmbed().setColor('#00B2B2').setTitle('**Clear Help**');
        newEmbed
          .setDescription('This command clears messages for example `!clear 5` or `!c 5`.')
          .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
          .setTimestamp();
        message.channel.send(newEmbed);
      }
    }
  })
}