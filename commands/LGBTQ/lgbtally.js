module.exports = {
    name: 'lgbtally',
    description: 'Adds the LGBT Ally role to a user.',
    execute(message, args) {
        // Check to see if the user already has the role
        if (message.member.roles.cache.some(role => role.name === 'LGBT Ally')) return message.channel.send('You already have that role!');

        message.member.roles.add('714489147162755093');
        message.channel.send('You have successfully received the LGBT Ally role!');
    },
};