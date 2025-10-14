const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../utils/db-connection");

const Post = sequelize.define(
  "Posts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    post: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = Post;
