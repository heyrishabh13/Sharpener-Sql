const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }
  console.log("Connection created successfully!");

  const creationQuery = `create table IF NOT EXISTS Students(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255))
    `;
  connection.execute(creationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log("Table created successfully");
  });
});

module.exports = connection;
