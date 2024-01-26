const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Address = sequelize.define('Address', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    UserID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'Id',
        },
    },
    Address: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    AddressSub: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
}, {
    tableName: 'Address'
});

module.exports = { Address };