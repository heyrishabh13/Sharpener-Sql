const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been establish successfully");
  } catch (error) {
    console.log(error);
  }
})();

module.exports = sequelize;

// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "testdb",
// });

// connection.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }

//   console.log("Connection created successfully.");

//   const query = `CREATE TABLE IF NOT EXISTS Students(
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   name VARCHAR(255),
//   email VARCHAR(255) UNIQUE,
//   age INT);`;

//   connection.execute(query, (err) => {
//     if (err) {
//       console.log(err);
//       connection.end();
//       return;
//     }
//     console.log("Table created successfully");
//   });
// });

// module.exports = connection;
