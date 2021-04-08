// Set up MySQL connection.
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    port: process.env.PORT || 3306,
    user: 'xmldy382yl3vlbum',
    password: 'vxybf7094yu9pxk7',
    database: 'g1v3u8db9rtpl41p',
  });


  connection.connect((err) => {
      if (err) {
          console.error(`error connecting: ${err.stack}`);
          return;
        }
        console.log(`connected as id ${connection.threadId}`);
    });
    


    module.exports = connection;

