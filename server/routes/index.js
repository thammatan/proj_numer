const express = require("express");

const Ch1Ctrl = require("../controllers/ch1-ctrl");
const Ch2Ctrl = require("../controllers/ch2-ctrl");
const Ch3Ctrl = require("../controllers/ch3-ctrl");
const Ch4Ctrl = require("../controllers/ch4-ctrl");
const Ch5Ctrl = require("../controllers/ch5-ctrl");
const Ch6Ctrl = require("../controllers/ch6-ctrl");
const router = express.Router();

router.get("/ch1", Ch1Ctrl.getCh1);
router.get("/ch2", Ch2Ctrl.getCh2);
router.get("/ch3", Ch3Ctrl.getCh3);
router.get("/ch4", Ch4Ctrl.getCh4);
router.get("/ch5", Ch5Ctrl.getCh5);
router.get("/ch6", Ch6Ctrl.getCh6);
module.exports = router;
