module.exports = {
    name: 'jazz',
    description: 'Adds the Jazz role to anyone with the music role already.',
    execute(message, args) {
        // Check if they have the music role, if not return a message
        if (!message.member.roles.cache.some(role => role.id === '723302524970467328')) return message.channel.send('You must first add the music role!');

        // Check if they already have the Rock role and return a message if they do
        if (message.member.roles.cache.some(role => role.name === 'Jazz')) return message.channel.send('You already have that role!');

        message.member.roles.add('726144422613352539');
        message.channel.send('You have successfully added the Jazz role!');
    },
};