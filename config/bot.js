module.exports = {
    emojis: {
        off: '<a:Cross:862401885197959198>',
        error: '<:Warning:862402411406426162>',
        queue: '<:QueueList:867107201239089163>',
        music: '<a:NowPlaying:862407147546607616>', // - Now Playing
        success: '<a:Check:862401709237600317>',

        // - Embed - //
        title_name: 'Vodify', // - Title
        text_name: 'Vodify 2021', // - Footer
        footer_image: 'https://imgur.com/rlO72rk.jpg', // - Footer Image
        adding_filter: '<:Boombox:862405858083864576>', // - Adding Filter Emoji
        musicaddedqueue: '<a:Added_to_queue:862409819746861076>', // - Music Added To Queue Emoji
    },

    discord: {
        token: process.env.token,
        prefix: '+',
        activity: 'Vodify ⁃ +help',
    },

    filters: ['8D', 'gate', 'haas', 'phaser', 'treble', 'tremolo', 'vibrato', 'reverse', 'karaoke', 'flanger', 'mcompand', 'pulsator', 'subboost', 'bassboost', 'vaporwave', 'nightcore', 'normalizer', 'surrounding'],
};