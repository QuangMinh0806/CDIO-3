const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Store = sequelize.define(
    "Store",
    {
        StoreID: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        UserID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "Users",
                key: "Id",
            },
        },
        Date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn("NOW"),
        },
    },
    {
        tableName: "Store",
    }
);

module.exports = { Store };
