const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7xiH7kpaFVXDYIXsBERRHTqPAQIlyM3kyhKl/8+Rdtd3Q9zzvTwlErI2itrrb1fQVllBC3RDYxfQY2zC6SoW9JbjcAYTM5xjDDogQhSCMagWWjNSPN9xTzj6Kq0iUgN/sWUUF++Frtf1nWlbe04fkmO4TO490B9DvIs/AMgt7gOs2m+2RrQU0mhInEetqc0W5Lg6DXYoHpCXoRiIE+TZ3DvEGGGszKZ1ikqEIb5Et3WMMPfo3+yDrlPk3J0vbJk3bdYg74w7MVbmDI2CRavlZHYI2+48s3v0be0wNbm7eZ04ZpKmlNpekt5XLT4agQBn7pemLHmNWmtxnzQJ1lSokiPUEkzevu27uaLO2LDSmcZGVv6wiOy0oST2nVPdDTRZjtHPO9c83Sdc/L3iKdzqs/6+5Gw8P3gkAuGacJNm7aBPpkJRdss13XEYKVsnfAr8TX+yMrx/+iuL1W73Pt9yyv7U1ZtqKEN7EAZRZMWms6xj+e30csqsSkrfo++EaPhjqZh3+MFfXVbDclJC8Ob7/NxRrlbzVB9PzisOG4qf9KH9Iz/xHK3hjNR8ouJnXiqNJv5amC5len4qbpZU6XIIWuh/rBQKydeW04ZBw5r5PppvdiyeLFRmGEe9Q8bnyzc0yTUKjoQ/F/J89uLjuimR2DM3XsAoyQjFEOaVWW3J8o9AKOLg0KM6Ju6YLL3YtvlJi0Wc6c6JoYlbBv7oJvaUuIVY7Rfi364rS5C0DyDHqhxFSJCULTICK3wzUSEwAQRMP77Zw+U6EofvnXVBK4H4gwTui3PdV7B6MPUj0MYhtW5pM6tDNVugTAYs5/biNKsTEgn47mEOEyzC1JTSAkYxzAn6N4DEbpkIerwwCKo9zSD1F6f2xlXrPza21pNRzmtyscvcTTgxYCTn0KB555EcRg+yeIgfEIijGLIizHPDUEPZO8t0935rYM48A/mPiPpwEqvzkw2xIMWaQa9jI5vLjykRxhFYEzxGfVAAMPjuXarIyr/gDtrWjfwBgnj5i6RK823GcZaxKE+N7/gPiwF49fPMaVWUYfnaCYv+8IC9EDxlsCse/lIlHiWF8WRzI0F7i/yo+l0hHX9o0S0g33XvLsQIQqznIAxUPVl/osos+kSldULmc8VPVHURAGfHn1k/RGmwSa291LYFjCWtDUxIF+KQ8Rqu5ZOtMZVk0I8DNnUX+/Y538BAWMwbxrbQVXLxHu6o/v5xcMwZfZtX7FTa+hOnfQMpcqO09UELTfsccdHA2clJfugOPrlzVTm5n4GV96anXPczkWrxhqo9nNX7ZGVr8VSEhYt+9Ju6OhMxFxhnR0r0WzFzOTF9lfE2x6TWpcht47aUdWKWX1VrLVh9s/MnmGafiHXo4Ppsv2SToWrG0uGz5aZ/ejCtymQv0/f7K1BXt+TFWfobZiVsHPoP7z5mnH23vsC8T4df5OjCdr67NwSzEFRMk0rqTtaM1ZJFY5Iti1Pm8o4zxHVvZaj4H7/2QN1Dmlc4QKMASwjXGUR6IEcEqp8tqmbFYhQWNRgzEmCKEsiKwx7oLgpde1QSD+6Gyjdt1xMwP0fJqBIj/gHAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

