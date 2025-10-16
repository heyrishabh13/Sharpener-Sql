const { Buses, Users, Bookings } = require("../models");
const sequelize = require("../utils/db-connection");

const addBus = async (req, res) => {
  try {
    const bus = await Buses.create(req.body);
    res.status(201).json({ bus });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllBookingsOfBusWithUserDetails = async (req, res) => {
  try {
    const bookings = await Bookings.findAll({
      where: { busId: req.params.id },
      attributes: { exclude: ["userId", "busId"] },
      include: { model: Users },
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addBus,
  getAllBookingsOfBusWithUserDetails,
};
