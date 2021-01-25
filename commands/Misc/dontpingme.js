module.exports = {
    name: 'dontpingme',
    description: 'Removes the PingMe role to not be notified of announcements.',
    execute(message, args) {
        //Check if they have the role and remove it if they do
        if (message.member.roles.cache.some(role => role.name === 'PingMe!')) {
            message.member.roles.remove('671853900965347330');
            message.channel.send('You will no longer be pinged for announcements.');
        }
    },
};