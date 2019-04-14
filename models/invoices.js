var Subdivisions = require("./subdivisions");
var Products = require("./products");
var Packs = require("./packs");

module.exports = function(sequelize, Sequelize) {
  var Invoices = sequelize.define("invoices", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    number: {
      type: Sequelize.INTEGER
    },
    date_receipt: {
      type: Sequelize.DATE
    }
  });

  Invoices.belongsTo(Subdivisions(sequelize, Sequelize), {
    foreignKey: "senderId"
  });

  Invoices.belongsTo(Subdivisions(sequelize, Sequelize), {
    foreignKey: "recipientId"
  });

  Invoices.associate = models => {
    Invoices.belongsToMany(Products(sequelize, Sequelize), {
      through: "InvoiceProducts",
      as: "products",
      foreignKey: "invoiceId"
    });
  };

  return Invoices;
};
