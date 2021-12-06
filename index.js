"use strict";
require("dotenv").config();
  let { Functions } = require('./Message/Connect/index.4')
       global.Ft = new Functions();
       const { userbot } = require('./Message/Connect/index.2')
       const { JsonDB } = require("node-json-db");
       const { Config } = require('node-json-db/dist/lib/JsonDBConfig');
       const { WAConnection: _WAConnection, ReconnectMode } = Ft.baileys;

global.db = new JsonDB(new Config("./src/json/user/database", true, false, '/'));
global.WAConnection = require('./Message/library/Assets/serialize').WAConnection(_WAConnection);
global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name] : name] } : {}) })) : '');
global['config'] = JSON.parse(Ft.fs.readFileSync('./src/json/asset/ProxyAgent.json'));
const starts = async (conn = new WAConnection()) => {
    conn.version = [ 5, 9741, 8 ];
    conn.logger.level = 'warn';
    conn.autoReconnect = ReconnectMode.onConnectionLost;
    conn.browserDescription = [ userbot.setting.author, global.config.desc.ie, global.config.type.ODxv ];
    conn.on('qr', qr => {
        Ft.qrcode.generate(qr, { small: true })
        console.log(Ft.chalk.bold.rgb(236, 100, 75)('Silahkan Scan Qr Diatas! Expired Dalam 30 detik'));
    });
    
        Ft.fs.existsSync('./src/json/session/qrcode-terminal.json') && conn.loadAuthInfo('./src/json/session/qrcode-terminal.json')
     
     conn.on('credentials-updated', () => {
        console.log(Ft.chalk.bold.rgb(184, 115, 51)('Memperbarui Paket'));
    })
    
     conn.on('connecting', () => {
        console.log(Ft.chalk.bold.rgb(69, 155, 167)('Mengaktifkan Bot, Harap Tunggu Sebentar'));
    })
    
    conn.on('open', () => {
        console.log(Ft.chalk.bold.rgb(189, 236, 182)('Berhasil Tersambung'));
    })
    
    conn.on("ws-close", async() => {
        console.log(Ft.chalk.bold.rgb(191, 137, 112)('Koneksi Keluar, Jaringan Tidak Di Gunakan'));
    })
        
   conn.on("close", async() => {
        console.log(Ft.chalk.bold.rgb(255, 189, 27)('Menutup Koneksi, Menyambung Ulang'));
        
    })
        await conn.connect()
        Ft.fs.writeFileSync('./src/json/session/qrcode-terminal.json', JSON.stringify(conn.base64EncodedAuthInfo(), null, '\t'))
    
    conn.on ('CB:action,,battery', json => {
            var batteryLevelStr = json[2][0][1].value;
            var batterylevel = parseInt (batteryLevelStr);
            var isBattre = batterylevel + "%";
            var isCharge = json[2][0][1].live;
            console.log(Ft.chalk.keyword('orange')('     Battery : ' + isBattre + ''), Ft.chalk.keyword('salmon')(', Charge :' + isCharge + ''));
        });
    
   conn.on('chat-update', async (chat) => {
        var handler = require('./Message/Command/handler')
        handler.chatUpdate(conn, chat)
        });
     }
     
    starts()
    .catch ((ws) => console.log(ws));