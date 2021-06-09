module.exports = {
	same: 'oce',
	description: 'Adds the Oce role to whoever used the command. Also removes other regions.',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'Oce')) return message.channel.send('You already have the Oce role.');

		message.member.roles.add('549120439046242309');
		message.channel.send('You added that you are in the Oce region.');
		message.member.roles.remove(['497095768830771211', '549120523150426122', '549120286683955210', '497095801189695509']);
	},
};