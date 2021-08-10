const array = require('../../assets/json/thinh.json').data;
module.exports = {
    name: "thinh",
    aliases: ["thính", 'bả', 'xin'],
    category: "fun",
    description: "\`Xin thính để đi tán gái\`",
    usage: ">>thính < không cần tag ai cả >",
    cooldown: 2,
    run: async(client, message, args) => {
        const random = array[Math.floor(Math.random() * array.length)];
        message.channel.send(random);
    },
};
