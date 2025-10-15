const { Students } = require("../models");
const Courses = require("../models/courses");
const sequelize = require("../utils/db-connection");

const addValuesToCourseTable = async (req, res) => {
  try {
    const course = await Courses.create(req.body);
    res.status(201).json({ course });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const addingStudentsToCourses = async (req, res) => {
  try {
    const { Students1Id, CourseId } = req.body;
    const student = await Students.findByPk(Students1Id);
    const course = await Courses.findAll({
      where: {
        id: CourseId,
      },
    });
    await student.addCourses(course);
    const updatedStudent = await Students.findByPk(Students1Id, {
      include: Courses,
    });
    res.status(200).json({ updatedStudent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addValuesToCourseTable,
  addingStudentsToCourses,
};
