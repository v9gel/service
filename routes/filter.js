var express = require("express");
var router = express.Router();
var db = require("../models/index");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

/* Вернуть подразделения без текущего */
router.get("/subdivisions/not/:id", function(req, res, next) {
  db["subdivisions"]
    .findAll({
      attributes: ["id", "name", "code", "kladr"],
      include: [
        {
          model: db["activities"],
          attributes: ["id", "name"]
        }
      ],
      where: {
        id: {
          [Op.ne]: req.params.id
        }
      }
    })
    .then(subdivisions => {
      res.json(subdivisions);
    });
});

/* Вернуть изделия, которые имеют определённый статус */
router.get("/products/", function(req, res, next) {
  db["statuses"]
    .findAll({
      attributes: ["id", "name"]
    })
    .then(statuses => {
      res.json(statuses);
    });
});

module.exports = router;
