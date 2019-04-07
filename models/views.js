module.exports = function(sequelize, Sequelize) {
  var Views = sequelize.define("views", {
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

  return Views;
};
