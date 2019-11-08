const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    	console.log('I am here!');
	// client.user.setPresence({ game: { name: 'Shikon no Tama', type:3 }});
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

// https://stackoverflow.com/questions/54173978/hot-to-get-a-role-through-reactions
<CLient>.on("messageReactionAdd", (reaction, user) => {
  if (user.bot) return;
  const member = reaction.message.member
  switch (reaction.name) {
    case "emoji_name_1":
    member.addRole("roleID").then((res) => {
      // You can do something like this, or nothing at all. Your choice.
      reaction.message.channel.send(`You've been given the \`${res.name}\` role!`)
    }).catch(console.error);
    break;
    case "emoji_name_2":
    member.addRole("someOtherRole").then((res) => {
      reaction.message.channel.send(`You've been given the \`${res.name}\` role!`)
    }).catch(console.error);
  };
})

<CLient>.on("messageReactionRemove", (reaction, user) => {
  if (user.bot) return;
  const member = reaction.message.member
  switch (reaction.name) {
    case "emoji_name_1":
    member.removeRole("roleID").then((res) => {
      // You can do something like this, or nothing at all. Your choice.
      reaction.message.channel.send(`You've been removed from the \`${res.name}\` role!`)
    }).catch(console.error);
    break;
    case "emoji_name_2":
    member.removeRole("someOtherRole").then((res) => {
      reaction.message.channel.send(`You've been removed from the \`${res.name}\` role!`)
    }).catch(console.error);
  };
})
