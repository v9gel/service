module.exports = function(sequelize, Sequelize) {
  var Services = sequelize.define("services", {
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

  return Services;
};
