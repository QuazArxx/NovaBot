const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const profanities = require('profanities/index.json');
const birthdays = require('./birthdays.json');
const schedule = require('node-schedule');
//const streamers = require('./streamers.json');
//const twitchlinks = require('./twitchlinks.json');

const functions = require('./functions.js');

// Use these variables for timeout functions
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

// Variable used for the F timeout function so it can cooldown
var used = false;

// Gets the date "Day of Month"
function getToday(){
    let today = new Date();
    let months = [`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`];
    let suffix = [`st`,`nd`,`rd`];
    return `${today.getDate()}${suffix[today.getDate()] || `th`} of ${months[today.getMonth()]}`;
}

// Declares the client and the commands for the handler
const client = new Discord.Client();
client.commands = new Discord.Collection();

const folders = fs.readdirSync('./commands'); // read the directory of folders

// Sets how to find the subfolders with commands
for (var folder of folders) {
    const files = fs.readdirSync(`./commands/${folder}`); // for each folder, read the files in the folder
    for (var file of files) {
        const command = require(`./commands/${folder}/${file}`); // for each file, set the command
        client.commands.set(command.name, command);
    }
}

// When client turns on it logs that it's on
client.once('ready', () => {
	console.log(`${client.user.username} is online!`);
});

// Checks every day at the same time to see if it's someone's birthday
setTimeout(function() {
	const birthdayCheck = schedule.scheduleJob('11 * * *', function() {
		for (x = 0; x < birthdays.length; x++) {
			if (getToday() == birthdays[x].bday) {
				return client.channels.cache.get('483654529967980554').send(`Everyone wish <@${birthdays[x].userID}> a very happy birthday!`);
			}
		}
	})
}, day)

// Welcomes new members into the server
client.on('guildMemberAdd', member => {
	member.send('Welcome to the Lives of One Discord server! Please make sure to read all of the rules in the getting-to-know-us channel. Once you have finished reading, please type **?agree** in the channel.\n\nYou have **10 minutes** to do this or you will be removed from the server.');
	// member.roles.add('478671428993024000');
});

// When specific people start live streaming, a notification will automatically be sent
// client.on('presenceUpdate', (oldPresence, newPresence, message) => {
//     let oldGame = null;
    
//     const guild = client.guilds.cache.get('478652148691894293');
    
//     if (oldPresence) oldGame = oldPresence.activities.find(activity => activity.type === 'STREAMING') ? true : false;
//     const newGame = newPresence.activities.find(activity => activity.type === 'STREAMING') ? true : false;
	  
// 	if (newPresence.user.bot) return;

//     if (newPresence.guild == guild) {
// 	    if (!oldGame && newGame) {         // Started playing.
// 			for (x = 0; x < streamers.length; x++) {
// 				if (newPresence.member.id == streamers[x]) {
// 					message.guild.channels.cache.get('505090477687832594').send(`Hey everyone! ${newPresence.user.tag} just went live at https://twitch.tv/${twitchlinks[x]}`)
// 				}
// 			}
// 	    }
//     }
// });

// This is the start of the main function when the bot is turned on
client.on('message', async message => {

	if (!message.member.roles.cache.some(role => role.id == '478671428993024000')) {
		message.member.roles.add('478671428993024000');
	}

	const randChance = Math.floor(Math.random() * 100);

	// Checks if bot says a message or if not in the server
	if (message.author.bot || !message.guild) return;

	functions.leveling(message);
	/*functions.addNewUser(message);

	if (randChance > 50) {
		functions.addCoins(message);
	}*/

	const words = message.content.toLowerCase();
	//const connection = await message.member.voice.channel.join()

	// Responds if someone says "shalomi"
	if (words.includes('shalomi')) {
		setTimeout(function() {
		  message.channel.send(`Shut up ${message.author}`);
		}, second * 1.5);
	}

	// Responds if someone says bum
	if (words.includes(' bum ') || words.startsWith('bum') || words.endsWith(' bum') || words == 'bum') {
		setTimeout(function() {
		  message.channel.send('Are we talking about <@458068171241553921>?!');
		}, second * 1.5);
		
	}

	// Responds with the prefix
	if (words == 'prefix') {
		message.channel.send(`The current prefix is "${prefix}".`);
	}

	// Says F in the chat
	if (words == 'f') {
		if (!used) {
			message.channel.send('F');
			used = true;
			setTimeout(function() {
				used = false;
			}, second * 20);
		}
		else return;
	}

	if (words.includes(' headache ') || words.includes(' pain ') || words.startsWith('headache') || words.startsWith('pain') || words.endsWith('headache') || words.endsWith('pain')) {
		if (message.channel.id == '553229486695514128') return;
		
		setTimeout(function() {
			message.channel.send('Need some <@&699769887530418217>?') // Mentions the specific role *note the <@&> for roles and not users*
		}, second * 1.5);
	}

	if (words == '?agree') {
		if (message.channel.id == '721895885746995200') { // Bot will only respond if ?agree is used in the verification channel
			// Sends the welcome message in the Global Chat
			message.guild.channels.cache.get('478652148691894295').send(`Everyone please welcome ${message.author} to Lives of One! ${message.author}, don't forget to <#493866938687029268>!`);
		}
	}

	if (words == `${prefix}join`) {
		if (message.member.voice.channel) {
			return connection;
		}
		else return message.channel.send('You must be in a voice channel first!');
	}

	if (words == `${prefix}leave`) {
		return connection.disconnect();
	}

	/*for (let x = 0; x < profanities.length; x++) {
		if (message.member.roles.some(role => role.id === '483641589193900043')) return; 
		
		else {
			if (message.content.toUpperCase().includes(profanities[x].toUpperCase())) {
				message.channel.send('Oooooooh you said a bad word!');
				client.channels.get('484375912389935126').send(`Message was deleted due to use of a blocked word:\n\n"${message.content}"`);
				message.delete();
				return;
			}
		}
	}*/

	// The bot will not respond if there is no prefix,
	// the user that typed it was a bot,
	// or if it was not sent from in the server
	if (!message.content.startsWith(prefix) || message.author.bot || !message.guild) return;

	// Creates the arguments variable and separates it with a space
	// and creates the command variable
	const args = message.content.slice(prefix.length).split(' ');
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;
	
	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.channel.send('There was an error trying to execute that command!\nCheck the console for details.');
	}
});

// This logs in the bot with the specified token found in config
client.login(token);