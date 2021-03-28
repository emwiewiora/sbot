const Discord = require('discord.js');

exports.run = (client, message) => { // eslint-disable-line no-unused-vars
	
	const casepick = Math.floor(Math.random() * Math.floor(20));
	const sender = message.author;
	let ans;

	switch (casepick) {
	case 0:
		ans = 'It is certain';
		break;
	case 1:
		ans = 'It is decidedly so';
		break;
	case 2:
		ans = 'Without a doubt';
		break;
	case 3:
		ans = 'Yes – definitely';
		break;
	case 4:
		ans = 'You may rely on it';
		break;
	case 5:
		ans = 'As I see it';
		break;
	case 6:
		ans = 'Yes';
		break;
	case 7:
		ans = 'Most Likely';
		break;
	case 8:
		ans = 'Outlook good';
		break;
	case 9:
		ans = 'Signs point to yes';
		break;
	case 10:
		ans = 'Don’t count on it';
		break;
	case 11:
		ans = 'My reply is no';
		break;
	case 12:
		ans = 'My sources say no';
		break;
	case 13:
		ans = 'Outlook not so good';
		break;
	case 14:
		ans = 'very doubtful';
		break;
	case 15:
		ans = 'Reply hazy';
		break;
	case 16:
		ans = 'try again';
		break;
	case 17:
		ans = 'Ask again later';
		break;
	case 18:
		ans = 'Better not tell you now';
		break;
	case 19:
		ans = 'Cannot predict now';
		break;
	case 20:
		ans = 'Concentrate and ask again';
		break;
	}

	const displayEmbed = new Discord.MessageEmbed()
	.setColor('#ff0303')
	.setTitle(`${ans}`)
	.setDescription('The :8ball: has spoken')
	.addField('\u200B', '\u200B', true)
	.setTimestamp()
	.setFooter(message.guild.name);

	message.channel.send(displayEmbed);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "8ball",
category: "Fun",
description: "The magic 8 Ball has the answers to all your question!",
usage: "8ball"
};