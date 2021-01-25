module.exports = {
    name: 'hug',
    description: 'Used to hug everyone or mention a user to hug them specifically.',
    execute(message, args) {
        
        args = message.mentions.users.size;

        if (!args) {
            message.delete();
            return message.channel.send(`${message.author} gives a big ol' hug to everyone!`);
        }
        else {
            message.delete();
            return message.channel.send(`${message.author} sends love to ${message.mentions.users.first()} with a hug!`);
        }
    },
};