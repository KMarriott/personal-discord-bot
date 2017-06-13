

// Import the discord.js module
const Discord = require('discord.js');
let config = require('./config.json');
// Create an instance of a Discord client
const client = new Discord.Client();

// The token of your bot - https://discordapp.com/developers/applications/me
const token = config.token;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
	console.log('Say bot ready!');


// finaAll('guild', '315214100500054020')
}
);

function get_channel_ids(guild_id){
	return client.channels
	.findAll('type', "text")
	.filter(function(channel){
		return guild_id === channel.guild.id
	})
	.map(function(channels){
		return channels.name + " " + channels.id});
}

//List channels


// Create an event listener for messages
client.on('message', message => {
	console.log(message.content)
  // If the message is "ping"
  if (message.content === 'ping') {
    // Send "pong" to the same c
    message.channel.send('pong');
}




//Says 
if(message.author.id === "148238506609737729" || message.author.id === "232304655634399232"){
	
	if (message.channel.type === "dm"){

		if (message.content.startsWith("!IDs") || message.content.startsWith("!ids") ) {
			channel_ids = get_channel_ids('315214100500054020')
			message.channel.send(channel_ids)
		}


		if (message.content.startsWith("!Say ") || message.content.startsWith("!say ") ) {
			console.log(message.channel)

			channelID =  message.content.substring(4).split(' ')[1]
			return_message = message.content.substring(4).split(' ')
			return_message.shift()
			return_message.shift()
			return_message = return_message.join(' ')

			console.log("ChannelID: " + channelID)
			console.log("Message: " + return_message)


			if(client.channels.find("id", channelID) === null){
				message.channel.send("Could not find channel ID: " + channelID);
				console.log("Could not find channel ID: " + channelID)
			}
			else{
				channelname = client.channels.find("id", channelID).name
				console.log(client.channels.find("id", channelID).name)
				message.channel.send("Message sent to channel: " + channelname + " (" + channelID + ")")
				client.channels.find("id", channelID).send(return_message);
			}
		}
	}
}
});




// Command: ["!say ", "!Say "]
// return: message.substring(command.length)
// channel: addy.split(',')[0]





// Log our bot in
client.login(token);