var Activities = require('./activities');

module.exports = function(sequelize, Sequelize) {

    var Subdivisions = sequelize.define('subdivisions', {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        code: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        kladr: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        password: {
            type: Sequelize.STRING,
            notEmpty: true
        }
    });

    Subdivisions.belongsTo(Activities(sequelize, Sequelize))

    return Subdivisions;

}