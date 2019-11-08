const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    	console.log('I am here!');
	// client.user.setPresence({ game: { name: 'Shikon no Tama', type:3 }});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
});

client.on('messageReactionAdd', (reaction, user) => {
  if (reaction.emoji.name === "642219548044558347") {
    member.addRole("565667223600103435")
  }
});
