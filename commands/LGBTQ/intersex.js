module.exports = {
    name: 'intersex',
    description: 'Adds the Intersex role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Intersex')) return message.channel.send('You already have that role!');

        message.member.roles.add('712072047974547483');
        message.channel.send('Role successfully added.');
    },
};