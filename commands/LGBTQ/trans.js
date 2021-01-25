module.exports = {
    name: 'trans',
    description: 'Adds the Transgender role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Transgender')) return message.channel.send('You already have that role!');

        message.member.roles.add('710937752845156413');
        message.channel.send('Role successfully added.');
    },
};