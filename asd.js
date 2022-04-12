const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

const Canvas = require("canvas");

client.on('message', async (message) => {
	if (
		message.content.toLowerCase().startsWith(prefix + 'create')
	) {
		let user = message.mentions.users.first() || message.author;

		let msg = await message.channel.send("<a:Loading:868452970730242068>")

		const canvas = Canvas.createCanvas(600, 200);
		const context = canvas.getContext('2d');

		// **************************** IMAGE ************************************* //

		// Background Image
		const background = await Canvas.loadImage('./img/reaction.png');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// Attachment
		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'vodify-profile.png');
		message.channel.send(attachment)
			.then(() => {
				msg.delete()
			})
	}
});

client.login(config.token);