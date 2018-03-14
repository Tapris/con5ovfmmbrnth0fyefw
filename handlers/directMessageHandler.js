/**
 * @file directMessageHandler
 * @author Sankarsan Kampa (a.k.a k3rn31p4nic)
 * @license MIT
 */

/**
 * Handles direct messages sent to Bastion
 * @param {Message} message Discord.js message object
 * @returns {void}
 */
module.exports = message => {
  let prefix = message.client.config.prefix;

  if (message.content.startsWith(prefix)) {
    let args = message.content.split(' ');
    let command = args.shift().slice(prefix.length).toLowerCase();

    if (command === 'help' || command === 'h') {
      return message.channel.send({
        embed: {
          color: message.client.colors.BLUE,
          title: 'Need help or support with Ruby Bot? Just ask tapris!',
          url: 'https://BastionBot.org',
          description: '',
          fields: [
            {
              name: 'Infinity Quest RPG',
              value: 'https://discord.gg/WGxM35s'
            },

          ],
          thumbnail: {
            url: message.client.user.displayAvatarURL
          },
          footer: {
            text: '</> with ❤ Ruby'
          }
        }
      }).catch(e => {
        message.client.log.error(e);
      });
    }
  }
};
