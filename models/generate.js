var db = require('./index');

//Вид деятельности
let activities = [
    {
        name: 'Склад',
        code: '1000'
    },
    {
        name: 'Ремонтный цех',
        code: '1001'
    },
    {
        name: 'Пункт приема-выдачи',
        code: '1002'
    }
];
activities.map(value => {
    db['activities'].create(value)
});

//Подразделения
let subdivisions = [
    {
        name: 'Главный склад',
        code: '1000',
        kladr: '2200000100009480045',
        password: '0000',
        activityId: 1
    },
    {
        name: 'Цех',
        code: '1001',
        kladr: '2200000100009480045',
        password: '0000',
        activityId: 2
    },
    {
        name: 'На малахова',
        code: '1002',
        kladr: '2200000100009480045',
        password: '0000',
        activityId: 3
    }
];
subdivisions.map(value => {
    db['subdivisions'].create(value)
});