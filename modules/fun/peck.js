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
    'https://cdn.discordapp.com/attachments/248586698160603138/413190539316428833/peck.png',
  ];

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: `${message.author.username} Pecked? ${user.username}!`,
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
  name: 'peck',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'peck <@USER_MENTION>',
  example: [ 'peck @user#0001' ]
};
