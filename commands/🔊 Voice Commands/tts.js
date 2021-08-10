const { getAudioUrl } = require('google-tts-api');

module.exports = {
    name: 'tts',
    aliases: ['t', 'talk'],
    category: 'fun',
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('\`bạn vui lòng nhập chữ\`');
        const string = args.join (' ');
        if (string.length > 200) return message.channel.send('\`Tối đã 200 ký tự\`');
        const voiceChannel = message.member.voice.channel;
        if (!voiceChannel) return message.reply('\`Bạn phải vào 1 kênh voice\`');
        const audioURL = await getAudioUrl(string,{
            lang: 'vi',
            slow: false,
            host: 'https://translate.google.com',
            timeout: 10000,
        });
        try{
            voiceChannel.join().then(connection => {
                const dispatcher = connection.play(audioURL);
                dispatcher.on('finish', () => {
                });
                queue.channel.leave();
            });
        }
        catch(e) {
            message.channel.send('Đút nhầm lỗ, Vui lòng đút lại sau!');
            console.error(e);
        };
    },
};
