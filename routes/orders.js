var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* GET home page. */
router.get("/", function(req, res, next) {
  db["orders"].findAll().then(activities => {
    res.json(activities);
  });
});

router.post("/", function(req, res, next) {
  console.log(req.body);
  db["orders"].create({
    number: 500,
    statusId: 1
  });
  res.render("index", { title: "Service API" });
});

module.exports = router;
