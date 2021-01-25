module.exports = {
    name: 'pingme',
    description: 'Adds the PingMe role to be notified of announcements.',
    execute(message,args) {
        // Check if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'PingMe!')) return message.channel.send('You already have that role!');

        message.member.roles.add('671853900965347330');
        message.channel.send('Successfully added the PingMe role!');
    },
};