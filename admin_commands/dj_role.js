const Discord = require("discord.js");
const config = require("../config.json");

const client = new Discord.Client();

const prefix = config.prefix;

module.exports = async (client) =>{

// - ADD DJ ROLE
client.on('message', function (message) {
    if (
        message.content.toLowerCase().startsWith(prefix + 'djrole')
    ) {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("You cant use this command since you're missing `Admin` role");
        let role = message.guild.roles.cache.find(r => r.name === "Vodify DJ");
        let member = message.mentions.members.first();
        const user = message.author;
        const djrole_embed = new Discord.MessageEmbed()
            .setTitle('Vodify DJ Role:')
            .addField('Role Added To:', `**[${member}]**`)
            .addField('Added by:', `**[${user}]**`)
            .setThumbnail('https://imgur.com/O8y9v9b.jpg')
            .setAuthor('Vodify Developer', client.user.displayAvatarURL())
            .setColor('PURPLE')
            .setFooter('Vodify Moderator', 'https://imgur.com/iX6h2rZ.gif');

        member.roles.add(role);
        message.channel.send(djrole_embed);
    }
});

// - REMOVE DJ ROLE

client.on('message', function (message) {
    if (
        message.content.toLowerCase().startsWith(prefix + 'rdjrole')
    ) {
        if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("You cant use this command since you're missing `Admin` role");
        let role = message.guild.roles.cache.find(r => r.name === "Vodify DJ");
        let member = message.mentions.members.first();
        const user = message.author;
        const djrole_embed = new Discord.MessageEmbed()
            .setTitle('Remove DJ Role:')
            .addField('Role Removed To:', `**[${member}]**`)
            .addField('Removed by:', `**[${user}]**`)
            .setThumbnail('https://imgur.com/O8y9v9b.jpg')
            .setAuthor('Vodify Developer', client.user.displayAvatarURL())
            .setColor('RED')
            .setFooter('Vodify Moderator', 'https://imgur.com/iX6h2rZ.gif');

        member.roles.remove(role);
        message.channel.send(djrole_embed);
    }
})
}