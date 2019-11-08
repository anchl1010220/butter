const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    	console.log('I am here!');
	// client.user.setPresence({ game: { name: 'Shikon no Tama', type:3 }});
});

client.on('raw', packet => {
    // We don't want this to run on unrelated packets
    if (!['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)) return;
    // Grab the channel to check the message from
    const channel = client.channels.get(packet.d.channel_id);
    // There's no need to emit if the message is cached, because the event will fire anyway for that
    if (channel.messages.has(packet.d.message_id)) return;
    // Since we have confirmed the message is not cached, let's fetch it
    channel.fetchMessage(packet.d.message_id).then(message => {
        // Emojis can have identifiers of name:id format, so we have to account for that case as well
        const emoji = packet.d.emoji.id ? `${packet.d.emoji.name}:${packet.d.emoji.id}` : packet.d.emoji.name;
        // This gives us the reaction we need to emit the event properly, in top of the message object
        const reaction = message.reactions.get(emoji);
        // Adds the currently reacting user to the reaction's users collection.
        if (reaction) reaction.users.set(packet.d.user_id, client.users.get(packet.d.user_id));
        // Check which type of event it is before emitting
        if (packet.t === 'MESSAGE_REACTION_ADD') {
            client.emit('messageReactionAdd', reaction, client.users.get(packet.d.user_id));
        }
        if (packet.t === 'MESSAGE_REACTION_REMOVE') {
            client.emit('messageReactionRemove', reaction, client.users.get(packet.d.user_id));
        }
    });
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }
});

client.on('messageReactionAdd', (reaction, user) => {
//  if (reaction.emoji.name === "<:eggplanthand:642242790855802881>") {
    member.addRole('565667223600103435').catch(console.error);
    return message.channel.send('done');
//  }
});
