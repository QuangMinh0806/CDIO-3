const { DataTypes, Sequelize } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");


const Ratings = sequelize.define('Ratings', {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        OrderDetailsID: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "OrderDetails",
                key: "OrderDetailsId",
            },
        },
        StartPoint: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 1,
                max: 5,
            },
        },
        CommentUser: {
            type: DataTypes.CHAR(255),
        },
        DateRatings: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.fn('NOW')
        },
    },
    {
        tableName: 'Ratings'
    }
);


module.exports = { Ratings };