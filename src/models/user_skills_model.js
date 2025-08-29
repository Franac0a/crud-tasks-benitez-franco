import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { SkillModel } from "./skills_model.js";
import { UserModel } from "./user.model.js";

export const SkillUsers = sequelize.define(
  "users_skills",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

UserModel.belongsToMany(SkillModel, {
  through: SkillUsers,
  foreignKey: "user_id",
  as: "skills",
});

SkillModel.belongsToMany(UserModel, {
  through: SkillUsers,
  foreignKey: "skill_id",
  as: "users",
});
