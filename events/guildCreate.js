const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**LiMoon BOT sunucunuza eklendi!**',
  '**LiMoon BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot Onur A. tarafından geliştirilmektedir (https://alponur.tk)',
  'Bot geliştirilirken Serhan E. Tarafından yardım alınmıştır.'
  'Botumuzun özelliklerini öğrenmek için !yardım komutunu kullanabilirsin.',
  '**ÖNEMLİ:** Botun kullanması için mod-log kanalı açın ve deneme için',
  '!uyarı komutunu kullanın.',
  '',
  '**LiMoon BOT Resmî Discord Sunucusu** https://discord.gg/4npdDAF'
  `**Sohbet ve Oyun BOT Resmî Discord Sunucusu** https://discord.gg/GvfuXmE`,
  `**Sohbet ve Oyun Discord Sunucusu** https://discord.gg/GEeGjnH`
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
