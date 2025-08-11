import express from "express";
import {
  getAllUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";

export const routerUser = express.Router();

routerUser.get("/users", getAllUsers);
routerUser.get("/users/:id", getUserId);
routerUser.post("/users", createUser);
routerUser.put("/users/:id", updateUser);
routerUser.delete("/users/:id", deleteUser);
