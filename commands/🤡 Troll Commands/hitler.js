const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const { getMember } = require('../../include/utils');
module.exports = {
    name: "hitler",
    category: 'vui',
    description: 'xuất ra ảnh meme',
    usage: '<PREFIX> hitler [@tag]',
    run: async (client, message, args) => {
        await getMember(message, args.join(' '));
        const nguoitag = message.mentions.members.first() || message.member;
        const avaurl = nguoitag.user.displayAvatarURL({ format: 'png', dynamic: false });
        const image = await Canvas.hitler(avaurl);
        const attach = new MessageAttachment(image, 'hitler.png');
        return message.channel.send(attach);
    },
};
