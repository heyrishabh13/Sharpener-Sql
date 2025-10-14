const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database establish successfully");
  } catch (error) {
    console.log("Unable to connect to database");
  }
})();

module.exports = sequelize;
