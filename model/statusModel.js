const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const Status = sequelize.define('Status', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Display: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
}, {
    tableName: 'Status'
});

module.exports = { Status };