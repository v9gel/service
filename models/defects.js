module.exports = function(sequelize, Sequelize) {
  var Defects = sequelize.define("defects", {
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

  return Defects;
};
