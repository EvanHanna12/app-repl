const Discord = require('discord.js-light');

module.exports = {
    name: 'invite',
    description: 'Bot invite URL.',
    usage: 'invite',
    aliases: [],
    permissions: [],
    botPermissions: [],
    nsfw: false,
    cooldown: 1000,
    ownerOnly: false
}

module.exports.execute = async(bot, msg, args, data) => {
    let link = '';
    let embed = new Discord.MessageEmbed()
        .setColor(bot.config.color)
        .setTitle('Invite me')
        .setURL(link)
        .setDescription('Use this link to invite me to your server:\n\n' + link);
    return msg.channel.send(embed);
}