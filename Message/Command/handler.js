"use strict";
require("dotenv").config();
           
let _import;
    _import = require('../Connect/index.1.js');
           const { Ctx } = _import;
           const { MessageType, mentionedJid, MessageOptions } = Ft.baileys;
           const { scommand, addCmd, getCommandPosition, checkSCommand, getCmd } = _import.Ctx._SCMD
           const { userbot } = _import.Ctx._UserDB
                    var serialize = _import.Ctx.serializeM; 
                    var timestamp = global.Ft.speed();
                    var latensi = global.Ft.speed() - timestamp
           
 module.exports = {
    async chatUpdate(conn, chat) {
        if (!chat.hasNewMessage) return;
            var msg = chat.messages.all()[0];
                try {
                      if (!msg.message) return;
                      if (msg.key && msg.key.remoteJid == 'status@broadcast') return;
                          msg.message = (Object.keys(msg.message)[0] === 'ephemeralMessage') ? msg.message.ephemeralMessage.message: msg.message;
                           if ((Object.keys(msg.message)[0] === 'ephemeralMessage' && JSON.stringify(msg.message).includes('EPHEMERAL_SETTING')) && msg.message.ephemeralMessage.message.protocolMessage.type === 3) {
                          var bugc = true;
                              if (bugc === false) return;
                              if (msg.key.fromMe) return;
                                  conn.groupRemove(msg.key.remoteJid, [msg.participant]).catch((e) => console.log(e));
                                  conn.sendMessage(msg.key.remoteJid, "\n".repeat(420) + `@⁨${msg.participant.split('@')[0]}` + '*Maaf Anda Di Keluarkan*\n\n*Karena Telah Mengirim Virtex*', MessageType.text, {contextInfo:{mentionedJid:[msg.participant + "@s.whatsapp.net"]}});
                        };
                          var isPublic = true;
                              if (!isPublic) {
                              if (!msg.key.fromMe) return;
                        };
                          var m = serialize.smsg(conn, msg);
                              if (m.isBaileys === true) return;
                              if (msg.isBaileys) return;
                                  var type = Object.keys(msg.message)[0]; 
                                  var l = 1;
                                  var prefixRegEx = /^[!&z?=#.+\/]/gi   
                                  var cmd = 
                                        (type === 'conversation' && msg.message.conversation) 
                                        ? msg.message.conversation 
                                        : (type == 'imageMessage') && msg.message.imageMessage.caption 
                                        ? msg.message.imageMessage.caption 
                                        : (type == 'videoMessage') && msg.message.videoMessage.caption 
                                        ? msg.message.videoMessage.caption 
                                        : (type == 'extendedTextMessage') && msg.message.extendedTextMessage.text 
                                        ? msg.message.extendedTextMessage.text 
                                        : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId 
                                        ? msg.message[type].selectedButtonId 
                                        : (type == 'stickerMessage') && (getCmd(msg.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) !== undefined) 
                                        ? getCmd(msg.message.stickerMessage.fileSha256.toString('base64')) 
                                        : "".slice(1).trim().split(/ +/).shift().toLowerCase();
                          var multi = true;
                              if (multi){
                                  var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#';
                                       } else {
                                  var prefix = userbot.setting.prefix;
                                };
                                  var body = 
                                        (type === "conversation" && msg.message.conversation.startsWith(prefix))
                                        ? msg.message.conversation 
                                        : (type == "imageMessage") && msg.message[type].caption.startsWith(prefix) 
                                        ? msg.message[type].caption 
                                        : (type == 'videoMessage') && msg.message[type].caption.startsWith(prefix) 
                                        ? msg.message[type].caption 
                                        : (type == 'extendedTextMessage') && msg.message[type].text.startsWith(prefix) 
                                        ? msg.message[type].text 
                                        : (type == 'listResponseMessage') && msg.message[type].singleSelectReply.selectedRowId 
                                        ? msg.message[type].singleSelectReply.selectedRowId 
                                        : (type == 'buttonsResponseMessage') && msg.message[type].selectedButtonId 
                                        ? msg.message[type].selectedButtonId 
                                        : (type == 'stickerMessage') && (getCmd(msg.message[type].fileSha256.toString('base64')) !== null && getCmd(msg.message[type].fileSha256.toString('base64')) !== undefined) 
                                        ? getCmd(msg.message[type].fileSha256.toString('base64')) 
                                        : "";
                                  var budy =
                                        (type === "conversation")
                                        ? msg.message.conversation
                                        : (type === "extendedTextMessage")
                                        ? msg.message.extendedTextMessage.text
                                        : "";
                                  var args = body.trim().split(/ +/).slice(1);
                                  var command = body.toLowerCase().split(' ')[0] || '';
                                  var isCmd = command.startsWith(prefix);
                                  var createName = msg.key.fromMe ? conn.user.jid : conn.contacts[m.sender] || { notify: jid.replace(/@.+/, '') }
                                  var pushName = msg.key.fromMe ? conn.user.name : createName.notify || createName.vname || createName.name || '-'
                                      try {
				                           var pporang = await conn.getProfilePicture(`${m.sender.split('@')[0]}@s.whatsapp.net`)
				                                } catch {
					                       var pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				                         }
				                           var fakeimage = await Ft.getBuffer(pporang) 
                                               var groupMetadata = m.isGroup ? await conn.groupMetadata(m.chat) : '';
                                           var floc = {
                                       key : {
                                         	         participant : '0@s.whatsapp.net', 
                                         	         remoteJid: 'status@broadcast',
                                                 },
                                                     message: {
                                                     liveLocationMessage: {
                                                     caption: `${latensi.toFixed(4)} ms | ${pushName}`,
                                                     thumbnail: fakeimage,
                                                  },
                                               },
                                            };
                                              var { userbot } = _import.Ctx._UserDB;
                                              var footerText = userbot.setting.packname;
                                           var ftrol = {
                                       key: {
                                         	         participant : '0@s.whatsapp.net', 
                                         	         remoteJid: 'status@broadcast',
                                                 },
                                                     message: { 
                                                     orderMessage: { 
                                                     itemCount: 99,
                                                     status: 200,
                                                     thumbnail: fakeimage,
                                                     surface: 200,
                                                     message: `${latensi.toFixed(4)} ms | ${pushName}`,
                                                     orderTitle: footerText,
                                                     sellerJid: "0@s.whatsapp.net",
                                                  },
                                               },
                                            };
                                     var listButton = type == ('listResponseMessage') ? msg.message.listResponseMessage.singleSelectReply.selectedRowId : ''
                                              if (listButton == 'MenuLOCATION') {
                                                 try {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var teks = menu(prefix, l);
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUh5i0W7GoK27gGgKNgXcryDwNidNO1ixUTw&usqp=CAU')).buffer(), teks, footerText, 'Credits', 'Credits', 'Rules', 'Rules', 'Changelog', 'Changelog', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                       };
                                              if (listButton == 'MenuCATALOG') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var teks = menu(prefix, l);
                                                              var res = conn.prepareMessageFromContent(m.chat,{ "orderMessage": { "itemCount": 321, "message": teks, "thumbnail": fakeimage, "surface": 'CATALOG' }}, {quoted:ftrol, })
                                                           conn.relayWAMessage(res)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                       };
                                              if (listButton == 'MenuCATALOGv2') {
                                                  try {
                                                     var { menu } = _import.Ctx._write;
                                                     var { userbot } = _import.Ctx._UserDB;
                                                              var teks = menu(prefix, l);
                                                              var author = userbot.setting.author;
                                                              var footerText = userbot.setting.packname;
                                                              var imgs = await conn.prepareMessage('0@c.us', fakeimage, MessageType.image, { thumbnail: fakeimage })
                                                              var imgCatalog = imgs.message.imageMessage
                                                              var ctlg = await conn.prepareMessageFromContent(m.chat, { "productMessage": { "product": { "productImage": imgCatalog, "productId": "4715716298440452", "title": `𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧`, "description": teks, "footerText": author, "currencyCode": "IDR", "priceAmount1000": "100000000","productImageCount": 1, "firstImageId": 1, "salePriceAmount1000": "35000000","retailerId": footerText, "url": "https://github.com/Arifirazzaq2001" }, "businessOwnerJid": "6281261324817@s.whatsapp.net" }},{ quoted: ftrol, mimetype: 'image/jpeg' })
                                                           conn.relayWAMessage(ctlg)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                       };
                                              if (listButton == 'MenuPPTX') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.presentationml.presentation", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.1.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.2.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.3.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                              if (listButton == 'MenuXLSX') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.4.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.5.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.6.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                              if (listButton == 'MenuDOCX') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.7.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.8.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.9.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                              if (listButton == 'MenuZIP') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/zip", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.10.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.11.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.12.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                              if (listButton == 'MenuPDF') {
                                                 try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var author = userbot.setting.author;
                                                              var teks = menu(prefix, l);
                                                           conn.sendMessage(m.chat, { contentText: teks, buttons: [{buttonId: 'Credits', buttonText: {displayText: 'Credits️'}, type: 1},{buttonId: 'Rules', buttonText: {displayText: 'Rules'}, type: 1},{buttonId: 'Changelog' , buttonText: {displayText: 'Changelog'}, type: 1}], "headerType": "DOCUMENT", "documentMessage": { "url": "https://mmg.whatsapp.net/d/f/Ano5cGYOFQnC51uJaqGBWiCrSJH1aDCi8-YPQMMb1N1y.enc", "mimetype": "application/pdf", "title": footerText, "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=", "fileLength": 999999999999, "pageCount": 999, "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=", "fileName": author, "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=", "directPath": "/v/t62.7119-24/35160407_568282564396101_3119299043264875885_n.enc?ccb=11-4&oh=d43befa9a76b69d757877c3d430a0752&oe=61915CEC", "mediaKeyTimestamp": "1634472176", "jpegThumbnail": Ft.fs.readFileSync('./src/image/action/action.13.jpeg')}}, MessageType.buttonsMessage, { quoted: floc, thumbnail: Ft.fs.readFileSync('./src/image/action/action.14.jpeg'), contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply: { title: `${Ft.time}`, body: `${Ft.tanggal}\n⎇ ${Ft.waktu} ${Ft.week} ${Ft.weton}`, thumbnail: Ft.fs.readFileSync('./src/image/action/action.15.jpeg'), mediaType:"2", previewType: "VIDEO", mediaUrl: "https://youtu.be/nLEYHaaB6x0"}}})
                                                                                                            } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                          var selectbutton = type == ('buttonsResponseMessage') ? msg.message.buttonsResponseMessage.selectedButtonId : ''
                                              if (selectbutton == 'Rules') {
                                                 try {
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { rules } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var teks = rules(prefix, l)
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRWun54ErKLGHzBc7VtNoCvIMHwgaZkEWtQ&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Menu') {
                                                  try {
                                                    var { menu } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var listMsg = {
                                                                     title: "「 *𝗦𝗧𝗥𝗘𝗔𝗠 𝗕𝗢𝗧* 」", 
                                                                     buttonText: 'Daftar Menu',
                                                                     footerText: footerText,
                                                                     description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih menu disini`,
                                                                     sections: [
                                                                     {
                                                                        "title": `Originally Type 1`, 
                                                                        "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 𝗕𝗨𝗧𝗧𝗢𝗡",
                                                                         "rowId": "MenuLOCATION"
                                                                     }]
                                                                     },{
                                                                         "title": `Catalog Type 1`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚",
                                                                         "description": "\nKatalog adalah daftar koleksi sebuah pusat dokumentasi atau beberapa pusat dokumentasi yang disusun menurut sistem tertentu.", 
                                                                         "rowId": "MenuCATALOG"
                                                                     }]
                                                                     },{
                                                                         "title": `Catalog Type 2`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧",
                                                                         "description": "\nKatalog Produk adalah kumpulan produk dan informasi harga mereka. ... Buat daftar diskon untuk menawarkan produk dan layanan dengan harga yang berbeda, tergantung pada jumlah yang dibeli. Mengkonfigurasikan daftar diskon. Mendefinisikan pengukuran atau kuantitas produk Anda akan tersedia.", 
                                                                         "rowId": "MenuCATALOGv2"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 1`, 
                                                                         "rows" : [
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗣𝗣𝗧𝗫",
                                                                         "description": "\nMicrosoft PowerPoint atau Microsoft Office PowerPoint atau PowerPoint adalah sebuah program komputer untuk presentasi yang dikembangkan oleh Microsoft di dalam paket aplikasi kantoran mereka, Microsoft Office, selain Microsoft Word, Excel, Access dan beberapa program lainnya.", 
                                                                         "rowId": "MenuPPTX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 2`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗫𝗟𝗦𝗫",
                                                                         "description": "\nData atau file dengan ekstensi .XLSX adalah sebuah file Microsoft Excel Open XML Spreadsheet yang dibuat memakai aplikasi Microsoft Excel. Namun, karena formatnya open XML, file ini bisa dibuka oleh sejumlah aplikasi, seperti Open Office, Google Docs, hingga Apple Numbers.", 
                                                                         "rowId": "MenuXLSX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 3`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗗𝗢𝗖𝗫",
                                                                         "description": "\nDilansir dari Hubspot, Google Docs adalah layanan pengolah kata yang diberikan kepada pengguna Google secara gratis. Singkatnya, jika kamu sudah familiar dengan Microsoft Word, maka Google Docs adalah versi lain yang memungkinkan kamu untuk membuat, mengedit, dan membagikan dokumen tertulis secara online.", 
                                                                         "rowId": "MenuDOCX"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 4`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗭𝗜𝗣",
                                                                         "description": "\nZIP merupakan format file arsip yang digunakan secara luas untuk mengompresi atau memampatkan satu atau beberapa file bersama-sama menjadi ke dalam satu lokasi sehingga mengurangi ukurannya secara keseluruhan serta memudahkan pemindahan file tersebut. File ZIP bekerja serupa dengan folder standar pada komputer Anda.", 
                                                                         "rowId": "MenuZIP"
                                                                     }]
                                                                     },{
                                                                         "title": `Dokument Type 5`,
                                                                         "rows": [ 
                                                                     {
                                                                         "title": "𝗠𝗘𝗡𝗨 𝗣𝗗𝗙",
                                                                         "description": "\nPortable Document Format adalah sebuah format berkas yang dibuat oleh Adobe Systems pada tahun 1993 untuk keperluan pertukaran dokumen digital. Format PDF digunakan untuk merepresentasikan dokumen dua dimensi yang meliputi teks, huruf, citra dan grafik vektor dua dimensi.", 
                                                                         "rowId": "MenuPDF"
                                                                     }]
                                                                   }
                                                                 ],
                                                              listType: 1
                                                           }
                                                           conn.sendMessage(m.chat, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [m.sender]}, quoted:msg })
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Credits') {
                                                  try {
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { credits } = _import.Ctx._write;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var gaya = global.config.style.satu;
                                                              var teks = credits(gaya);
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/7Y56B5L/images.png')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Uptime') {
                                                   try {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                              var gaya = global.config.style.satu; 
                                                              var teks = '*Waktu Berjalan Perangkat*' + '\n\n' + gaya + ' ' + Ft.runtime(Ft.os.uptime())
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUV7VyhIVfkbokNT4-WrFCdvQD1Q4Z1_9JFjzc7EQS-Nm-qhcaepLxEU5&s=10')).buffer(), teks, footerText, 'Speed', 'Speed', 'Owner', 'Owner', 'Runtime', 'Runtime', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Speed') {
                                                  try {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                              var footerText = userbot.setting.packname;
                                                              var botName = '*' + userbot.setting.packname + '*';
                                                              var gaya = global.config.style.satu; 
                                                              var teks = '*Kecepatan*' + ' ' + botName + '\n\n' + gaya + ' ' + latensi.toFixed(4) + ' ' + 'ms'
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinCt49zd8UYSmN_AZ_pFlj_Zza_SNqhaHzA&usqp=CAU')).buffer(), teks, footerText, 'Owner', 'Owner', 'Runtime', 'Runtime', 'Uptime', 'Uptime', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Owner') {
                                                  try {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                              var nomor = userbot.owner;
                                                              var footerText = userbot.setting.packname;
                                                              var teks = 'Ini nomer pembuat bot gak usah chat aneh aneh';
                                                              var conarray = []
                                                              var ownerContact = nomor;
                                                                  for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
                                                                        var vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
                                                                             conarray.push({
                                                                                              "displayName": 'Arifi Razzaq',
                                                                                              "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                                                                                            }
                                                                                      )}
                                                                                 conn.sendMessage(m.chat, {
                                                                            "displayName": `${conarray.length} kontak`,
                                                                            "contacts": conarray 
                                                                         }, 
                                                                      "contactsArrayMessage", { 
                                                                  quoted: msg 
                                                               })
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNskS1ql7AjGQ3CRIn9kVYmv9k6e3K2d8QPg&usqp=CAU')).buffer(), teks, footerText, 'Runtime', 'Runtime', 'Uptime', 'Uptime', 'Speed', 'Speed', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Runtime') {
                                                  try {
                                                    var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                              var gaya = global.config.style.satu; 
                                                              var run = process.uptime()
                                                              var teks = '*Waktu Berjalan Bot*' + '\n\n' + gaya + ' ' + Ft.runtime(run)
                                                           conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4tD5Fgzj_qyvey5Yu8Y5rrUwQ_7fe91sLg&usqp=CAU')).buffer(), teks, footerText, 'Uptime', 'Uptime', 'Speed', 'Speed', 'Owner', 'Owner', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Status') {
                                                  try {
                                                    var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone;
                                                    var { sendButtonLoc } = _import.Ctx.serializeM;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                    var { status } = _import.Ctx._write;
                                                    var { count } = _import.Ctx._moment
                                                              var footerText = userbot.setting.packname;
                                                              var gaya = global.config.style.satu;
                                                              var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'));
                                                              var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
                                                              var totalChat = await conn.chats.all();
                                                              var ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                                                              var teks = "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧* 」\n\n"
                                                                     teks += `${gaya} Group Chats : ${groups.length}\n`
                                                                     teks += `${gaya} Private Chats : ${privat.length}\n`
                                                                     teks += `${gaya} Total Chats : ${totalChat.length}\n`
                                                                     teks += `${gaya} Speed : ${latensi.toFixed(4)} ms\n`
                                                                     teks += `${gaya} Public : ${isPublic ? 'true' : 'false'}\n`
                                                                     teks += `${gaya} Multi Prefix : ${multi ? 'true' : 'false'}\n\n\n`
                                                                     teks += "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘* 」\n\n"
                                                                     teks += `${gaya} Total Ram : ${ramTwo}\n`
                                                                     teks += `${gaya} Platform : ${Ft.os.platform()}\n`
                                                                     teks += `${gaya} Hostname : ${Ft.os.hostname()}\n`
                                                                     teks += `${gaya} Merk Device : ${device_manufacturer}\n`
                                                                     teks += `${gaya} Version WhatsApp : ${wa_version}\n`
                                                                     teks += `${gaya} Version OS : ${os_version}\n`
                                                                     teks += `${gaya} Version Device : ${device_model}\n`
                                                                     teks += `${gaya} MCC : ${mcc}\n`
                                                                     teks += `${gaya} MNC : ${mnc}\n`   
                                                           conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHTRQ9hMI16BPYoMh9AoP1anRUp-IHnXxGg&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'TRUTH') {
                                                  try {
                                                    var { send2ButImg } = _import.Ctx.serializeM;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                           var footerText = userbot.setting.packname;
                                                                 var trut = ['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buorangu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
                                                                 var ttrth = trut[Math.floor(Math.random() * trut.length)]
                                                                 var teks = '*TRUTH*\n\n' + ttrth;
                                                        conn.send2ButImg(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZti2vv4DRos0VAmiryJvrHuIUnVJh6m25w&usqp=CAU')).buffer(), teks, footerText, 'NEXT', 'TRUTH', 'DARE', 'DARE', m)           
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'DARE') {
                                                  try {
                                                    var { send2ButImg } = _import.Ctx.serializeM;
                                                    var { userbot } = _import.Ctx._UserDB;
                                                           var footerText = userbot.setting.packname;
                                                                 var dare = ["Kirim pesan ke mantan kamu dan bilang", "aku masih suka sama kamu","telfon crush/pacar sekarang dan ss ke pemain","pap ke salah satu anggota grup","Bilang 'KAMU CANTIK BANGET NGGAK BOHONG' ke cowo","ss recent call whatsapp","drop emot '🦄💨' setiap ngetik di gc/pc selama 1 hari","kirim voice note bilang can i call u baby?","drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu","pake foto sule sampe 3 hari","ketik pake bahasa daerah 24 jam","ganti nama menjadi 'gue anak lucinta luna' selama 5 jam","chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia 'i lucky to hv you","prank chat mantan dan bilang ' i love u, pgn balikan","record voice baca surah al-kautsar","bilang 'i hv crush on you, mau jadi pacarku gak?' ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini","sebutkan tipe pacar mu!","snap/post foto pacar/crush","teriak gajelas lalu kirim pake vn kesini","pap mukamu lalu kirim ke salah satu temanmu","kirim fotomu dengan caption, aku anak pungut","teriak pake kata kasar sambil vn trus kirim kesini","teriak ' anjimm gabutt anjimmm ' di depan rumah mu","ganti nama jadi ' BOWO ' selama 24 jam","Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll"]
                                               		             var der = dare[Math.floor(Math.random() * dare.length)]
                                                                 var teks = '*DARE*\n\n' + der;
                                                        conn.send2ButImg(m.chat, await ( await Ft.fetch('https://www.dexigner.com/images/directory/xxi/13786.jpg')).buffer(), teks, footerText, 'NEXT', 'DARE', 'TRUTH', 'TRUTH', m)           
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                               if (selectbutton == 'Changelog') {
                                               try {
                                                   var { sendButtonLoc } = _import.Ctx.serializeM;
                                                   var { userbot } = _import.Ctx._UserDB;
                                                         var pkgg = require('../../package.json');
                                                         var footerText = userbot.setting.packname;
                                                         var changelog = global.config.changelog;
                                                         var d = new Date
                                                         var date = d.toLocaleDateString('id', {
                                                             day: 'numeric',
                                                             month: 'long',
                                                             year: 'numeric'
                                                          })
                                                       let name = conn.getName(conn.user.jid) 
                                                       let caption = `Changelog\n`
                                                           caption += `tanggal: ${date}\n`
                                                           caption += `versi saat ini *${pkgg.version}*\n\n`
                                                           caption += `${changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || changelog }\n`
                                                        conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/HK3t3Xf/20211205-151134.jpg')).buffer(), caption, footerText, 'Status', 'Status', m)
                                                     } catch (e) {
                                                        e = String(e);
                                                        m.reply(`${e}`)
                                                        console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                       }
                                                    };
                                                       if (isCmd && m.isGroup) { 
                                                       console.log(Ft.chalk.bold.rgb(255, 178, 102)
                                                       ('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)
                                                       (command), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("from"), Ft.chalk.bold.rgb(153, 255, 204)
                                                       (pushName), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("in"), Ft.chalk.bold.rgb(255, 178, 102)
                                                       (groupMetadata.subject));
                                                       };
                                                       if (isCmd && !m.isGroup) { 
                                                       console.log(Ft.chalk.bold.rgb(255, 178, 102)
                                                       ('\x1b[1;31m~\x1b[1;37m> [\x1b[1;32mCMD\x1b[1;37m]'), Ft.chalk.bold.rgb(153, 255, 153)
                                                       (command), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("from"), Ft.chalk.bold.rgb(153, 255, 204)
                                                       (pushName), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("in"), Ft.chalk.bold.rgb(255, 178, 102)
                                                       ("Private Chat"));
                                                       };
                                                       if (m.isGroup && selectbutton) {
                                                       console.log(Ft.chalk.bold.rgb(255, 215, 0)
                                                       ('~' + Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('>')), Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('[' + Ft.chalk.bold.rgb(252, 201, 185)
                                                       ('SBT') + Ft.chalk.bold.rgb(255, 255, 255)
                                                       (']')), Ft.chalk.white('IdButton:'), Ft.chalk.bold.rgb(181, 0, 148)
                                                       (selectbutton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(153, 102, 204)
                                                       (pushName));
                                                       };
                                                       if (!m.isGroup && selectbutton) {
                                                       console.log(Ft.chalk.bold.rgb(255, 215, 0)
                                                       ('~' + Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('>')), Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('[' + Ft.chalk.bold.rgb(252, 201, 185)
                                                       ('SBT') + Ft.chalk.bold.rgb(255, 255, 255)
                                                       (']')), Ft.chalk.white('IdButton:'), Ft.chalk.bold.rgb(181, 0, 148)
                                                       (selectbutton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(153, 102, 204)
                                                       (pushName), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("in"), Ft.chalk.bold.rgb(255, 178, 102)
                                                       ("Private Chat"));
                                                       };
                                                       if (m.isGroup && listButton) { 
                                                       console.log(Ft.chalk.bold.rgb(255, 255, 167)
                                                       ('~' + Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('>')), Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('[' + Ft.chalk.bold.rgb(252, 201, 185)
                                                       ('LMS') + Ft.chalk.bold.rgb(255, 255, 255)
                                                       (']')), Ft.chalk.white('IdList:'), Ft.chalk.bold.rgb(224, 173, 66)
                                                       (listButton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(0, 170, 255)
                                                       (pushName));
                                                       };
                                                       if (!m.isGroup && listButton) { 
                                                       console.log(Ft.chalk.bold.rgb(255, 255, 167)
                                                       ('~' + Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('>')), Ft.chalk.bold.rgb(255, 255, 255)
                                                       ('[' + Ft.chalk.bold.rgb(252, 201, 185)
                                                       ('LMS') + Ft.chalk.bold.rgb(255, 255, 255)
                                                       (']')), Ft.chalk.white('IdList:'), Ft.chalk.bold.rgb(224, 173, 66)
                                                       (listButton), Ft.chalk.white('From:'), Ft.chalk.bold.rgb(0, 170, 255)
                                                       (pushName), Ft.chalk.bold.rgb(204, 204, 0)
                                                       ("in"), Ft.chalk.bold.rgb(255, 178, 102)
                                                       ("Private Chat"));
                                                       };
                                                       switch (command) {
                                                                      case prefix + 'menu': {
                                                                      try {
                                                                            var { menu } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                   var footerText = userbot.setting.packname;
                                                                                   var listMsg = {
                                                                                          title: "「 *𝗦𝗧𝗥𝗘𝗔𝗠 𝗕𝗢𝗧* 」", 
                                                                                          buttonText: 'Daftar Menu',
                                                                                          footerText: footerText,
                                                                                          description: `\nHai kak @${m.sender.split('@')[0]}, Silahkan pilih menu disini`,
                                                                                          sections: [
                                                                                       {
                                                                                          "title": `Originally Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡 𝗕𝗨𝗧𝗧𝗢𝗡",
                                                                                          "rowId": "MenuLOCATION"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Catalog Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚",
                                                                                          "description": "\nKatalog adalah daftar koleksi sebuah pusat dokumentasi atau beberapa pusat dokumentasi yang disusun menurut sistem tertentu.", 
                                                                                          "rowId": "MenuCATALOG"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Catalog Type 2`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗖𝗔𝗧𝗔𝗟𝗢𝗚 𝗣𝗥𝗢𝗗𝗨𝗖𝗧",
                                                                                          "description": "\nKatalog Produk adalah kumpulan produk dan informasi harga mereka. ... Buat daftar diskon untuk menawarkan produk dan layanan dengan harga yang berbeda, tergantung pada jumlah yang dibeli. Mengkonfigurasikan daftar diskon. Mendefinisikan pengukuran atau kuantitas produk Anda akan tersedia.", 
                                                                                          "rowId": "MenuCATALOGv2"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 1`, 
                                                                                          "rows" : [
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗣𝗣𝗧𝗫",
                                                                                          "description": "\nMicrosoft PowerPoint atau Microsoft Office PowerPoint atau PowerPoint adalah sebuah program komputer untuk presentasi yang dikembangkan oleh Microsoft di dalam paket aplikasi kantoran mereka, Microsoft Office, selain Microsoft Word, Excel, Access dan beberapa program lainnya.", 
                                                                                          "rowId": "MenuPPTX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 2`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗫𝗟𝗦𝗫",
                                                                                          "description": "\nData atau file dengan ekstensi .XLSX adalah sebuah file Microsoft Excel Open XML Spreadsheet yang dibuat memakai aplikasi Microsoft Excel. Namun, karena formatnya open XML, file ini bisa dibuka oleh sejumlah aplikasi, seperti Open Office, Google Docs, hingga Apple Numbers.", 
                                                                                          "rowId": "MenuXLSX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 3`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗗𝗢𝗖𝗫",
                                                                                          "description": "\nDilansir dari Hubspot, Google Docs adalah layanan pengolah kata yang diberikan kepada pengguna Google secara gratis. Singkatnya, jika kamu sudah familiar dengan Microsoft Word, maka Google Docs adalah versi lain yang memungkinkan kamu untuk membuat, mengedit, dan membagikan dokumen tertulis secara online.", 
                                                                                          "rowId": "MenuDOCX"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 4`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗭𝗜𝗣",
                                                                                          "description": "\nZIP merupakan format file arsip yang digunakan secara luas untuk mengompresi atau memampatkan satu atau beberapa file bersama-sama menjadi ke dalam satu lokasi sehingga mengurangi ukurannya secara keseluruhan serta memudahkan pemindahan file tersebut. File ZIP bekerja serupa dengan folder standar pada komputer Anda.", 
                                                                                          "rowId": "MenuZIP"
                                                                                       }]
                                                                                       },{
                                                                                          "title": `Dokument Type 5`,
                                                                                          "rows": [ 
                                                                                       {
                                                                                          "title": "𝗠𝗘𝗡𝗨 𝗣𝗗𝗙",
                                                                                          "description": "\nPortable Document Format adalah sebuah format berkas yang dibuat oleh Adobe Systems pada tahun 1993 untuk keperluan pertukaran dokumen digital. Format PDF digunakan untuk merepresentasikan dokumen dua dimensi yang meliputi teks, huruf, citra dan grafik vektor dua dimensi.", 
                                                                                          "rowId": "MenuPDF"
                                                                                       }]
                                                                                     }
                                                                                   ],
                                                                                      listType: 1
                                                                                    }
                                                                                       conn.sendMessage(m.chat, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [m.sender]}, quoted:msg })
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                           break;
                                                                      case prefix + 'uptime': {
                                                                      try {
                                                                            var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                   var footerText = userbot.setting.packname;
                                                                                   var gaya = global.config.style.satu; 
                                                                                   var teks = '*Waktu Berjalan Perangkat*' + '\n\n' + gaya + ' ' + Ft.runtime(Ft.os.uptime())
                                                                                      conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXUV7VyhIVfkbokNT4-WrFCdvQD1Q4Z1_9JFjzc7EQS-Nm-qhcaepLxEU5&s=10')).buffer(), teks, footerText, 'Speed', 'Speed', 'Owner', 'Owner', 'Runtime', 'Runtime', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'speed': {
                                                                      try {
                                                                            var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                   var footerText = userbot.setting.packname;
                                                                                   var botName = '*' + userbot.setting.packname + '*';
                                                                                   var gaya = global.config.style.satu; 
                                                                                   var teks = '*Kecepatan*' + ' ' + botName + '\n\n' + gaya + ' ' + latensi.toFixed(4) + ' ' + 'ms'
                                                                                        conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinCt49zd8UYSmN_AZ_pFlj_Zza_SNqhaHzA&usqp=CAU')).buffer(), teks, footerText, 'Owner', 'Owner', 'Runtime', 'Runtime', 'Uptime', 'Uptime', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'delete': {
                                                                      try {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var onlyG = userbot.mess.KhususGrup
                                                                            if (!m.isGroup) return m.reply(onlyG)
                                                                                       conn.deleteMessage(m.chat, { id: msg.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: m.chat, fromMe: true })
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                      break;
                                                                      case prefix + 'owner': {
                                                                      try {
                                                                            var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                                                  var nomor = userbot.owner;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var teks = 'Ini nomer pembuat bot gak usah chat aneh aneh';
                                                                                  var conarray = []
                                                                                  var ownerContact = nomor;
                                                                                       for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
                                                                                             var vname = conn.contacts[i] != undefined ? conn.contacts[i].vname || conn.contacts[i].notify : undefined
                                                                             conarray.push({
                                                                               "displayName": 'Arifi Razzaq',
                                                                               "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname ? `${vname}` : `${conn.user.name}`}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                                                                              })
                                                                            }
                                                                         conn.sendMessage(m.chat, {
                                                                           "displayName": `${conarray.length} kontak`,
                                                                           "contacts": conarray 
                                                                            }, 'contactsArrayMessage', { quoted: msg })
                                                                               conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNskS1ql7AjGQ3CRIn9kVYmv9k6e3K2d8QPg&usqp=CAU')).buffer(), teks, footerText, 'Runtime', 'Runtime', 'Speed', 'Speed', 'Uptime', 'Uptime', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'rules': {
                                                                      try {
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { rules } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var teks = rules(prefix, l);
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHRWun54ErKLGHzBc7VtNoCvIMHwgaZkEWtQ&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'credits': {
                                                                      try {
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { credits } = _import.Ctx._write;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var gaya = global.config.style.satu;
                                                                                  var teks = credits(gaya);
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/7Y56B5L/images.png')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'truthdare': {
                                                                      try {
                                                                            var { send2ButImg } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var teks = '*SILAHKAN PILIH SALAH SATU*';
                                                                                  var trteh = await Ft.getBuffer('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPgNAZVPinSTu3TJ6cpCj5MqrPAl_NAUNcag&usqp=CAU')
                                                                                      conn.send2ButImg(m.chat, trteh, teks, footerText, 'TRUTH', 'TRUTH', 'DARE', 'DARE', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'changelog': {
                                                                      try {
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                   var pkgg = require('../../package.json');
                                                                                   var footerText = userbot.setting.packname;
                                                                                   var changelog = global.config.changelog;
                                                                                   let d = new Date
                                                                                   let date = d.toLocaleDateString('id', {
                                                                                        day: 'numeric',
                                                                                        month: 'long',
                                                                                        year: 'numeric'
                                                                                     })
                                                                                  let name = conn.getName(conn.user.jid) 
                                                                                  let caption = `Changelog\n`
                                                                                      caption += `tanggal: ${date}\n`
                                                                                      caption += `versi saat ini *${pkgg.version}*\n\n`
                                                                                      caption += `${changelog == '' ? 'Tidak ada changelog yang di tambahkan' : '' || changelog }\n`
                                                                                  conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://i.ibb.co/HK3t3Xf/20211205-151134.jpg')).buffer(), caption, footerText, 'Status', 'Status', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'status': {
                                                                      try {
                                                                            var { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = conn.user.phone;
                                                                            var { sendButtonLoc } = _import.Ctx.serializeM;
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                            var { status } = _import.Ctx._write;
                                                                            var { count } = _import.Ctx._moment
                                                                                  var footerText = userbot.setting.packname;
                                                                                  var gaya = global.config.style.satu;
                                                                                  var groups = conn.chats.array.filter(v => v.jid.endsWith('g.us'));
                                                                                  var privat = conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'));
                                                                                  var totalChat = await conn.chats.all();
                                                                                  var ramTwo = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
                                                                                  var teks = "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧* 」\n\n"
                                                                                         teks += `${gaya} Group Chats : ${groups.length}\n`
                                                                                         teks += `${gaya} Private Chats : ${privat.length}\n`
                                                                                         teks += `${gaya} Total Chats : ${totalChat.length}\n`
                                                                                         teks += `${gaya} Speed : ${latensi.toFixed(4)} ms\n`
                                                                                         teks += `${gaya} Public : ${isPublic ? 'true' : 'false'}\n`
                                                                                         teks += `${gaya} Multi Prefix : ${multi ? 'true' : 'false'}\n\n\n`
                                                                                         teks += "「 *𝗦𝗧𝗔𝗧𝗨𝗦 𝗗𝗘𝗩𝗜𝗖𝗘* 」\n\n"
                                                                                         teks += `${gaya} Total Ram : ${ramTwo}\n`
                                                                                         teks += `${gaya} Platform : ${Ft.os.platform()}\n`
                                                                                         teks += `${gaya} Hostname : ${Ft.os.hostname()}\n`
                                                                                         teks += `${gaya} Merk Device : ${device_manufacturer}\n`
                                                                                         teks += `${gaya} Version WhatsApp : ${wa_version}\n`
                                                                                         teks += `${gaya} Version OS : ${os_version}\n`
                                                                                         teks += `${gaya} Version Device : ${device_model}\n`
                                                                                         teks += `${gaya} MCC : ${mcc}\n`
                                                                                         teks += `${gaya} MNC : ${mnc}\n`              
                                                                                       conn.sendButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTHTRQ9hMI16BPYoMh9AoP1anRUp-IHnXxGg&usqp=CAU')).buffer(), teks, footerText, 'Menu', 'Menu', m) 
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix + 'sider': {
                                                                      try {
                                                                             if (!m.quoted) return m.reply(`Balas pesan bot!`);
                                                                                   let members = 
                                                                              m.quoted.chat.endsWith("g.us") 
                                                                          ? (await conn.groupMetadata(m.quoted.chat))
                                                                      .participants.length - 1 
                                                                 : m.quoted.chat.endsWith("@broadcast") 
                                                          ? -1 
                                                    : 1;
                                        let { reads, 
                               deliveries 
                       } = await conn.messageInfo(
                m.quoted.chat, 
      m.quoted.id);
let txt = `*Dibaca oleh:*
${reads
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${Ft.formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length} tersisa` : ""}

*Terkirim ke:*
${deliveries
  .sort((a, b) => b.t - a.t)
  .map(({ jid, t }) => `@${jid.split`@`[0]}\n_${Ft.formatDate(t * 1000)}_`)
  .join("\n")}
${members > 1 ? `${members - reads.length - deliveries.length} tersisa` : ""}
`.trim();
        m.reply(txt, null, {
                           contextInfo: {
                                          mentionedJid: conn.parseMention(txt),
                                                                         },
                                                                               });
                                                                                     } catch (e) {
                                                                                           m.reply(`${e}`)
                                                                                         }
                                                                                      }  
                                                                            break;
                                                                      case prefix + 'listonline': {
                                                                      try {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                  var onlyG = userbot.mess.KhususGrup
                                                                                        if (!m.isGroup) return m.reply(onlyG)
                                                                                         let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                                                                                         let online = [...Object.keys(conn.chats.get(ido).presences), conn.user.jid]
                                                                                     conn.sendMessage(m.chat, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, MessageType.text, {
                                                                                               quoted: msg,
                                                                                               contextInfo: {
                                                                                               mentionedJid: online
                                                                                               }
                                                                                            })
                                                                                         } catch (e) {
                                                                                           m.reply(`${e}`)
                                                                                         }
                                                                                    };
                                                                            break;
                                                                      case prefix + 'q': {
                                                                      try {
                                                                             if (!m.quoted) return m.reply("reply message!");
                                                                                   let qse = conn.serializeM(await m.getQuotedObj());
                                                                                        if (!qse.quoted)
                                                                                              return m.reply("the message you replied does not contain a reply!");
                                                                                         await qse.quoted.copyNForward(m.chat, true);
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                      case prefix +  'kick': {
                                                                      try {
                                                                            var { userbot } = _import.Ctx._UserDB;
                                                                                     var onlyG = userbot.mess.KhususGrup;
                                                                                     var onlyO = userbot.mess.KhususOwner;
                                                                                     var ses = userbot.mess.success;
                                                                                      if (!m.isGroup) return m.reply(onlyG);
                                                                                      if (!msg.key.fromMe) return m.reply(onlyO);
                                                                                           if (
                                                                                                  msg.message.extendedTextMessage === undefined ||
                                                                                                  msg.message.extendedTextMessage === null
                                                                                               )
                                                                                          return m.reply("Tag target yang ingin di kick!");
                                                                                     var mentioned = msg.message.extendedTextMessage.contextInfo.mentionedJid;
                                                                                     if (mentioned.length > 1) {
                                                                                           conn.groupRemove(from, mentioned);
                                                                                        m.reply(ses);
                                                                                 } else if (mentioned.length < 1) {
                                                                                     var anu = msg.message.extendedTextMessage.contextInfo.participant;
                                                                                           conn.groupRemove(m.chat, [anu]);
                                                                                                m.reply(ses);
                                                                                 } else {
                                                                                                conn.groupRemove(m.chat, mentioned);
                                                                                            m.reply(ses);
                                                                                        }
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;  
                                                                      case prefix + 'runtime': {
                                                                      try {
                                                                      var { send3ButtonLoc } = _import.Ctx.serializeM;
                                                                            var footerText = userbot.setting.packname;
                                                                            var gaya = global.config.style.satu; 
                                                                            var run = process.uptime()
                                                                            var teks = '*Waktu Berjalan Bot*' + '\n\n' + gaya + ' ' + Ft.runtime(run)
                                                                            			conn.send3ButtonLoc(m.chat, await ( await Ft.fetch('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-4tD5Fgzj_qyvey5Yu8Y5rrUwQ_7fe91sLg&usqp=CAU')).buffer(), teks, footerText, 'Uptime', 'Uptime', 'Speed', 'Speed', 'Owner', 'Owner', m)
                                                                                    } catch (e) {
                                                                                      e = String(e);
                                                                                      m.reply(e)
                                                                                      console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                                    }
                                                                                 };
                                                                            break;
                                                                          }
                                                                        } catch (e) {
                                                                          e = String(e);
                                                                     if (!e.includes("c.isZero") && !e.includes("this.isZero")) {
                                                                         return;
                                                                       }
                                                                    console.log(Ft.chalk.bold.rgb(255, 182, 193)('~' + Ft.chalk.bold.rgb(255, 255, 255)('>')), Ft.chalk.bold.rgb(255, 255, 255)('[' + Ft.chalk.bold.rgb(119, 221, 119)('ERR') + Ft.chalk.bold.rgb(255, 255, 255)(']')), Ft.chalk.bold.rgb(0, 138, 175)(e))
                                                                 };
                                                             }, 
                                                         };
