module.exports = {
    name: 'he',
    description: 'Adds the He/Him pronoun role.',
    execute(message, args) {
        // Check to see if they already have the role
        if (message.member.roles.cache.some(role => role.name === 'He/Him')) return message.channel.send('You already have that role!');

        message.member.roles.add('706936989617750096');
        message.channel.send('Role successfully added.');
    },
};