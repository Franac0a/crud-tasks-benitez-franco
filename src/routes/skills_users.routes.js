import express from "express";
import {
  addSkillToUser,
  getUserSkills,
  removeSkillFromUser,
} from "../controllers/user_skills_inter_controllers.js";

export const routerUserSkill = express.Router();

routerUserSkill.post("/user_skills", addSkillToUser);
routerUserSkill.get("/user_skills/:userId", getUserSkills);
routerUserSkill.delete("/user_skills", removeSkillFromUser);
