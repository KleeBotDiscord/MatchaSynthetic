const db = require("quick.db")

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns"],
  usage: "rwarns <@user>",
  description: "\`Đặt lại cảnh báo về người được đề cập\`",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("❌\`Bạn nên có quyền của quản trị viên để sử dụng lệnh này\`")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("❌\`Vui lòng đề cập đến người có cảnh báo mà bạn muốn đặt lại\`")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("❌\`Bot không được phép cảnh báo\`")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("❌\`Bạn không được phép đặt lại cảnh báo của mình\`")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} không có bất kỳ cảnh báo nào`)
    }
    
    db.delete(`cảnh báo_${message.guild.id}_${user.id}`)
    user.send(`Tất cả các cảnh báo của bạn được đặt lại bởi: ${message.author.username} đến từ ${message.guild.name}`)
    await message.channel.send(`Đặt lại tất cả các cảnh báo của ${message.mentions.users.first().username}`)
    
  
    
}
}
