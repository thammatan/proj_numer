const express = require("express");
const Ch1Ctrl = require("../controllers/ch1-ctrl");
const router = express.Router();


router.get("/ch1", Ch1Ctrl.getCh1);

module.exports = router;
