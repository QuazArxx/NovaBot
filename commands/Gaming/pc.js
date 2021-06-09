module.exports = {
    name: 'pc',
    description: 'Adds the PC role to the user.',
    execute(message, args) {
        // Check if they have the Gaming role if not return
        if (message.member.roles.cache.some(role => role.name === 'Gaming')) {
            // Check if they have the PC role already
            if (message.member.roles.cache.some(role => role.name === 'PC')) return message.channel.send('You already have the PC role!');
            
            message.member.roles.add('723350818417410069');
            message.channel.send('PC role has been added!');
        }
    },
};