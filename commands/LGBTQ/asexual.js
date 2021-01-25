module.exports = {
    name: 'asexual',
    description: 'Adds the Ace/Asexual role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Ace/Asexual')) return message.channel.send('You already have that role!');

        message.member.roles.add('712050164306804766');
        message.channel.send('Role successfully added.');
    },
};