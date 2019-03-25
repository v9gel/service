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

//Клиенты
let clients = [
    {
        surname: 'Колесов',
        name: 'Николай',
        patronymic: 'Иванович',
        phone: '89605674365'
    },
    {
        surname: 'Петрова',
        name: 'Елена',
        patronymic: 'Генадьевна',
        phone: '89606574839'
    },
    {
        surname: 'Катькалова',
        name: 'Анна',
        patronymic: 'Андреевна',
        phone: '86960555555'
    },
    {
        surname: 'Миронов',
        name: 'Иван',
        patronymic: 'Юрьевич',
        phone: '89656785647'
    },
];
clients.map(value => {
    db['clients'].create(value)
});