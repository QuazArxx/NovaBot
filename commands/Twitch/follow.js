module.exports = {
    name: 'follow',
    description: 'Adds the follow role for Twitch',
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'Twitch Follower')) return message.channel.send('You already added that role!');

        message.member.roles.add('553220839559004191');
        message.channel.send('The follower role has been added!');
    },
};