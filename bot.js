const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







 

client.on("ready", () => {
  function lol() {
    client.guilds.get('518874511249244180').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});





client.on('guildMemberAdd', member => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(member.user.avatarURL)
  .addField("***شكرا الانضمامك الينا***" ,member.user.username )
    .setDescription('***الرسالة الترحيب Marley Store***')
    .setColor('RANDOM')
    .setImage('https://cdn.discordapp.com/attachments/518886358320676875/518915195293270038/f8b2f805f1b46d4f.png')
var channel = member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});









































client.login(process.env.BOT_TOKEN);
