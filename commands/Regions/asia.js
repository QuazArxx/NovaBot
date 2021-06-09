module.exports = {
	same: 'asia',
	description: 'Adds the Asia role to whoever used the command. Also removes other regions.',
	execute(message, args) {
		if (message.member.roles.cache.some(role => role.name === 'Asia')) return message.channel.send('You already have the Asia role.');

		message.member.roles.add('549120286683955210');
		message.channel.send('You added that you are in the Asia region.');
		message.member.roles.remove(['497095768830771211', '549120523150426122', '549120439046242309', '497095801189695509']);
	},
};