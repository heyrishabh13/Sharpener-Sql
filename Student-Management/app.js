const express = require("express");
const db = require("./utils/db-connection");
const studentsRoute = require("./routes/studentsRoute");

const app = express();

// models
const studentModel = require("./models/students");

app.use(express.json());

app.use("/students", studentsRoute);

db.sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
