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
    .setDescription('**هلا بيك في سرفرنا ي بطل**')
    .setColor('RANDOM')
    .setImage('https://cdn.pg.sa/WbyPcWcnZw.png')
var channel = member.guild.channels.find('name', 'welcome')
if (!channel) return;
channel.send({embed : embed});
});









































client.login(process.env.BOT_TOKEN);
