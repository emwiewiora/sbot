exports.run = (client, message) => { // eslint-disable-line no-unused-vars

	const key = `${message.guild.id}-${message.author.id}`;
	return message.channel.send(`You currently have ${client.points.get(key, "points")} points, and are level ${client.points.get(key, "level")}!`);
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: "User"
};

exports.help = {
name: "points",
category: "GPS",
description: "Let's see how many points you have.",
usage: "points"
};