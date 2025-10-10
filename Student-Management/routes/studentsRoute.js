const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/", studentController.addStudentData);
router.get("/", studentController.getAllStudents);
router.get("/:id", studentController.getSingleStudentData);
router.put("/:id", studentController.updateStudentData);
router.delete("/:id", studentController.deleteStudentData);

module.exports = router;
