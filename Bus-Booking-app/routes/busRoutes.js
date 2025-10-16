const express = require("express");
const busController = require("../controllers/busController");

const router = express.Router();

router.post("/", busController.addBus);
router.get("/:id/booking", busController.getAllBookingsOfBusWithUserDetails);

module.exports = router;
