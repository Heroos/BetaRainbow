client.on("ready", () => {
  function lol() {
    client.guilds.get('518678302282481684').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});
