const Canvas = require("canvas");
const Discord = require('discord.js');

module.exports = (async (client, message, track) => {

  // Pass the entire Canvas object because you'll need access to its width and context
  const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 28;

    do {
      // Assign the font to the context and decrement it so it can be measured again
      context.font = `${fontSize -= 5}px Fredoka One`;
      // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return context.font;
  };

  let user = message.mentions.users.first() || message.author;
  let msg = await message.channel.send("<a:Loading:868452970730242068>")

  const canvas = Canvas.createCanvas(900, 400);
  const context = canvas.getContext('2d');

  // **************************** IMAGE ************************************* //

  // Background Image
  const BACKGROUND = await Canvas.loadImage('./img/background.png');
  context.drawImage(BACKGROUND, 0, 0, canvas.width, canvas.height);

  // Thumbnail
  const THUMBNAIL = await Canvas.loadImage(track.thumbnail);
  context.drawImage(THUMBNAIL, 50, 80, 355, 215);

  // FRAME
  const FRAME = await Canvas.loadImage('./img/frame.png');
  context.drawImage(FRAME, 5, 76, canvas.width, canvas.height);

  // **************************** TEXT ************************************* //

  // Title of the song
  context.font = applyText(canvas, `Title:`);
  context.fillStyle = 'WHITE';
  context.fillText(`Title:`, canvas.width / 25, canvas.height / 12);
  // ---
  context.font = applyText(canvas, `${track.title}`);
  context.fillStyle = 'YELLOW';
  context.fillText(`${track.title}`, canvas.width / 23, canvas.height / 7);

  // Requested by
  context.font = applyText(canvas, `Requested by: ${track.requestedBy.username}`);
  context.fillStyle = 'WHITE';
  context.fillText(`Requested by: ${track.requestedBy.username}`, canvas.width / 2, canvas.height / 3.5);
 
  // Channel
  context.font = applyText(canvas, `Channel: ${track.author}`);
  context.fillStyle = 'WHITE';
  context.fillText(`Channel: ${track.author}`, canvas.width / 2, canvas.height / 2.5);

  // Views
  context.font = applyText(canvas, `Views: ${track.views}`);
  context.fillStyle = 'WHITE';
  context.fillText(`Views: ${track.views}`, canvas.width / 2, canvas.height / 1.91);

  // Duration
  context.fillStyle = 'WHITE';
  context.font = applyText(canvas, `Duration: ${track.duration}`);
  context.fillText(`Duration: ${track.duration}`, canvas.width / 2, canvas.height / 1.5);

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