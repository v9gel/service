module.exports = function(sequelize, Sequelize) {

    var Activities = sequelize.define('activities', {
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
        }
    });

    return Activities;

}