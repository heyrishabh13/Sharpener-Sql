const db = require("../utils/db-connection");

const addUserEntry = (req, res) => {
  const { name, email } = req.body;

  const query = `INSERT INTO Users (name, email) VALUES (? , ?);`;

  db.execute(query, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(404).send(err.message);
      db.end();
      return;
    }
    res
      .status(200)
      .send(`User with name ${name} is successfully added in Users table.`);
  });
};

const getUserEntry = (req, res) => {
  const query = `SELECT * FROM Users;`;

  db.execute(query, (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("User not found");
    }
    res.status(200).json({ results });
  });
};

module.exports = {
  addUserEntry,
  getUserEntry,
};
