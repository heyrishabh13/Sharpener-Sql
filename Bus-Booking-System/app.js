const express = require("express");
const mysql = require("mysql2");

const app = express();

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

  const creationQuery = `create table Users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255),
        email VARCHAR(255)    
    );
    
    create table Buses(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT NOT NULL UNIQUE);
    
    create table Bookings(
    id INT AUTO_INCREMENT PRIMARY KEY,
    seatNumber INT,
    FOREIGN KEY (seatNumber) REFERENCES Buses(seatNumber)
    );
    
    create table Payments(
    id INT AUTO_INCREMENT PRIMARY KEY,
    amountPaid INT NOT NULL,
    paymentStatus VARCHAR(255));`;

  connection.query(creationQuery, (err) => {
    if (err) {
      console.log(err);
      connection.end();
      return;
    }
    console.log(`Table created successfully`);
    connection.end();
  });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
