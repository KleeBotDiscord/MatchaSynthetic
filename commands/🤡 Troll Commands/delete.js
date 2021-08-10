const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const { getMember } = require('../../include/utils');
module.exports = {
    name: "xóa",
    aliases: ["del"],
    category: "images",
    description: "\`Cho ra meme delete\`",
    usage: "<PREFIX>delete [@tag]",
    run: async (client, message, args) => {
        const nguoitag = await getMember(message, args.join(' '));
        const avaurl = nguoitag.user.displayAvatarURL({ format: 'png', dynamic: false });
        const image = await Canvas.delete(avaurl);
        const attach = new MessageAttachment(image, 'delete.png');
        return message.channel.send(attach);
    },
};
