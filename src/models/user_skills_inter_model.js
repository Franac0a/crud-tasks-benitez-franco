import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const SkillModelInter = sequelize.define(
  "skillsInter",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
    },
    skill_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "skills",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);
