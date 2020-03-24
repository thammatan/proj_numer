const express = require("express");
const Ch5Ctrl = require("../controllers/ch5-ctrl");
const router = express.Router();


router.get("/ch5", Ch5Ctrl.getCh5);

module.exports = router;
