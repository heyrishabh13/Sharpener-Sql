const db = require("../utils/db-connection");
const Student = require("../models/students");

const addStudentData = async (req, res) => {
  try {
    const { name, email } = req.body;
    const student = await Student.create({
      name: name,
      email: email,
    });
    res.status(201).send(`Student with name: ${name} successfully added!`);
  } catch (err) {
    console.log(err);
    res.status(500).send("Unable to make an entry");
  }
  //   const query = `INSERT INTO Students (name, email, age) VALUES (?, ?,?);`;
  //   db.execute(query, [name, email, age], (err) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       return;
  //     }
  //     res.status(201).send(`Student with name ${name} data added successfully.`);
  //   });
};

const getAllStudents = async (req, res) => {
  try {
    const student = await Student.findAll();
    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(200).json({ student });
  } catch (error) {
    console.log(error);
    res.status(500).send("there is an error!");
  }
  //   const query = `SELECT * FROM Students;`;

  //   db.execute(query, (err, results) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       db.end();
  //       return;
  //     }
  //     if (results.affectedRows === 0) {
  //       res.status(404).send("Student not found");
  //     }
  //     res.status(200).json({ results });
  //   });
};

const getSingleStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).send("there is an error!");
  }

  //   const query = `Select  * FROM Students WHERE id = ?;`;

  //   db.execute(query, [id], (err, result) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       return;
  //     }
  //     if (result.affectedRows === 0) {
  //       res.status(404).send("Student not found");
  //     }

  //     res.status(200).json({ result });
  //   });
};

const updateStudentData = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const student = await Student.findByPk(id);
    if (!student) {
      res.status(404).send("Student not found");
    }
    student.name = name;
    await student.save();
    res.status(200).send("Student data updated successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("User cannot be updated");
  }
  //   const query = `UPDATE Students SET name = ?, email = ? WHERE id = ?;`;

  //   db.execute(query, [name, email, id], (err, result) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       return;
  //     }
  //     if (result.affectedRows === 0) {
  //       res.status(404).send("Student record not found");
  //     }
  //     res.status(200).send("Data updated successfully");
  //   });
};

const deleteStudentData = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.destroy({
      where: { id: id },
    });

    if (!student) {
      res.status(404).send("Student not found");
    }
    res.status(200).send("Student data deleted successfully.");
  } catch (error) {
    console.log(error);
    res.status(500).send("There is an error");
  }

  //   const query = `DELETE FROM Students WHERE id = ?;`;

  //   db.execute(query, [id], (err, result) => {
  //     if (err) {
  //       console.log(err.message);
  //       res.status(500).send(err.message);
  //       return;
  //     }
  //     if (result.affectedRows === 0) {
  //       res.status(404).send("Student not found");
  //     }
  //     res.status(200).send(`Student with id ${id} successfully deleted!`);
  //   });
};

module.exports = {
  addStudentData,
  getAllStudents,
  getSingleStudentData,
  updateStudentData,
  deleteStudentData,
};
