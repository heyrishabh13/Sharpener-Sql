const db = require("../utils/db-connection");
const Students = require("../models/student");
const IdentityCard = require("../models/identityCard");
const Post = require("../models/post");

const addValuesToStudentTable = async (req, res) => {
  try {
    const student = await Students.create(req.body);
    res.status(201).json({ student });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addingValuesToStudentAndIdentityCardTable = async (req, res) => {
  try {
    const student = await Students.create(req.body.student);
    const idCard = await IdentityCard.create({
      ...req.body.identityCard,
      Students1Id: student.id,
    });
    res.status(201).json({ student, idCard });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addingValuesToStudentAndPostTable = async (req, res) => {
  try {
    const student = await Students.create(req.body.student);
    const post = await Post.create({
      ...req.body.post,
      Students1Id: student.id,
    });
    res.status(201).json({ student, post });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  addingValuesToStudentAndIdentityCardTable,
  addingValuesToStudentAndPostTable,
  addValuesToStudentTable,
};
