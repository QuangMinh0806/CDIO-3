const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");

const Collections = sequelize.define('Collections', {
    CollectionID: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
},{
    tableName: 'Collections'
});

module.exports = {Collections};