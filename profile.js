const Discord = require("discord.js-12");
const client = new Discord.Client();
const Canvas = require("canvas");
const moment = require('moment');
const config = require("./config.json");


const prefix = config.prefix;

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

client.on('message', async (message) => {
	if (
		message.content.toLowerCase().startsWith(prefix + 'profile')
	) {
		let user = message.mentions.users.first() || message.author;
		const member = message.mentions.members.first() || message.member;

		const created = moment(user.createdAt).format('DD/MM/YY');
		const join = moment.utc(member.joinedAt).format('DD/MM/YY');

		let msg = await message.channel.send("<a:Loading:868452970730242068>")

		const canvas = Canvas.createCanvas(600, 300);
		const context = canvas.getContext('2d');

		// **************************** IMAGE ************************************* //

		// Background Image
		const background = await Canvas.loadImage('./img/wallpaper.png');
		context.drawImage(background, 0, 0, canvas.width, canvas.height);

		// Avatar
		const avatar = await Canvas.loadImage(user.avatarURL({ format: 'jpg' }));
		context.drawImage(avatar, 67, 67, 150, 150);

		// Frame
		const frame = await Canvas.loadImage('./img/frame.png');
		context.drawImage(frame, 55, 55, 175, 175);

		// Joined Background
		const joinedbackground = await Canvas.loadImage('./img/joined_background.png');
		context.drawImage(joinedbackground, 0, 0, canvas.width, canvas.height);

		// **************************** FONT ************************************* //

		// User Tag
		context.font = applyText(canvas, user.tag);
		context.fillStyle = 'YELLOW';
		context.fillText(user.tag, canvas.width / 25, canvas.height / 1.11);

		// Roles
		if (message.member.roles.cache.find(r => r.name === "Developer")) {

		}

		// Joined Discord
		context.font = '24px Fredoka One';
		context.fillStyle = 'WHITE';
		context.fillText(`Joined Discord: ${created}`, canvas.width / 2.2, canvas.height / 3.5);

		// Joined Server
		context.font = '24px Fredoka One';
		context.fillStyle = 'WHITE';
		context.fillText(`Joined Server: ${join}`, canvas.width / 2.2, canvas.height / 2.5);

		// Attachment
		const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'louvre-profile.png');
		message.channel.send(attachment)
			.then(() => {
				msg.delete()
			})
	}
});

client.login(process.env.token);