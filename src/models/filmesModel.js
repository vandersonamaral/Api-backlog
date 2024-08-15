import { DataTypes } from "sequelize";
import sequelize from "../config/dbConfig.js";

const filmesModel = sequelize.define(
  "Filmes",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    diretor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
export default filmesModel;
