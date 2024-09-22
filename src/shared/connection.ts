import { Sequelize, DataTypes, Model } from "sequelize";

const sequelize = new Sequelize({
    dialect: "postgres",
    database: "db_trabalho_api",
    username: "postgres",
    password: "2636",
    host: "localhost",
    port: 5432,
    logging: console.log, // Adicione esta linha
});


async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

export default sequelize;
