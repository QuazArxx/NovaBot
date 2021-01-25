const Discord = require('discord.js');
const {prefix} = require('../../config.json');
const colors = require('../../colors.json');

module.exports = {
	name: 'help',
	description: 'Lists all commands and what they do',
	usage: `${prefix}help`,
	execute(message, args) {
		
		// Makes the Embed message to list the different categories of commands
		const basicHelp = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle(`**__Type ${prefix}help followed by one of the following to get commands:__**`)
		.addFields(
			{ name: '**__hobbies__**', value: 'Will list the different hobbies to find more info on'},
			{ name: '**__lgbt__**', value: 'Only use if you have the LGBTQIA+ role'},
			{ name: '**__ally__**', value: 'Only use if you have the LGBT Ally role'},
			{ name: '**__pronouns__**', value: 'Will list the pronoun commands'}
		)

		const hobbyCommands = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle(`**__Type ${prefix}help followed by one of the following hobbies to get commands for that hobby:__**`)
		.addFields(
			{ name: '**__gaming__**', value: 'Only use if you have the Gaming role'},
			{ name: '**__art__**', value: 'Only use if you have the Arts and Crafts role'},
			{ name: '**__movies__**', value: 'Only use if you have the Movies and TV role'},
			{ name: '**__anime__**', value: 'Only use if you have the Anime role'},
			{ name: '**__music__**', value: 'Only use if you have the Music role'}
		)

		const gameCommands = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle('**__Below are the gaming commands__**')
		.addFields(
			{ name: `**__${prefix}pc__**`, value: 'Adds the PC role to yourself'},
			{ name: `**__${prefix}xbox__**`, value: 'Adds the Xbox role to yourself'},
			{ name: `**__${prefix}ps4__**`, value: 'Adds the PS4 role to yourself'},
			{ name: `**__${prefix}switch__**`, value: 'Adds the Switch role to yourself'}
		)

		const lgbtCommands = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle('**__Below are the LGBTQIA+ commands__**')
		.addFields(
			{ name: `**__${prefix}agender__**`, value: 'Adds the Agender role to yourself'},
			{ name: `**__${prefix}asexual__**`, value: 'Adds the Asexual role to yourself'},
			{ name: `**__${prefix}bi__**`, value: 'Adds the Bisexual role to yourself'},
			{ name: `**__${prefix}demi__**`, value: 'Adds the Demisexual role to yourself'},
			{ name: `**__${prefix}gay__**`, value: 'Adds the Gay role to yourself'},
			{ name: `**__${prefix}intersex__**`, value: 'Adds the Intersex role to yourself'},
			{ name: `**__${prefix}lesbian__**`, value: 'Adds the Lesbian role to yourself'},
			{ name: `**__${prefix}nonbin__**`, value: 'Adds the Nonbinary/Gender Fluid role to yourself'},
			{ name: `**__${prefix}other__**`, value: 'Adds the Other role to yourself'},
			{ name: `**__${prefix}pan__**`, value: 'Adds the Pansexual role to yourself'},
			{ name: `**__${prefix}poly__**`, value: 'Adds the Polysexual role to yourself'},
			{ name: `**__${prefix}trans__**`, value: 'Adds the Transgender role to yourself'}
		)

		const allyCommands = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle('**__Below are the LGBT Ally commands__**')
		.addFields(
			{ name: `**__${prefix}cis__**`, value: 'Adds the Cis role to yourself'},
			{ name: `**__${prefix}straight__**`, value: 'Adds the Straight role to yourself'},
			{ name: `**__${prefix}undefined__**`, value: 'Adds the Undefined role to yourself'}
		)

		const pronounCommands = new Discord.MessageEmbed()
		.setColor(colors.green)
		.setTitle('**__Below are the pronoun commands__**')
		.addFields(
			{ name: `**__${prefix}he__**`, value: 'Adds the He/Him role to yourself'},
			{ name: `**__${prefix}she__**`, value: 'Adds the She/Her role to yourself'},
			{ name: `**__${prefix}they__**`, value: 'Adds the They/Them role to yourself'}
		)
		
		args = message.content.slice(prefix.length).split(' ');
		if (args[1] == 'gaming') {
			if (message.member.roles.cache.some(role => role.name === 'Gaming')) {
				return message.channel.send(gameCommands);
			}
			return message.channel.send('You do not have the Gaming role. To add more hobbies, go to <#493866938687029268>.');
		} else if (args[1] == 'lgbt') {
			if (message.member.roles.cache.some(role => role.name === 'LGBTQIA+')) {
				return message.channel.send(lgbtCommands);
			}
			return message.channel.send('You do not have the LGBTQIA+ role. To add it, go to <#493866938687029268>.');
		} else if (args[1] == 'ally') {
			if (message.member.roles.cache.some(role => role.name === 'LGBT Ally')) {
				return message.channel.send(allyCommands);
			}
			return message.channel.send('You do not have the LGBT Ally role. To add it, go to <#493866938687029268>.')
		} else if (args[1] == 'pronouns') {
			return message.channel.send(pronounCommands);
		} else if (args[1] == 'hobbies') {
			return message.channel.send(hobbyCommands);
		}
		
		message.channel.send(basicHelp);
	},
};