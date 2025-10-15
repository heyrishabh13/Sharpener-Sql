const express = require("express");
const db = require("./utils/db-connection");
const studentRoute = require("./routes/studentRoutes");
const courseRoutes = require("./routes/courseRoutes");

//Models
require("./models");
const app = express();

app.use(express.json());

app.use("/student", studentRoute);
app.use("/courses", courseRoutes);

db.sync({ force: true })
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
