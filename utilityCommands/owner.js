const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'owner',
    description: 'Bot owner info',
    execute(message, args) {
        const youtubeLink = '';
        const InstagramLink = '';
        const embed = new EmbedBuilder()
            .setColor('#FFFFFF')
            .setTitle(' 👑 QUAN TRIỀU ĐÌNH 👑')
            .setDescription(`__**About me**__:\n 🤖 Chúc các quan nghe nhạc vuui vẻ\n ❤️ 💙 )
            .setTimestamp();


        message.reply({ embeds: [embed] });
    },
};

/*

   MADE BY RTX!! FEEL FREE TO USE ANY PART OF CODE

  ██████╗░████████╗██╗░░██╗           
  ██╔══██╗╚══██╔══╝╚██╗██╔╝          
  ██████╔╝░░░██║░░░░╚███╔╝░          
  ██╔══██╗░░░██║░░░░██╔██╗░          
  ██║░░██║░░░██║░░░██╔╝╚██╗          
  ╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝          

   FOR EMOJIS EITHER YOU CAN EDIT OR JOIN OUR DISCORD SERVER 
   SO WE ADD BOT TO OUR SERVER SO YOU GET ANIMATED EMOJIS.

   DISCORD SERVER : https://discord.gg/FUEHs7RCqz
   YOUTUBE : https://www.youtube.com/channel/UCPbAvYWBgnYhliJa1BIrv0A

   FOR HELP CONTACT ME ON DISCORD
   ## Contact    [ DISCORD SERVER :  https://discord.gg/c4kaW2sSbm ]
*/
