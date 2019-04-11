var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* Список дефектов */
router.get("/:id", function(req, res, next) {
  db["listDefects"]
    .findAll({
      where: {
        orderId: req.params.id
      },
      include: [
        {
          model: db["defects"],
          attributes: ["id", "name"]
        }
      ]
    })
    .then(activities => {
      res.json(activities);
    });
});

router.post("/", function(req, res, next) {
  db["listDefects"].create({
    orderId: req.body.order.id,
    defectId: req.body.defect.id
  });
  res.json({ msg: "true" });
});

router.delete("delete/:id", function(req, res, next) {
  db["listDefects"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/activities/:id", function(req, res, next) {
  db["activities"].update(
    {
      name: req.body.name,
      code: req.body.code
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
