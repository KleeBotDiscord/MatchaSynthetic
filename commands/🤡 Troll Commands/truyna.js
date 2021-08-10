const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const { getMember } = require('../../include/utils');
module.exports = {
    name: 'wanted',
    aliases: ['truyna'],
    category: 'images',
    description: 'Truy nã',
    usage: '<PREFIX>truyna',
    clientPermissions: [ "ATTACH_FILES" ],
    run: async (client, message, args) => {
        const nguoitag = await getMember(message, args.join(' '));
        const avaurl = nguoitag.user.displayAvatarURL({ format: 'png', dynamic: false });
        const image = await Canvas.wanted(avaurl);
        const attach = new MessageAttachment(image, 'wanted.png');
        return message.channel.send(attach);
    },
};
