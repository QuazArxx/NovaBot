module.exports = {
    name: 'xbox',
    description: 'Adds the Xbox role to the user.',
    execute(message, args) {
        // Check if they have the Gaming role if not return
        if (message.member.roles.cache.some(role => role.name === 'Gaming')) {
            // Check if they have the PC role already
            if (message.member.roles.cache.some(role => role.name === 'Xbox')) return message.channel.send('You already have the Xbox role!');
                
            message.member.roles.add('723351044679139378');
            message.channel.send('Xbox role has been added!');
        }
    },
};