/**
 * @file slap command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = (Bastion, message) => {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return Bastion.emit('commandUsage', message, this.help);
  }

  let slaps = [
    'https://cdn.discordapp.com/attachments/248586698160603138/413192649177169921/kiss.png',
  ];

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: `${message.author.username} Kissed ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    Bastion.log.error(e);
  });
};

exports.config = {
  aliases: [],
  enabled: true
};

exports.help = {
  name: 'kiss',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'kiss <@USER_MENTION>',
  example: [ 'kiss @user#0001' ]
};
