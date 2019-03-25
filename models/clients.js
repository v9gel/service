module.exports = function(sequelize, Sequelize) {

    var Clients = sequelize.define('clients', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        surname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        patronymic: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        phone: {
            type: Sequelize.STRING,
            notEmpty: true
        },
    });

    return Clients;

}