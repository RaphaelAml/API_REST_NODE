import { DataTypes, Model, Sequelize } from "sequelize";
class Contratante extends Model {
}
const sequelize = new Sequelize({
    dialect: "postgres",
    database: "db_trabalho_api",
    username: "postgres",
    password: "2636",
    host: "localhost",
    port: 5432,
});
Contratante.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCompleto: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Contratante",
    tableName: "contratante",
    timestamps: false,
    freezeTableName: true,
});
export default Contratante; // Isso exporta a classe Contratante
