const Discord = require('discord.js');
const request = require('node-superfetch');
const config = require('../../config.json');

require('dotenv').config();

module.exports = {
    name: "google",
    aliases: ["search"],
    description: "\`Tìm kiếm các channel, https, và nhiều cái khác kể cả phim con heo\`",
    category: "internet",
    usage: `${config.Prefix}google sex :))`,

    run: async (client, message, args) => {

        let key = config.GOOGLE_KEY;
        let csx = config.ENGINE_ID;
        let query = args.join(" ");

        const channel = message.channel.nsfw
        if (!channel)
        return message.reply(`${emoji.Error} Vui lòng đảm bảo rằng lệnh được thực thi trong một kênh nsfw. Ngoài ra, xin đừng cảm thấy tồi tệ khi làm điều này, đó không phải là những gì bạn nghĩ mọi người có thể tìm kiếm bất cứ thứ gì trên google!!!`)

        if (!query)
        return message.reply(`${emoji.Error} Cung cấp một truy vấn cho google !! \`${config.Prefix}google Apple\``);

        async function search(query) {
            const { body } = await request.get("https://www.googleapis.com/customsearch/v1").query({
                key: key, cx: csx, safe: "off", q: query
            });

            if(!body.items) return null;
            return body.items[0];

        }

        let href = await search(query);
        if (!href)
        return message.reply(`${emoji.Error} Không thể tìm kiếm **${query}**`)

        const embed = new Discord.MessageEmbed()
        .setTitle(href.title)
        .setDescription(href.snippet)
        .setImage(href.pagemap ? href.pagemap.cse_thumbnail[0].src: null)
        .setURL(href.link)
        .setColor(message.guild.me.displayHexColor)
        .setFooter(`Matcha Synthetic | yêu cầu bởi ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        return message.channel.send(embed)
    }
}
