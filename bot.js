const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "#"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});







 

client.on("ready", () => {
  function lol() {
    client.guilds.get('328932248109842433').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 100);
});



 











































client.login(process.env.BOT_TOKEN);
