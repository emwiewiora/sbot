exports.run = (client, message) => { // eslint-disable-line no-unused-vars
		// since Math.random picks a number between 0 and 1, no fancy formula needed.
	const flip = Math.random();

	if (flip >= 0.5) {
		message.channel.send('Heads');
	} else {
		message.channel.send('Tails');
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: "User"
};

exports.help = {
  name: "coin",
  category: "Fun",
  description: "Let me flip a coin to help you deside.",
  usage: "coin"
};