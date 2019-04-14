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
router.get("/product/eq/:status", function(req, res, next) {
  db["orders"]
    .findAll({
      attributes: ["id"],
      include: [
        {
          model: db["products"],
          attributes: ["id", "serial"],
          include: [
            {
              model: db["models"],
              attributes: ["id", "name"],
              include: [
                {
                  model: db["views"],
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ],
      where: {
        statusId: {
          [Op.eq]: req.params.status
        }
      }
    })
    .then(orders => {
      res.json(orders);
    });
});

module.exports = router;
