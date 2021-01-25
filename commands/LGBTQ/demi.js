module.exports = {
    name: 'demi',
    description: 'Adds the Demisexual role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Demisexual')) return message.channel.send('You already have that role!');

        message.member.roles.add('712050267285094509');
        message.channel.send('Role successfully added.');
    },
};