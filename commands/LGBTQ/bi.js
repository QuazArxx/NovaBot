module.exports = {
    name: 'bi',
    description: 'Adds the Bisexual role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Bisexual')) return message.channel.send('You already have that role!');

        message.member.roles.add('710937721446727810');
        message.channel.send('Role successfully added.');
    },
};