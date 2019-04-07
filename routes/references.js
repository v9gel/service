var express = require("express");
var router = express.Router();
var db = require("../models/index");

/* Виды деятельности */
router.get("/activities", function(req, res, next) {
  db["activities"]
    .findAll({
      attributes: ["id", "name", "code"]
    })
    .then(activities => {
      res.json(activities);
    });
});

router.post("/activities", function(req, res, next) {
  db["activities"].create({
    name: req.body.name,
    code: req.body.code
  });
  res.json({ msg: "true" });
});

router.delete("/activities/:id", function(req, res, next) {
  db["activities"]
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

/* Дефекты */
router.get("/defects", function(req, res, next) {
  db["defects"]
    .findAll({
      attributes: ["id", "name", "code"]
    })
    .then(defects => {
      res.json(defects);
    });
});

router.post("/defects", function(req, res, next) {
  db["defects"].create({
    name: req.body.name,
    code: req.body.code
  });
  res.json({ msg: "true" });
});

router.delete("/defects/:id", function(req, res, next) {
  db["defects"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/defects/:id", function(req, res, next) {
  db["defects"].update(
    {
      name: req.body.name,
      code: req.body.code
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Модели */
router.get("/models", function(req, res, next) {
  db["models"]
    .findAll({
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
    })
    .then(models => {
      res.json(models);
    });
});

router.post("/models", function(req, res, next) {
  db["models"].create({
    name: req.body.name,
    code: req.body.code,
    view: req.body.view.id,
    provider: req.body.provider.id
  });
  res.json({ msg: "true" });
});

router.delete("/models/:id", function(req, res, next) {
  db["models"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/models/:id", function(req, res, next) {
  db["models"].update(
    {
      name: req.body.name,
      code: req.body.code,
      view: req.body.view.id,
      provider: req.body.provider.id
    },
    { where: { id: req.params.id } }
  );
  res.json(req.body);
});

/* Упаковки */
router.get("/packs", function(req, res, next) {
  db["packs"]
    .findAll({
      attributes: ["id", "name"]
    })
    .then(packs => {
      res.json(packs);
    });
});

router.post("/packs", function(req, res, next) {
  db["packs"].create({
    name: req.body.name
  });
  res.json({ msg: "true" });
});

router.delete("/packs/:id", function(req, res, next) {
  db["packs"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/packs/:id", function(req, res, next) {
  db["packs"].update(
    {
      name: req.body.name
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Статусы */
router.get("/statuses", function(req, res, next) {
  db["statuses"]
    .findAll({
      attributes: ["id", "name"]
    })
    .then(statuses => {
      res.json(statuses);
    });
});

router.post("/statuses", function(req, res, next) {
  db["statuses"].create({
    name: req.body.name
  });
  res.json({ msg: "true" });
});

router.delete("/statuses/:id", function(req, res, next) {
  db["statuses"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/statuses/:id", function(req, res, next) {
  db["statuses"].update(
    {
      name: req.body.name
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Производители */
router.get("/providers", function(req, res, next) {
  db["providers"]
    .findAll({
      attributes: ["id", "name", "code"]
    })
    .then(providers => {
      res.json(providers);
    });
});

router.post("/providers", function(req, res, next) {
  db["providers"].create({
    name: req.body.name,
    code: req.body.code
  });
  res.json({ msg: "true" });
});

router.delete("/providers/:id", function(req, res, next) {
  db["providers"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/providers/:id", function(req, res, next) {
  db["providers"].update(
    {
      name: req.body.name,
      code: req.body.code
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Услуги */
router.get("/services", function(req, res, next) {
  db["services"]
    .findAll({
      attributes: ["id", "name", "code"]
    })
    .then(services => {
      res.json(services);
    });
});

/* Виды техники */
router.get("/views", function(req, res, next) {
  db["views"]
    .findAll({
      attributes: ["id", "name", "code"]
    })
    .then(views => {
      res.json(views);
    });
});

router.post("/views", function(req, res, next) {
  db["views"].create({
    name: req.body.name,
    code: req.body.code
  });
  res.json({ msg: "true" });
});

router.delete("/views/:id", function(req, res, next) {
  db["views"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/views/:id", function(req, res, next) {
  db["views"].update(
    {
      name: req.body.name,
      code: req.body.code
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Подразделения */
router.get("/subdivisions", function(req, res, next) {
  db["subdivisions"]
    .findAll({
      attributes: ["id", "name", "code", "kladr"],
      include: [
        {
          model: db["activities"],
          attributes: ["id", "name"]
        }
      ]
    })
    .then(subdivisions => {
      res.json(subdivisions);
    });
});

router.post("/subdivisions", function(req, res, next) {
  db["subdivisions"].create({
    name: req.body.name,
    code: req.body.code,
    activityId: req.body.activity,
    password: "0000",
    kladr: "0000"
  });
  res.json({ msg: "true" });
});

router.delete("/subdivisions/:id", function(req, res, next) {
  db["subdivisions"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

router.post("/subdivisions/:id", function(req, res, next) {
  db["subdivisions"].update(
    {
      name: req.body.name,
      code: req.body.code,
      activityId: req.body.activity.id,
      password: "0000",
      kladr: "0000"
    },
    { where: { id: req.params.id } }
  );
  res.json(req.body);
});

/* Получить список всех клиентов */
router.get("/clients", function(req, res, next) {
  db["clients"]
    .findAll({
      attributes: ["id", "surname", "name", "patronymic", "phone"]
    })
    .then(clients => {
      res.json(clients);
    });
});

/* Добавить нового клиента */
router.post("/clients", function(req, res, next) {
  db["clients"].create({
    name: req.body.name,
    surname: req.body.surname,
    patronymic: req.body.patronymic,
    phone: req.body.phone
  });
  db["clients"]
    .findAll({
      attributes: ["id", "surname", "name", "patronymic", "phone"]
    })
    .then(clients => {
      res.json(clients);
    });
});

/* Обновить информацию о клинте */
router.post("/clients/:id", function(req, res, next) {
  db["clients"].update(
    {
      name: req.body.name,
      surname: req.body.surname,
      patronymic: req.body.patronymic,
      phone: req.body.phone
    },
    { where: { id: req.params.id } }
  );

  console.log(req.body);
  res.json(req.body);
});

/* Удалить клинта */
router.delete("/clients/:id", function(req, res, next) {
  db["clients"]
    .destroy({
      where: {
        id: req.params.id
      }
    })
    .then(cleaner => {
      res.json(cleaner);
    });
});

module.exports = router;
