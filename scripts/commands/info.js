module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
┏━━━━━━━━━━━━━━━┓
┃   🌟 𝗢𝗪𝗡𝗘𝗥 𝗜𝗡𝗙𝗢 🌟    
┣━━━━━━━━━━━━━━━┫
┃👤 𝐍𝐚𝐦𝐞      :SK_Rabbi
┃🚹 𝐆𝐞𝐧𝐝𝐞𝐫    : 𝐌𝐚𝐥e
┃🎂 𝐀𝐠𝐞       :19
┃🕌 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : 𝐈𝐬𝐥𝐚𝐦
┃🏫 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 :ঢাকা
┃𝐀𝐝𝐝𝐫𝐞𝐬𝐬:কিশোরগঞ্জ,বাংলাদেশ 
┣━━━━━━━━━━━━━━━┫
┃𝐓𝐢𝐤𝐭𝐨𝐤 : @skrabbi6326
┃📢 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 :আছে🥴🤪
┃🌐 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : বায়ো-তে আছে
┣━━━━━━━━━━━━━━━┫
┃ 🕒 𝐔𝐩𝐝𝐚𝐭𝐞𝐝 𝐓𝐢𝐦𝐞:  ${time}
┗━━━━━━━━━━━━━━━┛
`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/61555237293629/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
