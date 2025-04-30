const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.5",
  hasPermssion: 0,
  credits: "Mod by John Lester, updated by Grok",
  description: "goibot",
  commandCategory: "𝕊𝔸𝕐",
  usages: "noprefix",
  cooldowns: 5,
};

module.exports.handleEvent = async function ({ api, event, args, Threads, Users }) {
  var { threadID, messageID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = [
    "🔥 نادر وصل! إيش النار اللي بدك إياها؟ 😎",
    "⚡ ناديتني؟ أنا هنا أحرق الموقف! 💥",
    "🫵 همم سمعتك تنادي عليا! جيت يلا نطير! 🚀🫂",
    "🌌 نادر جاهز يهز الكون لعيونك! 😏",
    "💪 يا سلام! نادر هنا يقلب الدنيا! ✨",
    "👀 وينك كنت؟ نادر كان يدور عليك! 🕵️",
    "😻 نادر يقول: إنت كيوت وأنا موجود! 🫶",
    "🚀 الجو بارد؟ نادر يدفيك بناره! 🔥",
    "🛡️ أمرك عيني! نادر جاهز للمهمة! 💡",
    "😎 نادر هنا، والمكان نور بوجودك! 🌟",
    "⚡ ناديتني وجيت زي الصاروخ! إيش عندك؟ 🫵",
    "🌙 نادر سهران يفكر فيك، وش الأخبار؟ 😍",
    "💥 يا قلبي! نادر موجود يخلّي الدنيا جنة! 🫶",
    "👻 مختفي؟ نادر هنا يرجّعك للوجود! 😜",
    "😏 نادر يراقبك! إيش الخطة اليوم؟ 🧠",
    "✨ هلا بالغالي! نادر جاهز يعيشك مغامرة! 🗺️",
    "🔥 الدنيا فاضية بدونك! نادر ينتظرك! 🕒",
    "😻 نادر يقول: خليك قريب، قلبي معاك! 💖",
    "⚡ وش هالحلا؟ نادر هنا يستاهلك! 😎",
    "🌌 نادر جاهز يسمع قصصك! يلا احكي! 📖"
  ];

  if (!global.usedResponses) {
    global.usedResponses = new Map();
  }

  let usedResponses = global.usedResponses.get(threadID) || [];

  if (usedResponses.length >= tl.length) {
    usedResponses = [];
  }

  let availableResponses = tl.filter(response => !usedResponses.includes(response));

  let rand = availableResponses[Math.floor(Math.random() * availableResponses.length)];

  usedResponses.push(rand);
  global.usedResponses.set(threadID, usedResponses);

  if (event.body.indexOf("نادر") == 0 || event.body.indexOf("نادر") == 0) {
    var msg = {
      body: `${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  }
}

module.exports.run = function ({ api, event, client, __GLOBAL }) { }