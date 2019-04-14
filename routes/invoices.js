var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* Создание накладной */
router.post("/", function(req, res, next) {
  console.log(req.body);
  db["invoices"]
    .create({
      number: 500,
      date_receipt: new Date(),
      senderId: req.body.sender.id,
      recipientId: req.body.recipient.id
    })
    .then(function(invoice) {
      invoice.setProducts(req.body.products);
    });
  res.render("index", { title: "Service API" });
});

/* Получить накладные для нужного подразделения */
router.get("/:subdivision", function(req, res, next) {
  db["invoices"]
    .findAll({
      attributes: ["id", "number", "date_receipt"],
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
      let ar = activities.map(value => {
        value.product.valueGarant = [
          value.product.date_begin,
          value.product.date_end
        ];
        return value;
      });
      res.json(ar);
    });
});

module.exports = router;
