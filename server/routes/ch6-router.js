const express = require("express");
const Ch6Ctrl = require("../controllers/ch6-ctrl");
const router = express.Router();


router.get("/ch6", Ch6Ctrl.getCh6);

module.exports = router;
