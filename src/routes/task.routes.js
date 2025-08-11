import express from "express";
import {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

export const routerTask = express.Router();

routerTask.get("/tasks", getAllTasks);
routerTask.get("/tasks/:id", getTask);
routerTask.post("/tasks", createTask);
routerTask.put("/tasks/:id", updateTask);
routerTask.delete("/tasks/:id", deleteTask);
