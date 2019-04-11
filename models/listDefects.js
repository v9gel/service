var Orders = require("./orders");
var Defects = require("./defects");

module.exports = function(sequelize, Sequelize) {
  var ListDefects = sequelize.define("listDefects");

  Orders(sequelize, Sequelize).belongsToMany(Defects(sequelize, Sequelize), {
    through: ListDefects
  });
  Defects(sequelize, Sequelize).belongsToMany(Orders(sequelize, Sequelize), {
    through: ListDefects
  });

  return ListDefects;
};
