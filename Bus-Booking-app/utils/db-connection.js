const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connection establish successfully");
  } catch (error) {
    console.log("Database connection failed to connect.");
  }
})();

module.exports = sequelize;
