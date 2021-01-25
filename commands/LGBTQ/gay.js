module.exports = {
    name: 'gay',
    description: 'Adds the Gay role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Gay')) return message.channel.send('You already have that role!');

        message.member.roles.add('710937608808693791');
        message.channel.send('Role successfully added.');
    },
};