const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json')

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`Bebek ${client.user.tag} adı ile giriş yaptı!`);
});

client.on('message', msg => {
  console.log(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
  if (msg.author.id === ayarlar.id) return;
  if (msg.author.bot) return;
  client.channels.get("363684402338856960").sendMessage(`LOG: S: ${msg.guild.name} M: ${msg.content} Y: ${msg.author.tag}`);
}

  if (!msg.content.startsWith(prefix)) {
    return;
  }

  if (msg.content.toLowerCase() === prefix + 'o zaman dons') {
    msg.channel.sendMessage('RENK');
  }

  if (msg.content.toLowerCase() === prefix + 'ping') {
    msg.channel.sendMessage(client.ping + ' ms');
  }

   if (msg.content.toLowerCase() === prefix + 'reboot') {
       if (msg.author.id !== ayarlar.sahip) {
         msg.reply('Benim yapımcım değilsin!');
       } else {
         msg.channel.sendMessage(`Bot yeniden başlatılıyor...`).then(msg => {
         console.log(`BOT: Bot yeniden başlatılıyor...`);
         process.exit(0);
       })
      }
     }
   });

client.login(ayarlar.token);
