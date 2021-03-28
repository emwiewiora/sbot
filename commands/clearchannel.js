exports.run = (client, message) => { // eslint-disable-line no-unused-vars
	if (message.member.hasPermission('ADMINISTRATOR')) {
		message.channel.messages.fetch().then((results) => {
			console.log(results);
			message.channel.bulkDelete(results);
		});
	}
};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["cc"],
permLevel: "Administrator"
};

exports.help = {
name: "clearchannel",
category: "Guild",
description: "This will clear **EVERY** message in the channel up to 14 days old.",
usage: "clearchannel"
};