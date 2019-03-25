var express = require('express');
var router = express.Router();
var db = require('../models/index')

router.get('/activities', function(req, res, next) {
    db['activities'].findAll({
        attributes: ['id', 'name', 'code']
    })
        .then(activities => {
            res.json(activities)
        });
});

router.get('/subdivisions', function(req, res, next) {
    db['subdivisions'].findAll({
        attributes: ['id', 'name', 'code', 'kladr'],
        include: [
            {
                model: db['activities'],
                attributes: ['id', 'name'],
            }
        ]
    })
        .then(subdivisions => {
            res.json(subdivisions)
        });

});

/* Получить список всех клиентов */
router.get('/clients', function(req, res, next) {
    db['clients'].findAll({
        attributes: ['id', 'surname', 'name', 'patronymic', 'phone']
    })
        .then(clients => {
            res.json(clients)
        });
});

/* Добавить нового клиента */
router.post('/clients', function(req, res, next) {
    db['clients'].create({
        name: req.body.name,
        surname: req.body.surname,
        patronymic: req.body.patronymic,
        phone: req.body.phone
    });
    db['clients'].findAll({
        attributes: ['id', 'surname', 'name', 'patronymic', 'phone']
    })
        .then(clients => {
            res.json(clients)
        });
});

/* Обновить информацию о клинте */
router.post('/clients/:id', function(req, res, next) {

    db['clients'].update({
            name: req.body.name,
            surname: req.body.surname,
            patronymic: req.body.patronymic,
            phone: req.body.phone
        },
        {where: {id: req.params.id}});

    console.log(req.body)
    res.json(req.body)
});

/* Удалить клинта */
router.delete('/clients/:id', function(req, res, next) {
    db['clients'].destroy(
        {
            where: {
                id: req.params.id
            }
        })
        .then(cleaner => {
            res.json(cleaner)
        });
});



module.exports = router;
