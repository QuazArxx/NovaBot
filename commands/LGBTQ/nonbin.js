module.exports = {
    name: 'nonbin',
    description: 'Adds the Nonbinary/Gender Fluid role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Nonbinary/Gender Fluid')) return message.channel.send('You already have that role!');

        message.member.roles.add('711861093194268712');
        message.channel.send('Role successfully added.');
    },
};