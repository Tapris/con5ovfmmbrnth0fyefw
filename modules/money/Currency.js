/**
 * @file bastionCurrency command
 * @author Ruby
 * @license MIT
 */

exports.exec = async (Bastion, message, args) => {
  try {
    args = message.mentions.users.first() || message.author;

    let profile = await Bastion.db.get(`SELECT bastionCurrencies FROM profiles WHERE userID=${args.id}`), bastionCurrencies = 0;

    if (profile && profile.bastionCurrencies) {
      bastionCurrencies = profile.bastionCurrencies;
    }

    let description = message.author.id === args.id ? `**${args.tag}** you currently have **${bastionCurrencies}** Bitts in your account.` : `**${args.tag}** currently has **${bastionCurrencies}** Bitts in their account.`;

    message.channel.send({
      embed: {
        color: Bastion.colors.BLUE,
        description: description
      }
    }).catch(e => {
      Bastion.log.error(e);
    });
  }
  catch (e) {
    Bastion.log.error(e);
  }
};

exports.config = {
  aliases: [ 'currency', 'money' ],
  enabled: true
};

exports.help = {
  name: 'bal',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'bal [@user-mention]',
  example: [ 'bal', 'bal @user#0001' ]
};
