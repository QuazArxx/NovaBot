module.exports = {
    name: 'poly',
    description: 'Adds the Polysexual role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Polysexual')) return message.channel.send('You already have that role!');

        message.member.roles.add('712051849158590496');
        message.channel.send('Role successfully added.');
    },
};