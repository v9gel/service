module.exports = function(sequelize, Sequelize) {
  var Statuses = sequelize.define("statuses", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true
    }
  });

  return Statuses;
};
