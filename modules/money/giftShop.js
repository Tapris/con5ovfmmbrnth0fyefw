/**
 * @file giftShop command
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

exports.exec = (Bastion, message) => {
  let gifts = {
    chocolate_bar: [ '🍫  Chocolate Bar', 20 ],
    icecream: [ '🍦  Ice Cream', 10 ],
    cookie: [ '🍪  Cookie', 5 ],
    cake: [ '🍰  Cake', 20 ],
    ring: [ '💍  Ring', 250 ],
    crown: [ '👑  Crown', 500 ],
    gem: [ '💎  Gem', 100 ],
    gift_heart: [ '💝  Heart', 50 ],
    love_letter: [ '💌  Love Letter', 5 ]
  };

  let giftsField = [];
  for (let gift of Object.values(gifts)) {
    giftsField.push({
      name: gift[0],
      value: `${gift[1]} Bitts each`,
      inline: true
    });
  }

  message.channel.send({
    embed: {
      color: Bastion.colors.BLUE,
      title: 'Shop',
      fields: giftsField,
      footer: {
        text: 'Bitts: Currency'
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
  name: 'shop',
  botPermission: '',
  userTextPermission: '',
  userVoicePermission: '',
  usage: 'shop',
  example: []
};
