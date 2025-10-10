const express = require("express");
const busesController = require("../controllers/busesController");
const router = express.Router();

router.post("/", busesController.addBusEntry);
router.get("/available/:seats", busesController.getBuses);

module.exports = router;
