const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Role = sequelize.define('Roles',
    {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        NameRole: {
            type: DataTypes.CHAR(255),
            allowNull: false,
        },
    },
    {
        tableName: 'Roles'
    }
);

module.exports = { Role };