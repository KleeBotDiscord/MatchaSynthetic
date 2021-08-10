const { askdb } = require('../../assets/json/ask.json');
module.exports = {
    name: "Matcha",
    category: "aibot",
    description:"\`Dùng để đàm thoại với bots (Bot rep tục!) )\`",
    usage:">>Matcha < Câu hỏi > ",
    note: "Hơi gắt xíu",
    usage: "<PREFIX>ask <câu hỏi>",
    run: async(client, message, args) => {
        if (!args[0]) return message.reply("\`Hỏi gì đi chứ bạn :D\`");
        const random = askdb[Math.floor(Math.random() * askdb.length)];
        return message.reply(random);
    },
};
