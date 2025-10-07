const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.post("/add", studentController.addEntry);
router.put("/update/:id", studentController.updateEntry);
router.delete("/delete/:id", studentController.deleteEntry);

module.exports = router;
