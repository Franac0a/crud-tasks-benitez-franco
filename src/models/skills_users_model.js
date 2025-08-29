import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const SkillUsers = sequelize.define(
  "skills_users",
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
