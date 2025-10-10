const db = require("../utils/db-connection");

const addStudentData = (req, res) => {
  const { name, email, age } = req.body;
  const query = `INSERT INTO Students (name, email, age) VALUES (?, ?,?);`;

  db.execute(query, [name, email, age], (err) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    res.status(201).send(`Student with name ${name} data added successfully.`);
  });
};

const getAllStudents = (req, res) => {
  const query = `SELECT * FROM Students;`;

  db.execute(query, (err, results) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      db.end();
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("Student not found");
    }
    res.status(200).json({ results });
  });
};

const getSingleStudentData = (req, res) => {
  const { id } = req.params;
  const query = `Select  * FROM Students WHERE id = ?;`;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
    }

    res.status(200).json({ result });
  });
};

const updateStudentData = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;
  const query = `UPDATE Students SET name = ?, email = ? WHERE id = ?;`;

  db.execute(query, [name, email, id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student record not found");
    }
    res.status(200).send("Data updated successfully");
  });
};

const deleteStudentData = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM Students WHERE id = ?;`;

  db.execute(query, [id], (err, result) => {
    if (err) {
      console.log(err.message);
      res.status(500).send(err.message);
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send("Student not found");
    }
    res.status(200).send(`Student with id ${id} successfully deleted!`);
  });
};

module.exports = {
  addStudentData,
  getAllStudents,
  getSingleStudentData,
  updateStudentData,
  deleteStudentData,
};
