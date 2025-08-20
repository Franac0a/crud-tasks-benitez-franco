import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { UserModel } from "./user.model.js";

export const SkillModel = sequelize.define(
  "skill",
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    number: {
      type: DataTypes.NUMBER(5),
      allowNull: false,
    },
  },
  {
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
