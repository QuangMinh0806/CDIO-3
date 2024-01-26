const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");
const {Needs} = require("./needsModel");
const {Products} = require("./productsModel");

const ProductNeeds = sequelize.define('ProductNeeds', {
    ProductID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    },
    NeedID: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
    }
},{
    tableName: 'ProductNeeds'
});

ProductNeeds.belongsTo(Products, { foreignKey: 'ProductID'});
Products.hasMany(ProductNeeds, { foreignKey: 'ProductID' });

ProductNeeds.belongsTo(Needs, { foreignKey: 'NeedID'});
Needs.hasMany(ProductNeeds, { foreignKey: 'NeedID' });

module.exports = {ProductNeeds};

