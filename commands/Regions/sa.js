module.exports = {
	same: 'sa',
	description: 'Adds the SA role to whoever used the command. Also removes other regions.',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'SA')) return message.channel.send('You already have the SA role.');

		message.member.roles.add('549120523150426122');
		message.channel.send('You added that you are in the SA region.');
		message.member.roles.remove(['497095768830771211', '549120286683955210', '549120439046242309', '497095801189695509']);
	},
};