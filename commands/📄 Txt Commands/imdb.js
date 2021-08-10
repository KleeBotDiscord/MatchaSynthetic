const discord = require("discord.js");
const axios = require("axios");

module.exports = {
name: "imdb",
  description: "\`Nhận thông tin về loạt phim và phim\`",
  category: "info",
  usage: "imdb <name>",
  run: async (client, message, args, color) => {
    
    if(!args.length) {
      return message.channel.send("\`Vui lòng cho biết tên của phim hoặc loại phim\`")
    }


    let msg = await message.channel.send({embed: {
      "description": "😂\`Chờ tôi tí haha.....\`",
      "color": "YELLOW"
    }})

    
    let movie = await axios(`https://www.omdbapi.com/?apikey=5e36f0db&t=${args.join("+")}`).catch(err => {})
    if(!movie || !movie.data || movie.data.Response === 'False') return msg.edit({
        embed: {
          "description": "Không thể tìm thấy điều gì đó về:`" + args.join(" ") + "`",
          "color": "RED"
        }
      })

    movie = movie.data;
    
    let embed = new discord.MessageEmbed()
    .setTitle(movie.Title)
    .setColor("RANDOM")
    .setThumbnail(movie.Poster)
    .setDescription(movie.Plot)
    .setFooter(`Xếp hạng: ${movie.imdbRating} | Các mùa: ${movie.totalSeasons || "0"}`)
    .addField("Quốc gia", movie.Country, true)
    .addField("Ngôn ngữ", movie.Language, true)
    .addField("Kiểu", movie.Type, true);
    
    
    msg.edit(embed)
    }
    
    
  }
