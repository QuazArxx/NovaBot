module.exports = {
    name: 'ps4',
    description: 'Adds the PS4 role to the user.',
    execute(message, args) {
        // Check if they have the Gaming role if not return
        if (message.member.roles.cache.some(role => role.name === 'Gaming')) {
            // Check if they have the PC role already
            if (message.member.roles.cache.some(role => role.name === 'PS4')) return message.channel.send('You already have the PS4 role!');
                
            message.member.roles.add('723350854626705429');
            message.channel.send('PS4 role has been added!');
        }
    },
};