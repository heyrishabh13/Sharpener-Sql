const db = require("../utils/db-connection");
const Buses = require("../models/buses");
const { Op } = require("sequelize");

const addBus = async (req, res) => {
  try {
    const { busNumber, totalSeats, availableSeats } = req.body;
    const buses = await Buses.create({
      busNumber,
      totalSeats,
      availableSeats,
    });
    res
      .status(201)
      .send(`Bus with busNumber: ${busNumber} data successfully created`);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to add bus data");
  }
};

const getBusSeatData = async (req, res) => {
  try {
    const { seats } = req.params;
    const buses = await Buses.findAll({
      where: {
        availableSeats: {
          [Op.gt]: seats,
        },
      },
    });
    if (!buses) {
      res.status(404).send("Bus not found");
    }
    res.status(200).json({ buses });
  } catch (error) {
    console.log(error);
    res.status(500).send("Error in show buses data");
  }
};



module.exports = { addBus, getBusSeatData };
