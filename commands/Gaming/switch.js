module.exports = {
    name: 'switch',
    description: 'Adds the Switch role to the user.',
    execute(message, args) {
        // Check if they have the Gaming role if not return
        if (message.member.roles.cache.some(role => role.name === 'Gaming')) {
            // Check if they have the PC role already
            if (message.member.roles.cache.some(role => role.name === 'Switch')) return message.channel.send('You already have the Switch role!');
                
            message.member.roles.add('723351071916818603');
            message.channel.send('Switch role has been added!');
        }
    },
};