module.exports = function(sequelize, Sequelize) {
  var Providers = sequelize.define("providers", {
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

  return Providers;
};
