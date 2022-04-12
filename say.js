const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix;

client.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix)) {
        let args = message.content.substring(prefix.length).split(" ");
        switch (args[0].toLowerCase()) {
            case 'say': {
                let sendMessage = message.content.substring(prefix.length + args[0].length + args[1].length + 2);
                setTimeout(() => { message.delete() }, 5000)
                let sendChannel = client.channels.cache.get(args[1]);

                const say_embed = new Discord.MessageEmbed()
                    .setColor('YELLOW')
                    .setDescription(sendMessage)
                    .setAuthor('Louvre Esports', client.user.displayAvatarURL())
                    .setFooter('Louvre Esports', 'https://imgur.com/iX6h2rZ.gif')
                    .setTimestamp();

                sendChannel.send(say_embed)

                break;
            }
        }
    }
});

client.login(process.env.token);