var db = require("./index");

//Вид деятельности
let activities = [
  {
    name: "Склад",
    code: "1000"
  },
  {
    name: "Ремонтный цех",
    code: "1001"
  },
  {
    name: "Пункт приема-выдачи",
    code: "1002"
  }
];
activities.map(value => {
  db["activities"].create(value);
});

//Подразделения
let subdivisions = [
  {
    name: "Склад",
    code: "1000",
    kladr: "2200000100009480045",
    password: "0000",
    activityId: 1
  },
  {
    name: "Цех",
    code: "1001",
    kladr: "2200000100009480045",
    password: "0000",
    activityId: 2
  },
  {
    name: "Точка Малахова",
    code: "1002",
    kladr: "2200000100009480045",
    password: "0000",
    activityId: 3
  }
];
subdivisions.map(value => {
  db["subdivisions"].create(value);
});

//Клиенты
let clients = [
  {
    surname: "Колесов",
    name: "Николай",
    patronymic: "Иванович",
    phone: "89605674365"
  },
  {
    surname: "Петрова",
    name: "Елена",
    patronymic: "Генадьевна",
    phone: "89606574839"
  },
  {
    surname: "Катькалова",
    name: "Анна",
    patronymic: "Андреевна",
    phone: "86960555555"
  },
  {
    surname: "Миронов",
    name: "Иван",
    patronymic: "Юрьевич",
    phone: "89656785647"
  }
];
clients.map(value => {
  db["clients"].create(value);
});

//Статусы
let statuses = [
  { name: "Принят" },
  { name: "Точка->Склад" },
  { name: "В ремонте" },
  { name: "Цех->Склад" },
  { name: "Готов к выдаче" },
  { name: "Выдан" }
];
statuses.map(value => {
  db["statuses"].create(value);
});

//Производители
let provieders = [
  {
    name: "LG",
    code: "1"
  },
  {
    name: "Bosh",
    code: "2"
  },
  {
    name: "Samsung",
    code: "3"
  },
  {
    name: "Candy",
    code: "4"
  },
  {
    name: "Indesit",
    code: "5"
  },
  {
    name: "Siemens",
    code: "6"
  },
  {
    name: "Nokia",
    code: "7"
  },
  {
    name: "Apple",
    code: "8"
  },
  {
    name: "Vestel",
    code: "9"
  },
  {
    name: "Beko",
    code: "10"
  },
  {
    name: "Renova",
    code: "11"
  },
  {
    name: "Rolsen",
    code: "12"
  }
];
provieders.map(value => {
  db["providers"].create(value);
});

//Производители
let views = [
  {
    name: "Телевизор",
    code: "1"
  },
  {
    name: "Стиральная машина",
    code: "2"
  },
  {
    name: "Холодильник",
    code: "3"
  },
  {
    name: "Электрическая плита",
    code: "4"
  },
  {
    name: "Пылесос",
    code: "5"
  },
  {
    name: "Мультиварка",
    code: "6"
  },
  {
    name: "Телефон",
    code: "7"
  },
  {
    name: "Вентилятор",
    code: "8"
  },
  {
    name: "Эпилятор",
    code: "9"
  },
  {
    name: "Хлебопечка",
    code: "10"
  },
  {
    name: "Renova",
    code: "11"
  },
  {
    name: "Rolsen",
    code: "12"
  }
];
views.map(value => {
  db["views"].create(value);
});

//Модели
let models = [
  {
    name: "X1",
    code: "1",
    providerId: 1,
    viewId: 1
  },
  {
    name: "MK2",
    code: "2",
    providerId: 2,
    viewId: 2
  },
  {
    name: "Kl",
    code: "3",
    providerId: 3,
    viewId: 3
  },
  {
    name: "R54",
    code: "4",
    providerId: 4,
    viewId: 4
  },
  {
    name: "RESD",
    code: "5",
    providerId: 5,
    viewId: 5
  },
  {
    name: "WER",
    code: "6",
    providerId: 6,
    viewId: 6
  },
  {
    name: "EFD",
    code: "7",
    proviederId: 7,
    viewId: 7
  }
];
models.map(value => {
  db["models"].create(value);
});

//Статусы
let packs = [
  { name: "Банка" },
  { name: "Туба" },
  { name: "Контейнер" },
  { name: "Цистерна" },
  { name: "Баллон" },
  { name: "Ящик" },
  { name: "Бочка" },
  { name: "Корзина" },
  { name: "Картонная коробка" },
  { name: "Тетрапак" },
  { name: "Мешок" },
  { name: "Пакет" },
  { name: "Оберточная бумага" }
];
packs.map(value => {
  db["packs"].create(value);
});

//Дефекты
let defects = [
  {
    name: "Разбитый экран",
    code: "1000"
  },
  {
    name: "Перегрев",
    code: "1001"
  },
  {
    name: "Громкая работа",
    code: "1002"
  }
];
defects.map(value => {
  db["defects"].create(value);
});

//Услуги
let services = [
  {
    name: "Замена экрана",
    code: "1000"
  },
  {
    name: "Смазка",
    code: "1001"
  },
  {
    name: "Замена кулера",
    code: "1002"
  }
];
services.map(value => {
  db["services"].create(value);
});

//Изделия
let products = [
  {
    serial: "1020",
    date_begin: "2018-10-17",
    date_end: "2018-12-09",
    modelId: 1
  }
];
products.map(value => {
  db["products"].create(value);
});
