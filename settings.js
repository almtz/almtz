
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZNbi8yQWVqb3Z6eDB3WVdVaEttN0pzcmZ0WDlaVUlQYkNOL0VaV0gyND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG9mMG9kL000bXQ1azJrLzZXZkx0MHpMQWcrUEJpSXVGKytuSXUyR2tBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0T1hodTFDdzNnOXdWbVVzdCs3OFYyY1RXb0FRd09jS2xYbTRYbWNWRTEwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4dG5tdk8vTDJ4SlBCWEMzOGpjWmlvU2pPbXlNNjlHemtTSEUxRkJtKzB3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFJU3ZVY0tzcWdBQjBqUXZ2NzlmelpiTFFWeHNVMC9QRDF5NHdnNEtFMGM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlQOCtZWUs0c2V1ZXRGVm1aeXViMTFlL1VSS3paN3NnTHJYS2JYaVBJQzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpQWmo4RExxdEtCU05teDVFWVY1bWJMckdyUFE3NFlyMVRiMTU0MFEwTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVkJPQnJRU0tDZlM3Rzg3bjlIYWVHVDIzU20xQXNFZ0xoSVNBOGs1S1ppOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjY3Tng1UExDSmdXWXRlMFpmbWFWY2FzWmxSaWZ0Y0NVVmdGQTIzcEN3OXowUFpxZkQzTUtnb2gzQWIxWGRQdW15Z0hvK3JwM1VwYlpIN0JuOTArUUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEyLCJhZHZTZWNyZXRLZXkiOiJoNVhiV2NIUU4rOWt6SCtLNXd5cUQ5eUxkenVjL05BV0xjT0J2UEk1b2kwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxNTc2NTAwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUExMjUzRjkzRDkzQURFQkNCMTFEMDUzODUxRDhEMCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4NTAwNjc0fSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU2MTU3NjUwMDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxOEJFOThBQ0U0QzExRUJBOUY5NjQxM0EwRDczQjIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2ODUwMDY3NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjE1NzY1MDA5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1OUM1OEE4NzBFODg5MzA1MUJFRDNCOTg4MzRGODBCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Njg1MDA2NzZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTYxNTc2NTAwOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNUM5QzU0OUI0NjE5MUREQkY5MEY1QTE1NTg4QzNDMSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzY4NTAwNjc3fV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IllVUFJBREVWIiwibWUiOnsiaWQiOiIyNTU2MTU3NjUwMDk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwk4CsYdKIbNKIbdKIYdKIY9KIaNKI8JOGiCIsImxpZCI6IjUzMjk2ODM2NDI3OTg5OjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNZXE2c01CRUxIYnBNc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJXOHVuZEc5d09qOWZvRDg5WG1Wd1NMU0l3d3AwaEJ1aGExWXV5STVSWVFzPSIsImFjY291bnRTaWduYXR1cmUiOiJ0ZnFxb2xLdWswTnl5c3J4MnY2YTFvVjI2RnZwUmR3RWFkK2V6NW4rb2pZYzlDbXlCUmh0M2ZjZ29FZDdnMnk2U1hkOXI1V3pXSGxDQmxTMDVCVTRDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoic0JrUUZ1dG5kanArTGRleUxhazdrc29DSCtYcjlQMENLNGdEb2o4UngzWmI1dTZvbU9SbEdqeXVCSHo3dTdYWUxwM2NkVHpQOU5wb01rS0tLaFFRQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU2MTU3NjUwMDk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWdkxwM1J2Y0RvL1g2QS9QVjVsY0VpMGlNTUtkSVFib1d0V0xzaU9VV0VMIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQU1JQlFnSiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njg1MDA2NzIsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFLS1UifQ==",
// add your Session Id make sure it starts with malvin~
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "ᴍᴀʟᴠɪɴ-xᴅ",
// add bot name here for menu
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 

LINK_WHITELIST: "youtube.com,github.com",

    LINK_WARN_LIMIT: 3, // Number of warnings before action

    LINK_ACTION: "kick", // "kick", "mute", or "none"

        AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

        AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

        AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 

        AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY MALVIN XD 😆*",
// set the auto reply massage on status reply  


       WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups 
   
       ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group

      ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

      MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

     MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qumhu4.jpg",
// add custom menu and mention reply image url

       ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xshsmk",
// add img for alive msg

        LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/XdKing2/MALVIN-XD",
// add alive msg here 


        STICKER_NAME: process.env.STICKER_NAME || "ᴍᴀʟᴠɪɴ-xᴅ",
// type sticker pack name 

        CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react  
  
      CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 

          DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 

          OWNER_NUMBER: process.env.OWNER_NUMBER || "26371475XXXX",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ",
// add bot owner name

              DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ*",
// add bot owner name    

        READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

                 AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
                ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  

            ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 

            AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices

        AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

              AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

        ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

         PUBLIC_MODE: process.env.PUBLIC_MODE || "false",
// make false if want private mod

        AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing 
  
   READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

     DEV: process.env.DEV || "263780166288",
//replace with your whatsapp number    
    
    ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

      ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'inbox/ same if you want to resend deleted message in same chat 

      AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

version: process.env.version || "0.0.5",

    
START_MSG: process.env.START_MSG || `*Hᴇʟʟᴏ ᴛʜᴇʀᴇ ᴍᴀʟᴠɪɴ xᴅ ᴄᴏɴɴᴇᴄᴛᴇᴅ! 👋🏻* 

    *ᴋᴇᴇᴘ ᴏɴ ᴜsɪɴɢ ᴍᴀʟᴠɪɴ ᴍᴏᴅs🚩* 

> sᴜʙsᴄʀɪʙᴇ ʏᴛ ᴄʜᴀɴɴᴇʟ ғᴏʀ ᴛᴜᴛᴏʀɪᴀʟs
    https://youtube.com/@malvintech2

    - *ʏᴏᴜʀ ʙᴏᴛ ᴘʀᴇғɪx: ➡️[ . ]*
> - ʏᴏᴜ ᴄᴀɴ ᴄʜᴀɴɢᴇ ᴜʀ ᴘʀᴇғɪx ᴜsɪɴɢ ᴛʜᴇ .ᴘʀᴇғɪx ᴄᴏᴍᴍᴀɴᴅ

> ᴅᴏɴᴛ ғᴏʀɢᴇᴛ ᴛᴏ sʜᴀʀᴇ, sᴛᴀʀ &ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ ⬇️ 
    https://github.com/XdKing2/MALVIN-XD

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ 🇿🇼`
};
