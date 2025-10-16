const Bookings = require("../models/booking");
const sequelize = require("../utils/db-connection");

const addBooking = async (req, res) => {
  try {
    const booking = await Bookings.create(req.body);
    res.status(201).json({ booking });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBooking,
};
