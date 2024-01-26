const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Provider = sequelize.define('Provider', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    NumberPhone: {
        type: DataTypes.CHAR(20),
        allowNull: false,
    },
    Address: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
}, {
    tableName: 'Provider'
});

module.exports = { Provider };