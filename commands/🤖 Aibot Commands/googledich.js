const Discord = require('discord.js');
const { translate } = require('bing-translate-api');
const config = require('../../config.json');

module.exports = {
  name: "ggd",
  aliases: ["google-dich"],
  category: "aibot",
  description: "\`Phiên dịch chuyển chữ từ tiếng anh (english) sang tiếng việt (vietnamese)\`",
  usage: "!ggd vietnamese hello",

  run: async (client, message, args) => {

    if (args.length < 2) {
    return message.reply("\`Hãy sử dụng | !ggd vietnamese hello | để dịch chữ nó như là google dịch vậy\`")
    }
  
    try {

      const result = await translate(args.slice(1).join(' '), null, args[0]);
      
      const embed = new Discord.MessageEmbed()
  
      .setTitle('Người phiên dịch')
      .setColor(message.guild.me.displayHexColor)
      .addField('Dịch từ', `\`\`\`${result.text}\`\`\``)
      .addField('Đã dịch sang', `\`\`\`${result.translation}\`\`\``)
      .setTimestamp()
      message.channel.send(embed)
    }  catch (err) {
      message.channel.send(`Không dịch được **${args[1]}** đến **${args[0]}**`);
    }
  }
}
