const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || "SILENT-SOBX-MD~aJgGEBAJ#fY_E0x8fOcn7HRgK0kU5s7E6S-Nm-WE_86oD8HBgci8",
    CAPTION: process.env.CAPTION || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴜᴢᴀᴍᴍɪʟᴋʜᴀɴ",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
    AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "true", // Added auto-read configuration
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "true",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "> ʜɪ ᴅᴇᴀʀ ɪ ᴀᴍ ᴏɴʟɪɴᴇ ɪ ᴀᴍ ᴍᴜᴢᴀᴍᴍɪʟ ᴋʜᴀᴅɪᴍ 😊♻️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || ".",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    FAKE_TYPING: process.env.FAKE_TYPING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
    AUTO_REACT: process.env.AUTO_REACT || "true",
    HEART_REACT: process.env.HEART_REACT || "true",
    OWNER_REACT: process.env.OWNER_REACT || "true",
    READ_CMD: process.env.READ_CMD || "true",
    BOT_NAME: process.env.BOT_NAME || "➺ᴍᴜᴢᴀᴍᴍɪʟ-ᴍᴅ࿐",
    STATUS_REPLY: process.env.STATUS_REPLY || "`➺❣︎𝐘𝐨𝐮𝐫 𝐬𝐭𝐚𝐭𝐮𝐬 𝐡𝐚𝐬 𝐛𝐞𝐞𝐧 𝐬𝐞𝐞𝐧 𝐛𝐲❣︎
> 𝐌𝐮𝐳𝐚𝐦𝐦𝐢𝐥-𝐗𝐌𝐃♲︎︎︎`",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
