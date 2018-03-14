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
    'https://cdn.discordapp.com/attachments/366410302599987211/412107042749153300/ur_goin_down.png',
  ];

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      description: `${message.author.username} Threatened ${user.username}!`,
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
  name: 'urgoindown',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'urgoindown <@USER_MENTION>',
  example: [ 'urgoindown @user#0001' ]
};
