const Canvas = require("canvas");
const Discord = require('discord.js');

module.exports = (async (client, message, track) => {

  let user = message.mentions.users.first() || message.author;
  let msg = await message.channel.send("<a:Loading:868452970730242068>")

  const { registerFont } = require('canvas')
  registerFont('FredokaOne-Regular.ttf', { family: 'Fredoka One' });

  const canvas = Canvas.createCanvas(900, 400);
  const context = canvas.getContext('2d');

  // **************************** IMAGE ************************************* //

  // Background Image
  const BACKGROUND = await Canvas.loadImage('./img/background.png');
  context.drawImage(BACKGROUND, 0, 0, canvas.width, canvas.height);

  // Line
  const LINE = await Canvas.loadImage('./img/line.png');
  context.drawImage(LINE, 0, 0, canvas.width, canvas.height);

  // Thumbnail
  const THUMBNAIL = await Canvas.loadImage(track.thumbnail);
  context.drawImage(THUMBNAIL, 50, 80, 355, 215);

  // FRAME
  const FRAME = await Canvas.loadImage('./img/frame.png');
  context.drawImage(FRAME, 5, 76, canvas.width, canvas.height);

  // **************************** TEXT ************************************* //

  // = Title
  const Title = (canvas, text) => {
    const context = canvas.getContext('2d');
    let fontSize = 28;
    do {
      context.font = `${fontSize -= 5}px Fredoka One`;
    } while (context.measureText(text).width > canvas.width - 300);
    return context.font;
  };
  // -- Title:
  context.font = Title(canvas, `Title:`);
  context.fillStyle = 'WHITE';
  context.fillText(`Title:`, canvas.width / 25, canvas.height / 12);
  // --- Title of the song
  context.font = Title(canvas, `${track.title}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.title}`, canvas.width / 23, canvas.height / 7);


  // = Information
  const Information = (canvas, text) => {
    const context = canvas.getContext('2d');
    let fontSize = 30;
    do {
      context.font = `${fontSize -= 5}px Fredoka One`;
    } while (context.measureText(text).width > canvas.width - 225);
    return context.font;
  };

  // Requested by: "(username)"
  context.font = Information(canvas, `${track.requestedBy.username}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.requestedBy.username}`, canvas.width / 1.46, canvas.height / 3.69);

  // Channel
  context.font = Information(canvas, `${track.author}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.author}`, canvas.width / 1.62, canvas.height / 2.42);

  // Views
  context.font = Information(canvas, `${track.views}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.views}`, canvas.width / 1.70, canvas.height / 1.78);

  // Duration
  context.font = Information(canvas, `${track.duration}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.duration}`, canvas.width / 1.60, canvas.height / 1.41);

  // Attachment
  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'vodify-now_playing.png');

  const EMBED = new Discord.MessageEmbed()
    .setTitle(`${client.emotes.music} │Now Playing:`)
    .setColor('YELLOW')
    .setAuthor(`${client.emotes.title_name}`, `${client.user.displayAvatarURL()}`)
    .setDescription(`**${track.title}**`)
    .addField('Voice Channel:', `${message.member.voice.channel.name}`)
    .setFooter(`${client.emotes.text_name}`, `${client.emotes.footer_image}`)
    .attachFiles(attachment)
    .setImage('attachment://vodify-now_playing.png')
    .setTimestamp();
  message.channel.send(EMBED)
    .then(() => {
      msg.delete()
    })
});