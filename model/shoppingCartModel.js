const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const ShoppingCart = sequelize.define('ShoppingCart', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Users,
            key: "Id",
        },
    },
    ProductID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Products,
            key: "Id",
        },
    },
    VariantCart: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    Quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
    IsOrder: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    tableName: 'ShoppingCart'
});

module.exports = { ShoppingCart };