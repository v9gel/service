var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* Получить наряд-заказы для точки */
router.get("/point", function(req, res, next) {
  db["orders"]
    .findAll({
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
          model: db.Defects,
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
      res.json(activities);
    });
});

/* Инициация наряд-заказа */
router.post("/", function(req, res, next) {
  console.log(req.body);
  db["orders"].create({
    number: 500,
    statusId: 1,
    date_receipt: new Date(),
    accepted: req.body.accepted,
    clientId: req.body.client.id,
    productId: req.body.product.id
  });
  res.render("index", { title: "Service API" });
});

/* Обновить наряд-заказ */
router.post("/:id", function(req, res, next) {
  console.log(req.body);
  db["orders"].update(
    {
      accepted: req.body.accepted
    },
    { where: { id: req.params.id } }
  );
  res.json(req.body);
});

module.exports = router;
