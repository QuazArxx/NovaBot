const fs = require('fs');
const Discord = require('discord.js');
const Canvas = require('canvas');

const { prefix } = require('./config.json')
const levels = require('./levels.json');
const expLevels = require('./expLevels.json');

const client = new Discord.Client();

module.exports = {
    leveling: function (message) {
        if (message.content.startsWith(prefix)) return;

        if (!levels[message.author.id]) {
            levels[message.author.id] = {
                level: 1,
                exp: 0
            }	
        }
    
        // Gives random EXP
        let randomExp = Math.floor(Math.random() * 10 + 15);
    
        // Adds the random EXP to their current EXP
        levels[message.author.id].exp += randomExp;

        // remember the old level
        let previousLevel = levels[message.author.id].level;

        // level up according to xp
        for(let i = 0; i < expLevels.length; i++) {
            if (levels[message.author.id].exp >= expLevels[i]) {
                levels[message.author.id].level = i + 1;
            } 
        }

        // check how many levels we gained
        let amountGained = levels[message.author.id].level - previousLevel;

        // if we gained more than 0 we can display a message
        if(amountGained > 0) {
            message.reply(`congrats! You've reached level ${levels[message.author.id].level}!`);
        }

        fs.writeFile('./levels.json', JSON.stringify(levels), err => {
            if (err) console.error(err);
        });

        this.rankUp(message);
    },

    rankUp: function (message) {
        if (levels[message.author.id].level == 10) { // Bronze to Silver
            message.member.roles.add('478672028644409375');
            message.member.roles.remove('478671428993024000');
            //message.channel.send('You made it to Silver Tier!')
        } else if (levels[message.author.id].level == 20) { // Silver to Gold
            message.member.roles.add('493923920429187092');
            message.member.roles.remove('478672028644409375');
            //message.channel.send('You made it to Gold Tier!')
        } else if (levels[message.author.id].level == 35) { // Gold to Platinum
            message.member.roles.add('527909400825036840');
            message.member.roles.remove('493923920429187092');
            //message.channel.send('You made it to Platinum Tier!')
        } else if (levels[message.author.id].level == 50) { // Platinum to Diamond
            message.member.roles.add('527908761193414658');
            message.member.roles.remove('527909400825036840');
            //message.channel.send('You made it to Diamond Tier!')
        } else if (levels[message.author.id].level == 80) { // Diamond to Master
            message.member.roles.add('528222949635915787');
            message.member.roles.remove('527908761193414658');
            //message.channel.send('You made it to Master Tier!')
        }
    }
}

