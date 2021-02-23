exports.run = (core) => {
  
    core.on("Discord_Message", msg => {
        if (msg.content.includes('bacon')){
            msg.react('🥓');
        }
    })
})
