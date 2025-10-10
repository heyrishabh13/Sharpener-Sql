const express = require("express");
const db = require("./utils/db-connection");
const userRoute = require("./routes/userRoutes");
const busesRoute = require("./routes/busesRoute");

const app = express();
app.use(express.json());

app.use("/users", userRoute);
app.use("/buses", busesRoute);

app.listen(3000, () => {
  console.log("Server is running...");
});
