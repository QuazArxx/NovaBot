module.exports = {
    name: 'other',
    description: 'Adds the Other role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Other')) return message.channel.send('You already have that role!');

        message.member.roles.add('706938651149598780');
        message.channel.send('Role successfully added.');
    },
};