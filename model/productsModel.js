const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");
const { CategorySub } = require("./categorySubModel");

const Products = sequelize.define("Products", {
    Id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true,
    },
    NameProducts: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    TittleProduct: {
        type: DataTypes.CHAR(255),
    },
    CodeProduct: {
        type: DataTypes.CHAR(255),
        allowNull: false,
    },
    DescriptionProducts: {
        type: DataTypes.CHAR(255),
    },
    QuantitySell: {
        type: DataTypes.INTEGER,
    },
    Price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    Image: {
        type: DataTypes.TEXT,
    },
    VariantsProduct: {
        type: DataTypes.CHAR(255),
    },
    CreateDate: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.fn("NOW")
    },
}, {
    tableName: 'Products'
});

Products.belongsTo(CategorySub, { foreignKey: 'CategorySubId' });

Products.beforeSave(async (product) => {
    product.TittleProduct = await product.NameProducts.toLowerCase().replace(/\s+/g, '-');
})


module.exports = { Products };
