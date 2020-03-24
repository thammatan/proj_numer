const express = require("express");
const Ch4Ctrl = require("../controllers/ch4-ctrl");
const router = express.Router();


router.get("/ch4", Ch4Ctrl.getCh4);

module.exports = router;
