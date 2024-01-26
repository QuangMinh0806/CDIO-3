const Sequelize = require("sequelize");


const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE, 
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    define: {
        timestamps: false,
        sync: {
            force: false
        }
    },
    dialectOptions: {
        charset: 'utf8mb4',
        collate: 'utf8mb4_unicode_ci',
    },
});

const connectToDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Kết nối thành công DATABASE");
    } catch (error) {
        console.log(error);
    }
}

module.exports = {sequelize, connectToDB};