const { DiscordAPIError } = require("discord.js");

const Discord = require('discord.js');
const colors = require('../../colors.json');
const {prefix} = require('../../config.json');

module.exports = {
    name: 'report',
    description: 'Used to report another member of the community.',
    execute(message, args) {
        args = message.content.slice(prefix.length).split(' ');
        const userReported = message.mentions.users.first();
        const mention = message.mentions.users.size;
        const comments = args.slice(3).join(' ');
        
        if (!mention) {
            message.delete();
            return message.channel.send('Please mention the user to report them.');
        } else if (!args[2]) {
            message.delete();
            return message.channel.send('You need to give a reason for the report.');  
        } else if (!comments) { 
            message.delete();
            return message.channel.send('Please add some words to explain your reason.');
        }  

        const reports = new Discord.MessageEmbed()
        .setColor(colors.serverRed)
        .setTitle(`${message.author.username} made a report!`)
        .addFields(
            {name: '__Person they reported:__', value: `${userReported}`},
            {name: '__Reason for reporting them:__', value: `${args[2]}`},
            {name: '__Comments:__', value: `${comments}`}
        )
        message.channel.send('Report sent successfully!').then(botMessage => botMessage.delete({timeout:5000}))
        message.guild.channels.get('584219074821619712').send(reports);
    },
};