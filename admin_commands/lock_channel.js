const Discord = require("discord.js");
const config = require("../config.json");
const Canvas = require("canvas");

const prefix = config.prefix;

module.exports = async (client) => {

  const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
      // Assign the font to the context and decrement it so it can be measured again
      context.font = `${fontSize -= 10}px Fredoka One`;
      // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 200);

    // Return the result to use in the actual canvas
    return context.font;
  };

  const canvas = Canvas.createCanvas(300, 200);
  const context = canvas.getContext('2d');

  // Channel Lock
  const CHANNEL_LOCK = await Canvas.loadImage('./img/channel_lock.png');
  context.drawImage(CHANNEL_LOCK, 0, 0, canvas.width, canvas.height);
  const Channel_Lock = new Discord.MessageAttachment(canvas.toBuffer(), 'vodify-channel_lock.png');

  // Channel Unlock
  const CHANNEL_UNLOCK = await Canvas.loadImage('./img/channel_unlock.png');
  context.drawImage(CHANNEL_UNLOCK, 0, 0, canvas.width, canvas.height);
  const Channel_Unlock = new Discord.MessageAttachment(canvas.toBuffer(), 'vodify-channel_unlock.png');

  client.on('message', function (message) {
    if (
      message.content.toLowerCase().startsWith(prefix + 'lock')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You cant use this command since you're missing `Admin` role");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: false });
      const LOCK = new Discord.MessageEmbed()
        .setTitle('Channel Locked')
        .setAuthor('Vodify Moderator', client.user.displayAvatarURL())
        .setColor('RED')
        .attachFiles(Channel_Lock)
        .setImage('attachment://vodify-channel_lock.png')
        .addField('Channel:', `${message.channel.name}`)
        .setFooter(`Locked by: ${message.author.username}`, `${message.author.avatarURL()}`)

      message.channel.send(LOCK);
    }
  });

  client.on('message', function (message) {
    if (
      message.content.toLowerCase().startsWith(prefix + 'unlock')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You cant use this command since you're missing `Admin` role");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
      const UNLOCK = new Discord.MessageEmbed()
        .setTitle('Channel Unlocked')
        .setAuthor('Vodify Moderator', client.user.displayAvatarURL())
        .setColor('GREEN')
        .attachFiles(Channel_Unlock)
        .setImage('attachment://vodify-channel_unlock.png')
        .addField('Channel:', `${message.channel.name}`)
        .setFooter(`Unlocked by: ${message.author.username}`, `${message.author.avatarURL()}`)

      message.channel.send(UNLOCK);

    }
  });

  client.on('message', function (message) {
    if (
      message.content.toLowerCase().startsWith(prefix + 'private')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You cant use this command since you're missing `Admin` role");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: false, SEND_MESSAGES: true });
      const UNLOCK = new Discord.MessageEmbed()
        .setTitle('Channel is now Private')
        .setAuthor('Vodify Moderator', client.user.displayAvatarURL())
        .setColor('GREEN')
        .addField('Channel:', `${message.channel.name}`)
        .setFooter(`Privated by: ${message.author.username}`, `${message.author.avatarURL()}`)

      message.channel.send(UNLOCK);
    }
  });

  client.on('message', function (message) {
    if (
      message.content.toLowerCase().startsWith(prefix + 'unprivate')
    ) {
      if (!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("You cant use this command since you're missing `Admin` role");
      message.channel.updateOverwrite(message.channel.guild.roles.everyone, { VIEW_CHANNEL: true, SEND_MESSAGES: true });
      const UNLOCK = new Discord.MessageEmbed()
        .setTitle('Channel is now Unprivate')
        .setAuthor('Vodify Moderator', client.user.displayAvatarURL())
        .setColor('GREEN')
        .addField('Channel:', `${message.channel.name}`)
        .setFooter(`Unprivated by: ${message.author.username}`, `${message.author.avatarURL()}`)

      message.channel.send(UNLOCK);
    }
  })
}