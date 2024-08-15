import { Sequelize } from "sequelize";

const sequelise = new Sequelize("backlog", "root", "", {
  host: "localhost",
  dialect: "mysql",
});
sequelise
  .authenticate()
  .then(() => {
    console.log("Conectado ao Mysql com Sequelize!");
  })
  .catch((err) => {
    console.error("Erro nõo foi possivel conectar ao Banco de dados", err);
  });

export default sequelise;
