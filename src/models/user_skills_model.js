import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const SkillModel = sequelize.define(
  "skill",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    tableName: "skills",
    timestamps: false,
  }
);

UserModel.belongsToMany(SkillModel, {
  through: "user_skills",
  foreignKey: "user_id",
  otherKey: "skill_id",
  as: "skills",
});

SkillModel.belongsToMany(UserModel, {
  through: "user_skills",
  foreignKey: "skill_id",
  otherKey: "user_id",
  as: "users",
});
