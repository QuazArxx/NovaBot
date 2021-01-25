module.exports = {
	same: 'eu',
	description: 'Adds the EU role to whoever used the command. Also removes other regions.',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'EU')) return message.channel.send('You already have the EU role.');

		message.member.roles.add('497095768830771211');
		message.channel.send('You added that you are in the EU region.');
		message.member.roles.remove(['549120439046242309', '549120523150426122', '549120286683955210', '497095801189695509']);
	},
};