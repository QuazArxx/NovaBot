module.exports = {
	name: 'kick',
	description: 'Kicks users.',
	guildOnly: true,
	usage: '[mention User]',
	execute(message, args) {
		// Checks to see if a user was mentioned and ends
		// if no mention was made
		if (!message.mentions.users.size) {
			return message.channel.send('`Please mention a user to kick them`');
		}

		// Sets the variable for the mentioned member
		args = message.mentions.users.first();

		if (args) {

			// Checks if user is in the server
			const member = message.guild.member(args);

			// If the user is in the server
			// the bot will kick them and send a 'successful' message back
			if (member) {
				member.kick().then(() => {
					message.channel.send('`Kick successful!`');
					// If there are any errors, the bot will respond
					// and an error message will be logged in the console
				}).catch(err => {
					message.channel.send('`Unable to kick member. Check console for details.`');
					console.error(err);
				});
			}
			else {
				message.channel.send('`That person isn\'t a member.`');
			}
		}
	},
};