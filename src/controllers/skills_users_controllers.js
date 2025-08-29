// controllers/userSkill.controller.js
import { SkillModelInter } from "../models/user_skills_inter_model.js";
import { UserModel } from "../models/user.model.js";
import { SkillModel } from "../models/user_skills_model.js";

export const addSkillToUser = async (req, res) => {
  try {
    const { userId, skillId, level } = req.body;

    const user = await UserModel.findByPk(userId);
    const skill = await SkillModel.findByPk(skillId);

    if (!user || !skill) {
      return res.status(404).json({ message: "Usuario o skill no encontrado" });
    }

    const userSkill = await SkillModelInter.create({
      user_id: userId,
      skill_id: skillId,
      level: level || null,
    });

    res.json(userSkill);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserSkills = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await UserModel.findByPk(userId, {
      include: [{ model: SkillModel, as: "skills" }],
    });

    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    res.json(user.skills);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const removeSkillFromUser = async (req, res) => {
  try {
    const { userId, skillId } = req.body;

    const deleted = await SkillModelInter.destroy({
      where: { user_id: userId, skill_id: skillId },
    });

    if (!deleted) {
      return res.status(404).json({ message: "Relación no encontrada" });
    }

    res.json({ message: "Skill removida del usuario" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
