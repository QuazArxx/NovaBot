const fs = require('fs');

const { prefix } = require('../../config.json');
const levels = require('../../levels.json');

module.exports = {
    name: 'setexp',
    description: 'Sets mentioned users exp',
    usage: `${prefix}setexp <@user> <exp>`,
    execute(message, args) {
        args = message.content.slice(prefix.length).split(' ');

        if (!message.member.roles.cache.some(role => role.id === '483641589193900043')) return message.channel.send('You must be a staff member to use this command!');
        if (!message.mentions.users.size) return message.channel.send('You have to mention someone to set their exp.');
        if (!levels[message.mentions.users.first().id]) return message.channel.send('They haven\'t been added to the file yet.');
        if (message.mentions.users.size && !args[2]) return message.channel.send('Please enter the amount of exp to set.');

        mentionedUser = message.mentions.users.first();

        levels[mentionedUser.id].exp = (+args[2]);

        fs.writeFile('./levels.json', JSON.stringify(levels), err => {
            if (err) console.error(err);
        });

        message.channel.send('Exp set successfully!');
    },
};