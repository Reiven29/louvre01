module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: "YELLOW",
            author: {
                name: `Here are your search results for ${query}`,
                icon_url: 'https://imgur.com/l0eUErL.jpg',
              },
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
            timestamp: new Date(),
        footer: {
          icon_url: `${client.emotes.footer_image}`,
          text: `${client.emotes.text_name}`
        }
    }
}
    )};