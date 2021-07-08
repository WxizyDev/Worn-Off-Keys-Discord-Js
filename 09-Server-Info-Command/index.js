const Discord = require('discord.js')
const client = new Discord.Client()

const config = require('./config.json')
const command = require('./command')

client.on('ready', () => {
  console.log('The client is ready!')

  command(client, 'serverinfo', (message) => {
    const { guild } = message

    const { name, region, memberCount, owner, afkTimeout } = guild
    const icon = guild.iconURL()

    const embed = new Discord.MessageEmbed()
      .setTitle(`Server info for "${name}"`)
      .setThumbnail(icon)
      .setColor('#fff')
      .addFields(
        {
          name: '🌐Region: ',
          value: `The region of this server is: ${region}! `,
        },
        {
          name: '👥Members: ',
          value: `This server has a total of: ${memberCount}`,
        },
        {
          name: '👑Owner: ',
          value: `The server owner is: ${owner}!`,
        },
        {
          name: '🕐AFK Timeout: ',
          value: afkTimeout / 60,
        }
      )

    message.channel.send(embed)
  })
})

client.login(config.token)
