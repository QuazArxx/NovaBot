const {prefix} = require('../../config.json');
const colors = require('../../colors.json');

module.exports = {
	name: 'suggest',
	description: 'Users can suggest new features for the bot',
	execute(message, args) {

		const user = message.author;
		const suggestion = message.content.replace('~suggest', '');

		const embed = {
			'title': 'A new suggestion was made! Vote below!',
			'color': colors.serverRed,
			'fields': [
				{
					'name': '__Suggestion:__',
					'value': `"**${suggestion}**"\n\n-${user}`,
				},
			],
		};

		args = message.content.slice(prefix.length).split(' ');
		const command = args.shift().toLowerCase();

		if (command === `${prefix}suggest`) {
			if(!args.length) return message.channel.send('Please provide a suggestion!');

			// Deletes the command
			message.delete();

			// replies to the user and deletes the reply after 5 seconds
			message.channel.send('Thank you for your suggestion!').then(botMessage => botMessage.delete({timeout:10000}));

			// Sends the embedded message above and removes the command from the response
			message.guild.channels.get('683675519153340438').send({ embed }).then(sentMessage => {
				// Reacts to it's own message and outputs an error to the console if an emoji can't be used
				sentMessage.react('✅')
					.then(() => sentMessage.react('❌'))
					.catch(() => console.error('One of the emojis didn\'t work!'));

			});
		}
	},
};