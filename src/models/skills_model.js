import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const SkillModel = sequelize.define(
  "skill",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
