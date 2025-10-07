const db = require("../utils/db-connection");

const addEntry = (req, res) => {
  const { name, email } = req.body;
  const query = `INSERT INTO Students (name, email) values(?,?)`;

  db.execute(query, [name, email], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    res.status(200).send(`Student with name ${name} successfully added!`);
  });
};

const updateEntry = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const query = `UPDATE Students SET name = ? WHERE id = ?`;

  db.execute(query, [name, id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }

    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
      return;
    }

    res.status(200).send(`Student with id ${id} updated successfully.`);
  });
};

const deleteEntry = (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE from Students WHERE id = ?`;

  db.execute(deleteQuery, [id], (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
    }

    res.status(200).send(`Student with id ${id} is deleted`);
  });
};

module.exports = {
  addEntry,
  updateEntry,
  deleteEntry,
};
