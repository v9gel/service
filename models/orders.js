var Statuses = require("./statuses");
var Clients = require("./clients");
var Products = require("./products");

module.exports = function(sequelize, Sequelize) {
  var Orders = sequelize.define("orders", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    number: {
      type: Sequelize.INTEGER
    },
    accepted: {
      type: Sequelize.STRING
    },
    fulfilled: {
      type: Sequelize.STRING
    },
    date_receipt: {
      type: Sequelize.DATE
    },
    date_complection: {
      type: Sequelize.DATE
    }
  });

  Orders.belongsTo(Statuses(sequelize, Sequelize));
  Orders.belongsTo(Clients(sequelize, Sequelize));
  Orders.belongsTo(Products(sequelize, Sequelize));

  return Orders;
};
