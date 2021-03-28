exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars
	// this will randomly pick a number betwee 1 and args[0]
	// if no args are included, default to random number between 1 & 10
	if (!args.length) {
		const rPick = Math.floor(Math.random() * 10);
		message.channel.send(rPick);
	} else {
		const rPick = Math.floor(Math.random() * (args[0] - 1 + 1) + 1);
		message.channel.send(rPick);
	}
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "rnum",
category: "Fun",
description: "Random number between 1 and your maximum number. (default 1 - 10)",
usage: "rnum or rnum #"
};