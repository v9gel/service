var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Service API" });
});

/* GET home page. */
router.post("/", function(req, res, next) {
  db["subdivisions"]
    .findAll({
      where: {
        password: req.body.password,
        code: req.body.code
      }
    })
    .then(defects => {
      if (defects[0] === undefined) {
        res.json({ msg: "false" });
      } else {
        res.json(defects[0]);
      }
    });
});

module.exports = router;
