const express = require("express");
const db = require("./utils/db-connection");
const studentsRoutes = require("./routes/studentRoutes");

const app = express();

app.use(express.json());

app.use("/students", studentsRoutes);

app.listen(3000, () => {
  console.log(`Server is running...`);
});
