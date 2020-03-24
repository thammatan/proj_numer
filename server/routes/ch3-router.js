const express = require("express");
const Ch3Ctrl = require("../controllers/ch3-ctrl");
const router = express.Router();


router.get("/ch3", Ch3Ctrl.getCh3);

module.exports = router;
