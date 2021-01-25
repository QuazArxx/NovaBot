const Discord = require('discord.js');
const Canvas = require('canvas');

const levels = require('../../levels.json');
const colors = require('../../colors.json');



module.exports = {
    name: 'rank',
    description: 'Displays the level and exp amount',
    async execute(message, args) {

        const levelText = (canvas, text) => {
            const ctx = canvas.getContext('2d');
        
            let fontSize = 70;
        
            do {
                ctx.font = `${fontSize -= 10}px Times New Roman`;
            } while (ctx.measureText(text).width > canvas.width - 300);
        
            return ctx.font;
        };
        
        const expText = (canvas, text) => {
            const ctx = canvas.getContext('2d');
        
            let fontSize = 90;
        
            do {
                ctx.font = `${fontSize -= 10}px Times New Roman`;
            } while (ctx.measureText(text).width > canvas.width - 310);
        
            return ctx.font;
        };

        const canvas = Canvas.createCanvas(700, 250);
        const ctx = canvas.getContext('2d');

        const background = await Canvas.loadImage('./LevelBackground.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

        ctx.strokeStyle = '#74037b';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        if (!message.mentions.users.size) {
            ctx.font = levelText(canvas, levels[message.author.id].level);
            ctx.fillStyle = colors.white;
            ctx.fillText(`Level: ${levels[message.author.id].level}`, canvas.width / 2.7, canvas.height / 3.5);

            ctx.font = expText(canvas, levels[message.author.id].exp);
            ctx.fillStyle = colors.white;
            ctx.fillText(`Exp: ${levels[message.author.id].exp}`, canvas.width / 2.7, canvas.height / 1.1);

            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            const avatar = await Canvas.loadImage(message.member.user.displayAvatarURL({ format: 'jpg' }));
            ctx.drawImage(avatar, 25, 25, 200, 200);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'levelImage.png');

            return message.channel.send(attachment);
        } else {
            ctx.font = levelText(canvas, levels[message.author.id].level);
            ctx.fillStyle = colors.white;
            ctx.fillText(`Level: ${levels[message.mentions.users.first().id].level}`, canvas.width / 2.7, canvas.height / 3.5);

            ctx.font = expText(canvas, levels[message.mentions.users.first().id].exp);
            ctx.fillStyle = colors.white;
            ctx.fillText(`Exp: ${levels[message.mentions.users.first().id].exp}`, canvas.width / 2.7, canvas.height / 1.1);

            ctx.beginPath();
            ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();

            const avatar = await Canvas.loadImage(message.mentions.users.first().displayAvatarURL({ format: 'jpg' }));
            ctx.drawImage(avatar, 25, 25, 200, 200);

            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'levelImage.png');

            return message.channel.send(attachment);
        }
    },
};