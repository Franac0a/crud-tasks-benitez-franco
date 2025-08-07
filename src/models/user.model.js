import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const user = sequelize.define(
  "User",
  {
    name: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
