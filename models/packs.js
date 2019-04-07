module.exports = function(sequelize, Sequelize) {
  var Packs = sequelize.define("packs", {
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

  return Packs;
};
