const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const StudentCourses = sequelize.define("studentCourses", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
});

module.exports = StudentCourses;
