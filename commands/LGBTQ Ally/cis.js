module.exports = {
    name: 'cis',
    description: 'Adds the Cis role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Cis')) return message.channel.send('You already have that role!');

        message.member.roles.add('718141705433513997');
        message.channel.send('Role successfully added.');
    },
};