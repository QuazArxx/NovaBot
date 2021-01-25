module.exports = {
    name: 'agender',
    description: 'Adds the Agender role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Agender')) return message.channel.send('You already have that role!');

        message.member.roles.add('712065723697987664');
        message.channel.send('Role successfully added.');
    },
};