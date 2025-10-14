const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Students = sequelize.define("Students1", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Students;
