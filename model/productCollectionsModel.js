const { sequelize } = require("../config/mysqlConfig");
const { DataTypes, Sequelize } = require("sequelize");

const { Collections } = require("./collectionModel");
const { Products } = require("./productsModel");

const ProductCollections = sequelize.define('ProductCollections',
    {
        ProductId: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        },
        CollectionID : {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
        }
    },
    {
        tableName: 'ProductCollections'
    }
);

ProductCollections.belongsTo(Products, { foreignKey: 'ProductId'});
Products.hasMany(ProductCollections, { foreignKey: 'ProductId' });

ProductCollections.belongsTo(Collections, { foreignKey: 'CollectionID'});
Collections.hasMany(ProductCollections, { foreignKey: 'CollectionID' });


module.exports = { ProductCollections };