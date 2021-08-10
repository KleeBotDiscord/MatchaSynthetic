const Discord = require("discord.js");
const pet = require("pet-pet-gif");
const config = require('../../config.json');

module.exports = {
name: "petemoji",
aliases: ["emojipet"],
description: "\`Vuốt emoji như vuốt chó\`",
usage: "!petpet 😂",
category: "fun",

run: async(client, message, args) => {

if(!args[0]) return message.channel.send("😳\`Đề cập đến biểu tượng cảm xúc để có được phiên bản thú cưng của biểu tượng cảm xúc đó\`")

  try {
    const emoji =
      message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

      let petpetemoji = await pet(emoji);

      const petpet = new Discord.MessageAttachment(petpetemoji, "petpet.gif");
      await message.channel.send(petpet);
    } catch (e) {
      return message.reply("❌\`Mày không thể làm thế với emoji này\`")
    }
  }
};
