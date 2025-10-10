const db = require("../utils/db-connection");

const addBusEntry = (req, res) => {
  const { busNumber, totalSeats, availableSeats } = req.body;
  const query = `INSERT INTO Buses (busNumber, totalSeats, availableSeats) VALUES (?, ? , ?);`;

  db.execute(query, [busNumber, totalSeats, availableSeats], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    res.status(201).send(`Bus with busNumber ${busNumber} added successfully`);
  });
};

const getBuses = (req, res) => {
  const { seats } = req.params;
  const query = `SELECT * FROM Buses WHERE availableSeats > ?;`;

  db.execute(query, [seats], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Bus details not found");
    }
    res.status(200).json({ results });
  });
};

module.exports = {
  addBusEntry,
  getBuses,
};
