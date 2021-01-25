module.exports = {
	name: 'na',
	description: 'Adds the NA role to whoever used the command. Also removes other regions.',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'NA')) return message.channel.send('You already have the NA role.');

		message.member.roles.add('497095801189695509');
		message.channel.send('You added that you are in the NA region.');
		message.member.roles.remove(['497095768830771211', '549120286683955210', '549120439046242309', '549120523150426122']);
	},
};