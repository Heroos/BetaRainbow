client.on("ready", () => {
  function lol() {
    client.guilds.get('518874511249244180').roles.find("name", "Disco").setColor("RANDOM");
  };
  setInterval(lol, 10000);
});
