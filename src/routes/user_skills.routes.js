<<<<<<< HEAD
import express from "express";
import {
  getAllSkills,
  createSkill,
} from "../controllers/user_skills_controllers.js";

export const routerSkill = express.Router();

routerSkill.get("/skills", getAllSkills);
routerSkill.post("/skills", createSkill);
=======
import { Router } from "express";
import {
  createSkill,
  getAllSkills,
} from "../controllers/user_skills_controllers.js";

export const routerSkills = Router();

routerSkills.post("/skills", createSkill);
routerSkills.get("/skills", getAllSkills);
>>>>>>> 3676b0298ac13da33e1dd12ad20a5f45c0ab0a93
