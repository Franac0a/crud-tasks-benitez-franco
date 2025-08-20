import { Router } from "express";
import {
  createSkill,
  getAllSkills,
} from "../controllers/user_skills_controllers.js";

export const routerSkills = express.Router();

routerTask.post("/skills", createSkill);
routerTask.get("/skills", getAllSkills);
