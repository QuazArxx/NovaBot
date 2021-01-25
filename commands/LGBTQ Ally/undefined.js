module.exports = {
    name: 'undefined',
    description: 'Adds the Undefined role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Undefined')) return message.channel.send('You already have that role!');

        message.member.roles.add('718139649599733841');
        message.channel.send('Role successfully added.');
    },
};