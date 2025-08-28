import express from "express";
import {
  getAllSkills,
  createSkill,
} from "../controllers/user_skills_controllers.js";

export const routerSkill = express.Router();

routerSkill.get("/skills", getAllSkills);
routerSkill.post("/skills", createSkill);
