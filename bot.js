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













client.login(process.env.TOKEN);// لا تغير فيها شيء
