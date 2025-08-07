import { sequelize } from "../config/database.js";
import { DataTypes } from "sequelize";

export const user = sequelize.define(
  "User",
  {
    title: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      DataTypes: DataTypes.STRING,
      allowNull: false,
    },
    isComplete: {
      DataTypes: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
