const sequelize = require("../utils/db-connection");
const User = require("../models/users");

const addUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({
      name: name,
      email: email,
    });
    res.status(201).send(`User with name: ${name} successfully added.`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to make an entry");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll();
    if (!user) {
      res.status(404).send("User not found");
    }
    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to show the users.");
  }
};

module.exports = { addUser, getAllUsers };
