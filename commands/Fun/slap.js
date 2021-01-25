module.exports = {
    name: 'slap',
    description: 'Sends a quick slap to a user.',
    execute(message, args) {
        
        args = message.mentions.users.size;

        if (!args) {
            message.delete();
            return message.channel.send(`It's hard to slap someone unless you pick your target(That means mention someone).`);
        }
        else {
            message.delete();
            return message.channel.send(`${message.author} slaps ${message.mentions.users.first()} real fast.\n\n What did they do to deserve that?`);
        }
    },
};