const express = require("express");
const db = require("./utils/db-connection");
const studentsRoute = require("./routes/studentsRoute");

const app = express();
app.use(express.json());

app.use("/students", studentsRoute);

app.listen(3000, () => {
  console.log("Server is running...");
});
