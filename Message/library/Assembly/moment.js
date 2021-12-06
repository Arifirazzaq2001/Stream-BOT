const moment = require("moment-timezone");

const kyun = (s) =>{
    function pad(s) {
        return (s < 10 ? '0' : '') + s;
    }
    var hours = Math.floor(s / (60 * 60));
    var minutes = Math.floor(s % (60 * 60) / 60);
    var seconds = Math.floor(s % 60);
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

     let d = new Date();
     let locale = "id";
     let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
     let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
     let week = d.toLocaleDateString(locale, { weekday: "long" });
     let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
     let tanggal = week + " " + weton + ", " + date;

    function formatDate(n, locale = 'id') {
      let d = new Date(n)
      return d.toLocaleDateString(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric' 
      })
    }
    
    function count(seconds) {
            if (typeof seconds !== "number") throw "vanzError: Unexpected Param " + typeof seconds
                var hours = Math.floor(seconds / (60*60));
                var minutes = Math.floor(seconds % (60*60) / 60);
                var seconds = Math.floor(seconds % 60);
             return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
             }

     const time = moment().tz("Asia/Jakarta").format("HH:mm:ss");
     const WIB = moment().tz("Asia/Jakarta").format("HH:mm:ss");
     const WIT = moment().tz("Asia/Jayapura").format("HH:mm:ss");
     const WITA = moment().tz("Asia/Makassar").format("HH:mm:ss");

module.exports = {
    kyun,
    time,
    WIB,
    WITA,
    WIT,
    weton,
    week,
    date,
    waktu,
    tanggal,
    formatDate,
    count
}