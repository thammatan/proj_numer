const express = require("express");
const Ch2Ctrl = require("../controllers/ch2-ctrl");
const router = express.Router();


router.get("/ch2", Ch2Ctrl.getCh2);

module.exports = router;
