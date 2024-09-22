import express from "express";
import contratantesRoutes from "./routes/contratante-routes.js";
import sequelize from "./shared/connection.js";
import {Contratante} from "./models/contratante-model.js";

const app = express();
app.use(express.json());
const PORT = 3000;

//routes here
app.get("/", (req, res) => {
    res.status(200).send("Rodando a API - com Ts")
});

app.use("/", contratantesRoutes);

(async () => {
    try {
        //Test the connection
        await sequelize.authenticate();
        console.log("Models synchronized with the database")

        //Start the server
        app.listen(PORT, () => {
            console.log("Server is running on port", PORT)
        });
    } catch (error){
        console.error("Unable to connect to the database", error)
    }
})();

export default app;