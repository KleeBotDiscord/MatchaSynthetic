const { Canvas } = require('canvacord');
const { MessageAttachment } = require('discord.js');
const { getMember } = require('../../include/utils');
module.exports = {
    name: 'vaotu',
    category: 'images',
    description: 'Cho vào tù',
    usage: '<PREFIX>vaotu [@tag]',
    clientPermissions: [ "ATTACH_FILES" ],
    run: async (message, args) => {
        const nguoitag = await getMember(message, args.join(' '));
        const avaurl = nguoitag.user.displayAvatarURL({ format: 'png', dynamic: false });
        const image = await Canvas.jail(avaurl);
        const attachment = new MessageAttachment(image, 'jail.png');
        return message.channel.send(attachment);
    },
};
