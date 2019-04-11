var Providers = require("./providers");
var Views = require("./views");

module.exports = function(sequelize, Sequelize) {
  var Models = sequelize.define("models", {
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

  Models.belongsTo(Providers(sequelize, Sequelize));
  Models.belongsTo(Views(sequelize, Sequelize));

  return Models;
};
