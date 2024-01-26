const {DataTypes} = require("sequelize");
const {sequelize} = require("../config/mysqlConfig");

const Category = sequelize.define('Category',
    {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        Name: {
            type: DataTypes.CHAR(255),
            allowNull: false,
        }
    },
    {
        tableName: 'Category'
    }
);



module.exports = {Category};