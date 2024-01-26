const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Orders = sequelize.define("Orders", {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    StatusID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Status",
            key: "Id", 
        },
    },
    OrderDate: {
        type: DataTypes.DATE, 
        allowNull: true, 
        defaultValue: Sequelize.fn("NOW"),
    },
    Note: {
        type: DataTypes.CHAR(255),
        allowNull: true, 
    },
    PaymentMethod: {
        type: DataTypes.CHAR(255),
        allowNull: true,
        defaultValue : "Payment on delivery"
    },
},{
    tableName: 'Orders'
});


module.exports = {Orders};