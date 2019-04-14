var express = require("express");
var router = express.Router();
var db = require("../models/index");
var Sequelize = require("sequelize");
const Op = Sequelize.Op;

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


      req.body.movingProducts.map(value => {
        invoice.addProducts(value.product.id, { through: { packId: value.pack.id }})
      })
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
          model: db["subdivisions"],
          as: "sender",
          attributes: ["id", "name"],
          include: [
            {
              model: db["activities"],
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: db["subdivisions"],
          as: "recipient",
          attributes: ["id", "name"],
          include: [
            {
              model: db["activities"],
              attributes: ["id", "name"]
            }
          ]
        },
        {
          model: db["InvoiceProducts"],
          through: {
            where: {
              invoiceId: 1
            }
          }
        },
        /*{
          model: db["products"],
          as: "products",
          required: false,
          attributes: ["id"],
          include: [
            {
              model: db["models"],
              attributes: ["id", "name", "code"],
              include: [
                {
                  model: db["views"],
                  attributes: ["id", "name"]
                },
              ]
            },
          ],*/
          /*include: [
            {
              model: db["packs"],
              attributes: ["id", "name"]
            }
          ],*/
          //through: { attributes: [] }
      ],
      where: {
        senderId: {
          [Op.eq]: req.params.subdivision
        }
      }
    })
    .then(ar => {
      res.json(ar);
    });
});

module.exports = router;
