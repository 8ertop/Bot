const fs = require('fs-extra');
const axios = require('axios');

// تعريف معلومات الأمر
module.exports.config = {
  name: 'المطور',
  version: '1.0.0',
  hasPermssion: 0,
  credits: '',
  description: 'معلومات عن مطور البوت.',
  commandCategory: '〘 المجموعات 〙',
  usages: '〘 المطور 〙',
  usePrefix: false,
  cooldowns: 5,
  dependencies: {
    'fs-extra': '',
    axios: ''
  }
};

// دالة تنفيذ الأمر
module.exports.run = async ({ api, event }) => {
  const imageUrls = [
    'https://files.catbox.moe/xfponh.jpg',
    'https://files.catbox.moe/twpm8d.jpg'
  ];
  const cachePath = __dirname + '/cache/developer.jpg';

  // اختيار صورة عشوائية
  const selectedImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  // دالة لإرسال الرسالة مع الصورة
  const sendMessage = () => {
    api.sendMessage(
      {
        body: `〘━━━━━❪ المطور ❫━━━━〙\n\n⦿¦✗¦←الاسم: ᎯᏁᎯᏚ ᎯᏞᏚᎯᎡᏫᏌᎡᎥ\n\n⦿¦✗¦←العمر : 20\n\n⦿¦✗¦←البلد: اليمن 🇾🇪\n\n⌔┇↜{ المـــطــور } ← m.me/61572167800906\n\n⌔┇↜{ انستقرام } ← https://www.instagram.com/shblsd3829?igsh=MTY2YWdwY3I5MTZoZg==\n\n| ⚠️ |اذا حدث خطا تواصل معا المطور\n\nاكتب [.تقرير]\n\n〘━━━❪ عمك نادر ❫━━━〙`,
        attachment: fs.createReadStream(cachePath)
      },
      event.threadID,
      () => fs.unlinkSync(cachePath) // حذف الملف المؤقت بعد الإرسال
    );
  };

  // تنزيل الصورة وإرسال الرسالة
  axios.get(encodeURI(selectedImage), { responseType: 'stream' })
    .then(response => {
      response.data.pipe(fs.createWriteStream(cachePath))
        .on('close', sendMessage);
    })
    .catch(error => {
      api.sendMessage('حدث خطأ أثناء تنزيل الصورة، حاول مرة أخرى لاحقًا.', event.threadID);
    });
};