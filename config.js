//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "0538524757";
global.owner = process.env.OWNER_NUMBER || "0538524757";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0dHRE14YWlUQjNaQjdpMWc0ZlByNUlwWHN4L00xSEFXYVRRZ25vcm4yQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibXAwNzd2OHFMZjIyQ2JNRDBoR1pGRVY1ZExZQlpJd3kyakVNVzNLWjBtTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRzZWblVTSFNoNGVZMVZjR2pIcUJWTlUxOHVScUxNemxaN2xqbVFSL0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrYk41TExpd2ZQNENZSHE0a01BbmE4S2YxRklDdi9LMHpPYWxCK25JN1EwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1OVEpSM1dpVmNPZzd2S3ZUNUZzQ2U2ZnhHc0JvTERXQzJpem5lQTYwRUk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZoZmI3QVF0dEwwd3IrM0xFNWpFUlFhakxJREZGR1BlTllESmgxdDFiam89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBRWE9Zak43SnFxaWVkTlVWdmhNVG84Zlp5ZnRDSElSUWFVVW5xZHFXRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlxUE04eVF1S2ZLdzNTT1hzWURxY3VCWFNnZ2o4NUtIMDVHQTUza0lrWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNmM2dEaVRqb2hKUjdFbU44TVZ6ZEs2ZVlMZGdZdHhnMjJMc0JFdjFFUlBaZXpqc085aTVwVks0Sk5QNmU2UFI5eGQ0Wk5namdZYnY2bFIvejBua2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjQsImFkdlNlY3JldEtleSI6ImZqbVlMN0NRZk5XZ1BHN3p2WjM2TVlYb2VDTFdiYUIzTDlLSm45d1laaUU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ikc1djgzcWtIUzY2VjRYckxqTndHNHciLCJwaG9uZUlkIjoiYzBmMDRjMGQtZmUxZi00NGEyLWJlOWItYTQ0MDU3NDI2YmMyIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InMvQVk4cFJVY1VwWThRVWVKd24rWnJXcHgxQT0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU9SbzMwNWZGaVF2ZkFRR3NUUlM2VklUbm1JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTXFxcnVBR0VKU2MxTFFHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicGJWVkNRTlJMRGtZa0tONXRsbGNYQjh3aWJIeDF2K0xUUlJ5ZHRDQVlXND0iLCJhY2NvdW50U2lnbmF0dXJlIjoieFFocm92d0JndUNyM3pxZEdSUi9hK09WcXVGMFRXc1RKeWJzY3hmKzNTbzNaQ3dEN213Q1VnMjViLzg5U1F6L2Z6Z214ekhGcjlJcDA2dTFveUVMREE9PSIsImRldmljZVNpZ25hdHVyZSI6Inc5Yzc3aXJNenpaRjNndy9KYm9MM0ZMcnhkdFhpNVJYUk5VVmhockpMVHN5SU9kQVAvck8zOTRmWktNMThmNHUvcC9WeXFiWTVjSXJOd09YeVlDUGp3PT0ifSwibWUiOnsiaWQiOiIyMzM1Mzg1MjQ3NTc6NEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjYzMzEyNjY2NTgzMTgwOjRAbGlkIiwibmFtZSI6Ik90aXdhaCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzM1Mzg1MjQ3NTc6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhVzFWUWtEVVN3NUdKQ2plYlpaWEZ3Zk1JbXg4ZGIvaTAwVWNuYlFnR0Z1In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQVVJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjEwNDQ1MTQsImxhc3RQcm9wSGFzaCI6IjJXVWptWiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRG9XIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "$",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "GOKU BLACK",
  ownername: process.env.OWNER_NAME || "Emmanuel",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
