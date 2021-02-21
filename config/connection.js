const mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',

  password: '@kina1987',
  database: 'burger_db',
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "wock1pi5khq7gs0i",
    password: "fkftxsyq9viacawk",
    database: "yzzl7cn4b64h3cmd",
  });
}

connection.connect((err) => {
  if (err) {
    console.error(`error connecting: ${err.stack}`);
    return;
  }
  console.log(`connected as id ${connection.threadId}`);
});


module.exports = connection;

