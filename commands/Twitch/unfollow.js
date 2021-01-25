module.exports = {
    name: 'unfollow',
    description: 'Removes the follow role for Twitch',
    execute(message, args) {
        if (message.member.roles.cache.some(role => role.name === 'Twitch Follower')) {
            message.member.roles.remove('553220839559004191');
            message.channel.send('The role has been removed');
        }
        
        return message.channel.send('You already removed that role!');
    },
};