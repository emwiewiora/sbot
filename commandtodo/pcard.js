exports.run = (client, message, args) => { // eslint-disable-line no-unused-vars

	// build a table in enmap.sqlite
	// allow users to edit their own profile card
	// allow users to view other users profile cards
	// keys - name, profesional title, open for work
	// display as embed if less than 15 keys else I will have to make a nice looking message card

};

exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: "user"
};

exports.help = {
name: "pcard",
category: "Profile",
description: "Profile card",
usage: "pcard '@user'"
};