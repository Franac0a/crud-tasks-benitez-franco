import { Router } from "express";
import {
  getAllSkills,
  createSkill,
} from "../controllers/skills_controllers.js";

export const routerSkill = Router();

routerSkill.get("/skills", getAllSkills);
routerSkill.post("/skills", createSkill);
