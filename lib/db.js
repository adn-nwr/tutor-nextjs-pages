const mysql = require("mysql2");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "jalanandalas",
  database: "nusantara_nodejs",
  multipleStatements: true,
});

module.exports = dbPool.promise();
