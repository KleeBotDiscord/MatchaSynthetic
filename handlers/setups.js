const config = require("../config.json")

module.exports = (client) => {
     client.on("ready", async() => {
   setInterval(() => {
      stateswitch = !stateswitch; //thay đổi trạng thái
         if (stateswitch) client.user.setActivity(`${PREFIX}help and ${PREFIX}play`, { type: "LISTENING" });
         else client.user.setActivity(`${client.guilds.cache.reduce((c, g) => c + g.memberCount, 0)} Thành viên | ${client.guilds.cache.size} Server `, { type: "PLAYING" });
          
   }, 2000); 
  client.user.setStatus('idle');
});
}


