var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* Получить наряд-заказы для точки */
router.get("/point/:page", function(req, res, next) {
  db["orders"]
    .findAndCountAll({
      //offset:((req.params.page-1)*1),
      //limit : 1,
      //subQuery:false,
      attributes: [
        "id",
        "number",
        "accepted",
        "fulfilled",
        "date_receipt",
        "date_complection"
      ],
      include: [
        {
          model: db["statuses"],
          attributes: ["id", "name"]
        },
        {
          model: db["clients"],
          attributes: ["id", "surname", "name", "patronymic", "phone"]
        },
        {
          model: db["defects"],
          as: "defects",
          required: false,
          attributes: ["id", "name"],
          through: { attributes: [] }
        },
        {
          model: db["products"],
          attributes: ["id", "serial", "date_begin", "date_end"],
          include: [
            {
              model: db["models"],
              attributes: ["id", "name", "code"],
              include: [
                {
                  model: db["views"],
                  attributes: ["id", "name"]
                },
                {
                  model: db["providers"],
                  attributes: ["id", "name"]
                }
              ]
            }
          ]
        }
      ]
    })
    .then(activities => {


      console.log(activities.count);
      console.log(activities.rows);


      activities.rows = activities.rows.map(value => {
        value.product.valueGarant = [
          value.product.date_begin,
          value.product.date_end
        ];
        return value;
      });
      res.json(activities);
    });
});

/* Инициация наряд-заказа */
router.post("/", function(req, res, next) {
  console.log(req.body);
  db["orders"]
    .create({
      number: 500,
      statusId: 1,
      date_receipt: new Date(),
      accepted: req.body.accepted,
      clientId: req.body.client.id,
      productId: req.body.product.id
    })
    .then(function(order) {
      order.setDefects(req.body.defects);
    });
  res.render("index", { title: "Service API" });
});

/* Обновить наряд-заказ */
router.post("/:id", function(req, res, next) {
  console.log(req.body);
  db["orders"]
    .update(
      {
        accepted: req.body.accepted,
        date_begin: req.body.date_begin,
        date_end: req.body.date_end
      },
      { where: { id: req.params.id } }
    )
    .then(function(a) {
      db["orders"].findOne({ where: { id: req.params.id } }).then(order => {
        console.log(order);
        let defects = req.body.defects.map(value => {
          return value.id;
        });
        console.log(defects);
        /*db["orders"](db.sequlize, db.Sequlize)
          .find({ where: { id: req.params.id } })
          .on("success", function(city) {
            city.setDefects(defects);
          });
          */
        order.setDefects(defects);
      });
    });

  res.json(req.body);
});

/* Удалить наряд-заказ */
router.delete("/:id", function(req, res, next) {
  db["orders"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(order => {
      res.json(order);
    });
});

module.exports = router;
