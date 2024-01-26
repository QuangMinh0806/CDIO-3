const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");
const {Category} = require("./categoryModel");

const CategorySub = sequelize.define('CategorySub', {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
},{
    tableName: 'CategorySub'
});

CategorySub.belongsTo(Category, { foreignKey: 'CategoryId' });

module.exports = {CategorySub};