var Packs = require("./packs")

module.exports = function(sequelize, Sequelize) {
    var InvoiceProducts = sequelize.define("InvoiceProducts", {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        }
    });

    InvoiceProducts.belongsTo(Packs(sequelize, Sequelize));

    return InvoiceProducts;
};
