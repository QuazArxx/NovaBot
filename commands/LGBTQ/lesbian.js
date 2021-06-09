module.exports = {
    name: 'lesbian',
    description: 'Adds the Lesbian role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Lesbian')) return message.channel.send('You already have that role!');

        message.member.roles.add('710937597513564280');
        message.channel.send('Role successfully added.');
    },
};