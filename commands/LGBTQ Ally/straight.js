module.exports = {
    name: 'straight',
    description: 'Adds the Straight role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'Straight')) return message.channel.send('You already have that role!');

        message.member.roles.add('718139641194348608');
        message.channel.send('Role successfully added.');
    },
};