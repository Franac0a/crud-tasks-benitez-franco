import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import { UserModel } from "./user.model.js";

export const UserAddressModel = sequelize.define(
  "user_address",
  {
    street: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
  },
  {
    timestamps: false,
  }
);

UserModel.hasOne(UserAddressModel, {
  foreignKey: "user_id",
  as: "address",
});
UserAddressModel.belongsTo(UserModel, {
  foreignKey: "user_id",
  as: "user",
});
