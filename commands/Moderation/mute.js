/* module.exports = {
	name: 'mute',
	description: 'Mutes users.',
	guildOnly: true,
	execute(message) {
		// Checks to see if a user was mentioned and ends
		// if no mention was made
		if (!message.mentions.users.size) {
			return message.reply('Please mention a user to mute them');
		}

		// Sets the variable for the mentioned member
		const user = message.mentions.users.first();

		if (user) {

			// Checks if user is in the server
			const member = message.guild.member(user);

			// If the user is in the server
			// the bot will kick them and send a 'successful' message back
			if (member) {
				member.mute().then(() => {
					message.channel.send('MWAHAHAHA GET MUTED BITCH!');
					// If there are any errors, the bot will respond
					// and an error message will be logged in the console
				}).catch(err => {
					message.channel.send('Unable to MUTE member. Check console for details.');
					console.error(err);
				});
			}
			else {
				message.reply('That person isn\'t a member.');
			}
		}
	},
}; */