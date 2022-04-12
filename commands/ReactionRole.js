module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        // -------------------------------------------------------------------------------------
        const channel = '870102839744159754';
        const VodifyLog = message.guild.roles.cache.find(role => role.name === "vodify-logs");
        const AutoMuteLog = message.guild.roles.cache.find(role => role.name === "auto-mute-logs");
        const UpdateLog = message.guild.roles.cache.find(role => role.name === "update-logs");

        const VodifyLogEmoji = '<:Vodify:870314842563694624>';
        const AutoMuteLogEmoji = '<:Auto_Mute:870475085088182292>';
        const UpdateLogEmoji = '<:Update:870477780985479169>';
        // --------------------------------------------------------------------------------------
        let embed = new Discord.MessageEmbed()
            .setColor('YELLOW')
            .setTitle('Logs Reaction Role:')
            .setAuthor('Vodify Moderator', client.user.displayAvatarURL())
            .setFooter('Vodify Moderator', 'https://imgur.com/iX6h2rZ.gif')
            .setThumbnail('https://imgur.com/su3k1Cs.gif')
            .setDescription('React to access the channels!\n\n'
                + `${VodifyLogEmoji} **= Vodify logs**\n`
                + `${AutoMuteLogEmoji} **= Auto mute logs**\n`
                + `${UpdateLogEmoji} **= Update logs**`);

        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(VodifyLogEmoji);
        messageEmbed.react(AutoMuteLogEmoji);
        messageEmbed.react(UpdateLogEmoji);

        // ------------------------------------
        const VodifyEmojiName = 'z_Vodify';
        const AutoMuteEmojiName = 'Auto_Mute';
        const UpdateLogEmojiName = 'Update';
        // ------------------------------------

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === VodifyEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(VodifyLog);
                }
                if (reaction.emoji.name === AutoMuteEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(AutoMuteLog);
                }
                if (reaction.emoji.name === UpdateLogEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(UpdateLog);
                }
            } else {
                return;
            }

        });

        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;


            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === VodifyEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(VodifyLog);
                }
                if (reaction.emoji.name === AutoMuteEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(AutoMuteLog);
                }
                if (reaction.emoji.name === UpdateLogEmojiName) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(UpdateLog);
                }
            } else {
                return;
            }
        });
    }

}