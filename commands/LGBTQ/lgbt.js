module.exports = {
    name: 'lgbt',
    description: 'Adds the LGBT role to a user.',
    execute(message, args) {
        // Check to see if the user already has the role
        if (message.member.roles.cache.some(role => role.name === 'LGBTQIA+')) return message.channel.send('You already have that role!');

        message.member.roles.add('716679280867803146');
        message.channel.send('You have successfully received the LGBTQIA+ role!');
    },
};