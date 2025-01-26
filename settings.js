/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFUeHRNVWVrN24zak1WdHdtd09PVUZ3ZzRhdUd5VndnTXQ4QWlpQkNtZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzk4TjgzeDFja0F3b1VjWlBmR3NaR0pNT2dUOFU5RzF6N2V3ZXYvanJHTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSlBmTHI0WEVGNUFDWmM0M1dKTWFscWg3K3dady9WVUVOVnl4TnFiSVZNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdWp3K3NOazFLWG14ZkJWN3gvWXFTKzVEaUxiMk9LOEUvSEtmUzdhVEYwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9GTEgxY1YvV29aemJ1ejd0N2pRK0F4dmFVV1o1M1M5Ujd3YmRnMkRoVlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFJVUN2OTViWHVWSkFVS0tjcG8xd1lUZUVQN093TEFOVmJ2K0hzMFp4bXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia000QWdtc2tWMUhSaHRTU1ljbE9uWSs4V200SmxDYmRsVGlSdXYvbVFYaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUVyaHIrS2s3R3RMcmdoZ0RmWkVQRVAvMnFrbW5OTE5NOXVJcFpRL1BSaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBsbWhhYWdSQXpIVzNIZThFcHEzK2JIT0VKd1gvUmcreStsSDhWTFBka1FWaUtLV2tCeS9KY21LWjhGN2l4UUh2ZnRQZHBxZUdXVTZFQkxHQjJqNWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEyLCJhZHZTZWNyZXRLZXkiOiJvQUo1SUpmeFJxQ2U2WjBIYWx2ZmF2aDFrYXkwYU5vRnVZanc5R3pEQ0pZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFWjQ0aGhBYlJEbXRUYzRmQXIzZXdRIiwicGhvbmVJZCI6ImY5NWRhMzhlLTA2OTAtNDQwNC04MWZkLTVmMzU1YzhhNDNlOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0aGhmZkdnNUxUM3kwTzI1VzliWU43MHlmRXc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibDluVEExR29SRlQ4NHZjUHpIaFBGMDZmVDhNPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxBRERSSzg2IiwibWUiOnsiaWQiOiI5MjMxNjMxNDM2NTI6MzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4o6vzL3qr63Ll/CdkYXwnZup8J2brfCdm6/wnZup44CGzY5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4q8JOGqT4zIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMUHNpZjBIRUlydjJMd0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOVnM0Y0JKN3ZzZXBncE9GK1hlKzB3K1V2em9ja3BOUVNZY2NSejRiZmhVPSIsImFjY291bnRTaWduYXR1cmUiOiI3Tmk3SDFZbVIzcUZZWi9Id3U3N2NBeEpmMUk4TkovRlBlSkdKWjZFOXZGbVdkVEkrbHJmZTNMbmxtdWxzK3M2WVkrUDBRVGg5cUNkeEtEUVNicENCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiYklBTjc1aFF4dnBsVk9ZSjVSd1NZWHYyaThFQnpxMkxEUXdWeUkwRkJiYUNFYU80bDJlZmhTVDM5Y3hwUXVoVEl5dm5Dc29NZWJSTXNONWQ2OU1BakE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxNjMxNDM2NTI6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVFZiT0hBU2U3N0hxWUtUaGZsM3Z0TVBsTDg2SEpLVFVFbUhIRWMrRzM0ViJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNzg5Nzg4MCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMM1YifQ==';

const prefix = process.env.PREFIX || '';
const mycode = process.env.CODE || "254";
const author = process.env.STICKER_AUTHOR || 'Keith';
const packname = process.env.PACKNAME || 'keith';
const dev = process.env.DEV || '254796299159';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'KEITH-MD';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const api = process.env.API || 'true';
const appname = process.env.APPNAME || 'true';
const antispam = process.env.ANTISPAM || 'true';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const autoreact = process.env.AUTOREACT || 'true';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'true';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const permit = process.env.PM_PERMIT || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  api,
  appname,
  permit,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete
};
