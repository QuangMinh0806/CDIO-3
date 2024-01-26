const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const Needs = sequelize.define('Needs', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    NeedName: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
},{
    tableName: 'Needs'
});

module.exports = {Needs};