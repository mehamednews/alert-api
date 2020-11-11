const express = require("express");
const router = express.Router();
const contr = require("./../controllers/alertController");

router.route("/").post(contr.newAlert);

module.exports = router;
