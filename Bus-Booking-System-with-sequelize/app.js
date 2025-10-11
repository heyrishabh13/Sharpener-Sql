const express = require("express");
const sequelize = require("./utils/db-connection");
const userRoute = require("./routes/userRoute");
const busesRoute = require("./routes/busRoute");

const app = express();

// models
const userModel = require("./models/users");
const busesModel = require("./models/buses");
const bookingsModel = require("./models/bookings");
const paymentsModel = require("./models/payments");

app.use(express.json());

app.use("/users", userRoute);
app.use("/buses", busesRoute);

sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => {
      console.log("Server is running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
