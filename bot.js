const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();
const bot = new Discord.Client({ disableEveryone: true });

const fs = require('fs');

const prefix = config.prefix;

const ASD = require('./asd.js');

const Profile = require("./profile.js");

const Welcome = require('./welcome.js');
const Goodbye = require('./goodbye.js');

// - BOT COMMANDS:
const Author = require("./bot_commands/author");

// - ADMIN COMMANDS:
const Help_Admin = require("./admin_commands/help_admin");
const Say = require("./say.js");
const Clear = require("./admin_commands/clear");
const Lock_Channel = require("./admin_commands/lock_channel");
const DJRole = require("./admin_commands/dj_role");

client.on('ready', () => {

  // - BOT COMMANDS:
  Author(client);

  // - ADMIN COMMANDS:
  DJRole(client);
  Help_Admin(client);
  Lock_Channel(client);
  Clear(client);
});


client.on('ready', () => {
  console.log(`Louvre Esports Is Ready!`);
  client.user.setActivity(`Louvre Esports`, {
    type: "WATCHING",
    url: "https://youtube.com"
  });
});

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === 'reactionrole') {
    client.commands.get('reactionrole').execute(message, args, Discord, client);
  }
});

client.login(process.env.token);