const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to the database establish successfully");
  } catch (error) {
    console.log("Connection to the database failed");
  }
})();

module.exports = sequelize;
