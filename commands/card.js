const Discord = require('discord.js');

exports.run = (client, message) => { // eslint-disable-line no-unused-vars
	if (message.channel.name != 'card') {
		return message.reply('You need to be in the card room');
	}	
	const casepick = Math.floor(Math.random() * Math.floor(77));
	let tCard;

	switch (casepick) {
	case 0:
		tCard = 'The Fool';
		break;
	case 1:
		tCard = 'The Magician';
		break;
	case 2:
		tCard = 'The High Priestess';
		break;
	case 3:
		tCard = 'The Empress';
		break;
	case 4:
		tCard = 'The Emperor';
		break;
	case 5:
		tCard = 'The Hierophant';
		break;
	case 6:
		tCard = 'The Lovers';
		break;
	case 7:
		tCard = 'The Chariot';
		break;
	case 8:
		tCard = 'Strength';
		break;
	case 9:
		tCard = 'The Hermit';
		break;
	case 10:
		tCard = 'Wheel of Fortune';
		break;
	case 11:
		tCard = 'Justice';
		break;
	case 12:
		tCard = 'The Hanged Man';
		break;
	case 13:
		tCard = 'Death';
		break;
	case 14:
		tCard = 'Temperance';
		break;
	case 15:
		tCard = 'The Devil';
		break;
	case 16:
		tCard = 'The Tower';
		break;
	case 17:
		tCard = 'The Star';
		break;
	case 18:
		tCard = 'The Moon';
		break;
	case 19:
		tCard = 'The Sun';
		break;
	case 20:
		tCard = 'Judgment';
		break;
	case 21:
		tCard = 'The World';
		break;
	case 22:
		tCard = 'Ace of Wands';
		break;
	case 23:
		tCard = 'Two of Wands';
		break;
	case 24:
		tCard = 'Three of Wands';
		break;
	case 25:
		tCard = 'Four of Wands';
		break;
	case 26:
		tCard = 'Five of Wands';
		break;
	case 27:
		tCard = 'Six of Wands';
		break;
	case 28:
		tCard = 'Seven of Wands';
		break;
	case 29:
		tCard = 'Eight of Wands';
		break;
	case 30:
		tCard = 'Nine of Wands';
		break;
	case 31:
		tCard = 'Ten of Wands';
		break;
	case 32:
		tCard = 'Page of Wands';
		break;
	case 33:
		tCard = 'Knight of Wands';
		break;
	case 34:
		tCard = 'Queen of Wands';
		break;
	case 35:
		tCard = 'King of Wands';
		break;
	case 36:
		tCard = 'Ace of Cups';
		break;
	case 37:
		tCard = 'Two of Cups';
		break;
	case 38:
		tCard = 'Three of Cups';
		break;
	case 39:
		tCard = 'Four of Cups';
		break;
	case 40:
		tCard = 'Five of Cups';
		break;
	case 41:
		tCard = 'Six of Cups';
		break;
	case 42:
		tCard = 'Seven of Cups';
		break;
	case 43:
		tCard = 'Eight of Cups';
		break;
	case 44:
		tCard = 'Nine of Cups';
		break;
	case 45:
		tCard = 'Ten of Cups';
		break;
	case 46:
		tCard = 'Page of Cups';
		break;
	case 47:
		tCard = 'Knight of Cups';
		break;
	case 48:
		tCard = 'Queen of Cups';
		break;
	case 49:
		tCard = 'King of Cups';
		break;
	case 50:
		tCard = 'Ace of Swords';
		break;
	case 51:
		tCard = 'Two of Swords';
		break;
	case 52:
		tCard = 'Three of Swords';
		break;
	case 53:
		tCard = 'Four of Swords';
		break;
	case 54:
		tCard = 'Five of Swords';
		break;
	case 55:
		tCard = 'Six of Swords';
		break;
	case 56:
		tCard = 'Seven of Swords';
		break;
	case 57:
		tCard = 'Eight of Swords';
		break;
	case 58:
		tCard = 'Nine of Swords';
		break;
	case 59:
		tCard = 'Ten of Swords';
		break;
	case 60:
		tCard = 'Page of Swords';
		break;
	case 61:
		tCard = 'Knight of Swords';
		break;
	case 62:
		tCard = 'Queen of Swords';
		break;
	case 63:
		tCard = 'King of Swords';
		break;
	case 64:
		tCard = 'Ace of Pentacles';
		break;
	case 65:
		tCard = 'Two of Pentacles';
		break;
	case 66:
		tCard = 'Three of Pentacles';
		break;
	case 67:
		tCard = 'Four of Pentacles';
		break;
	case 68:
		tCard = 'Five of Pentacles';
		break;
	case 69:
		tCard = 'Six of Pentacles';
		break;
	case 70:
		tCard = 'Seven of Pentacles';
		break;
	case 71:
		tCard = 'Eight of Pentacles';
		break;
	case 72:
		tCard = 'Nine of Pentacles';
		break;
	case 73:
		tCard = 'Ten of Pentacles';
		break;
	case 74:
		tCard = 'Page of Pentacles';
		break;
	case 75:
		tCard = 'Knight of Pentacles';
		break;
	case 76:
		tCard = 'Queen of Pentacles';
		break;
	case 77:
		tCard = 'King of Pentacles';
		break;
	}

	const displayEmbed = new Discord.MessageEmbed()
		.setColor('#0099ff')
		.setTitle('From the deck I pull...')
		.setDescription(`${tCard}`)
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
name: "card",
category: "Fun",
description: "Let me draw your tarot card.",
usage: "card"
};