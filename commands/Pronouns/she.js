module.exports = {
    name: 'she',
    description: 'Adds the She/Her pronoun role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'She/Her')) return message.channel.send('You already have that role!');

        message.member.roles.add('706936936861925387');
        message.channel.send('Role successfully added.');
    },
};