import { DataTypes } from "sequelize";
import db from "../database/connection";

const Pais = db.define(
  "Pais",
  {
    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    idDivisa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idObreroEncargado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    tableName: "pais",
  }
);

export default Pais;
