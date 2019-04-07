var Models = require("./models");

module.exports = function(sequelize, Sequelize) {
  var Products = sequelize.define("products", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    serial: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    date_begin: {
      type: Sequelize.DATE
    },
    date_end: {
      type: Sequelize.DATE
    }
  });

  Products.belongsTo(Models(sequelize, Sequelize));

  return Products;
};
