const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const StoreDetail = sequelize.define('StoreDetail', {
    StoreID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Store",
            key: "StoreID",
        },
    },
    ProductID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Products",
            key: "Id",
        },

    },
    ProductCode: {
        type: DataTypes.CHAR(255),
    },
    ProviderID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: "Provider",
            key: "Id",
        },
    },
    Variant: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    Price: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
}, {
    tableName: 'StoreDetail'
});

module.exports = { StoreDetail };