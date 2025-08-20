import { Router } from "express";
import {
  createSkill,
  getAllSkills,
} from "../controllers/user_skills_controllers.js";

export const routerSkills = Router();

routerSkills.post("/skills", createSkill);
routerSkills.get("/skills", getAllSkills);
