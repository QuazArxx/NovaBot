module.exports = {
	name: 'ban',
	description: 'Bans users.',
	guildOnly: true,
	usage: '[mention User]',
	execute(message, args) {
		// Checks to see if a user was mentioned and ends
		// if no mention was made
		if (!message.mentions.users.size) {
			return message.channel.send('Please mention a user to ban them');
		}
		
		const staffRole = message.guild.roles.find('name', 'Staff');
		if (message.author.roles.has(staffRole.id)) {
			return message.channel.send("You don't have permission to use this command!");
		}

		// Sets the variable for the mentioned member
		args = message.mentions.users.first();

		if (args) {

			// Checks if user is in the server
			const member = message.guild.members(args);

			// If the user is in the server
			// the bot will kick them and send a 'successful' message back
			if (member) {
				member.ban().then(() => {
					message.channel.send('Ban successful!');
					// If there are any errors, the bot will respond
					// and an error message will be logged in the console
				}).catch(err => {
					message.channel.send('Unable to ban member. Check console for details.');
					console.error(err);
				});
			}
			else {
				message.channel.send('That person isn\'t a member.');
			}
		}
	},
}; 