module.exports = {
    name: 'pan',
    description: 'Adds the Pansexual role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Pansexual')) return message.channel.send('You already have that role!');

        message.member.roles.add('712051813892751521');
        message.channel.send('Role successfully added.');
    },
};