import express from "express";
import bodyParser from "body-parser";
import filmesRoutes from "./routes/filmesRoutes.js";

//constante que importa as rotas
const app = express();

app.use(bodyParser.json());

app.use('/',filmeRoutes);

//exportando por default tudo que foi feito
export default app;
