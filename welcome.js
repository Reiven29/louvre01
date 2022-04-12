const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const Canvas = require('canvas');
// ------------------------------------- //

const applyText = (canvas, text) => {
    const context = canvas.getContext('2d');

    // Declare a base size of the font
    let fontSize = 70;

    do {
        // Assign the font to the context and decrement it so it can be measured again
        context.font = `${fontSize -= 10}px Fredoka One`;
        // Compare pixel width of the text to the canvas minus the approximate avatar size
    } while (context.measureText(text).width > canvas.width - 300);

    // Return the result to use in the actual canvas
    return context.font;
};

client.on('guildMemberAdd', async (member) => {
    let role = member.guild.roles.cache.find(r => r.name === "Member");
    member.roles.add(role).catch(console.error);

    const { registerFont } = require('canvas')
    registerFont('./fonts/FredokaOne-Regular.ttf', { family: 'Fredoka One' });

    const canvas = Canvas.createCanvas(700, 250);
    const context = canvas.getContext('2d');

    // ---------- Images ---------- //

    // Background
    const background = await Canvas.loadImage('./img/welcome_background.png');
    context.drawImage(background, 0, 0, canvas.width, canvas.height);

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
    context.drawImage(avatar, 25, 25, 200, 200);

    // Yellow Frame
    const welcome_frame = await Canvas.loadImage('./img/welcome_frame.png');
    context.drawImage(welcome_frame, 0, 0, canvas.width, canvas.height);

    // Vodify Logo
    const welcome_vodifylogo = await Canvas.loadImage('./img/welcome_vodify-logo.png');
    context.drawImage(welcome_vodifylogo, 0, 0, canvas.width, canvas.height);

    // ---------- Texts ---------- //

    context.font = '25px Fredoka One';
    context.fillStyle = 'WHITE';
    context.fillText('Welcome to Louvre Esports,', canvas.width / 2.5, canvas.height / 3.5);

    context.font = applyText(canvas, `${member.displayName}!`);
    context.fillStyle = 'YELLOW';
    context.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

    const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'louvre-welcome_card.png');
    member.guild.channels.cache.get('962757124507701268').send(`**Welcome to Louvre Esports, ${member}!**`, attachment);
});

client.on('message', message => {
    if (message.content === '!join') {
        client.emit('guildMemberAdd', message.member);
    }
});

client.login(config.token);