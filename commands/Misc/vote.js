const Discord = require('discord.js');
const {prefix} = require('../../config.json');
const colors = require('../../colors.json');

module.exports = {
	name: 'vote',
	description: 'Users can make a poll.',
	execute(message, args) {

        
        
        const a = '🇦';
        const b = '🇧';

        const embed = new Discord.RichEmbed()
        .setColor(colors.serverRed)
        .setTitle('**Vote Below!**')
        .addField(a, args[0])
        .addBlankField()
        .addField(b, args[1])

		args = message.content.slice(prefix.length).split(' ');
		if(!args.length) return message.channel.send('Please provide things to vote for!');
        
        // Deletes the command
		message.delete();

		// Sends the embedded message above and removes the command from the response
		message.channel.send({ embed }).then(sentMessage => {
			// Reacts to it's own message and outputs an error to the console if an emoji can't be used
			sentMessage.react('🇦')
				.then(() => sentMessage.react('🇧'))
				.catch(() => console.error('One of the emojis didn\'t work!'));

        });
	},
};