const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "testdb",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Connection created successfully!");

  const creationQuery = `create table IF NOT EXISTS Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)    
    );
    
    create table IF NOT EXISTS Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    busNumber INT NOT NULL,
    totalSeats INT NOT NULL,
    availableSeats INT NOT NULL);
    
    create table IF NOT EXISTS Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL 
    );
    
    create table IF NOT EXISTS Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus VARCHAR(255));`;

  connection.query(creationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log(`Tables created successfully`);
    // connection.end();
  });
});

module.exports = connection;
