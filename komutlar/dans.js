const Discord = require('discord.js');
exports.run = function(client, message, args) {
   message.channel.sendMessage('RENK');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dans', 'o zaman', 'o zaman dans', 'o zaman dons'],
  permLevel: 0
};

exports.help = {
  name: 'dans',
  description: 'Eğlence.',
  usage: 'dans'
};
