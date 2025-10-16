const Bookings = require("./booking");
const Buses = require("./buses");
const Users = require("./users");

Users.hasMany(Bookings, { foreignKey: "userId" });
Bookings.belongsTo(Users, { foreignKey: "userId" });

Buses.hasMany(Bookings, { foreignKey: "busId" });
Bookings.belongsTo(Buses, { foreignKey: "busId" });

module.exports = {
  Users,
  Buses,
  Bookings,
};
