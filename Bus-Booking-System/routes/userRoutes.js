const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/", userController.addUserEntry);
router.get("/", userController.getUserEntry);

module.exports = router;
