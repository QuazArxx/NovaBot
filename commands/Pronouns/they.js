module.exports = {
    name: 'they',
    description: 'Adds the They/Them pronoun role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'They/Them')) return message.channel.send('You already have that role!');

        message.member.roles.add('706937026297069688');
        message.channel.send('Role successfully added.');
    },
};