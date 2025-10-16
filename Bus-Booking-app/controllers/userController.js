const { Buses, Bookings } = require("../models");
const Users = require("../models/users");
const sequelize = require("../utils/db-connection");

const addUser = async (req, res) => {
  try {
    const user = await Users.create(req.body);
    res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBookings = async (req, res) => {
  try {
    const { id } = req.params;
    const bookings = await Bookings.findAll({
      where: { userId: id },
      attributes: { exclude: ["userId", "busId"] },
      include: [{ model: Buses, attributes: ["busNumber"] }],
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addUser,
  getAllBookings,
};
