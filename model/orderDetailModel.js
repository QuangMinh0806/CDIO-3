const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const OrderDetails = sequelize.define('OrderDetails', {
    OrderDetailsId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    OrderID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: Orders,
            key: "Id",
        },
    },
    CartID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: ShoppingCart,
            key: "Id",
        },
    },
    Quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
},{
    tableName: 'OrderDetails'
});

module.exports = { OrderDetails };