const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/mysqlConfig");
const bcryptjs = require("bcryptjs");
const User = sequelize.define('Users',
    {
        Id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true,
        },
        UserName: {
            type: DataTypes.CHAR(255),
            allowNull: false,
        },
        Password: {
            type: DataTypes.CHAR(255),
            allowNull: false,
            validate: {
                len: [6, Infinity],
            },
        },
        Email: {
            type: DataTypes.CHAR(255),
            unique: true,
            allowNull: false,
        },
        Picture: {
            type: DataTypes.CHAR(255),
            defaultValue: "",
        },
        IsAddress: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        RoleId: {
            type: DataTypes.BIGINT,
            defaultValue: 1,
            references: {
                model: 'Roles',
                key: 'Id',
            },
        },
    }, {
    tableName: 'Users'
}
);

User.beforeCreate(async (user) => {
    const hashedPassword = await bcryptjs.hash(user.Password, 10);
    user.Password = hashedPassword;
});


module.exports = { User };