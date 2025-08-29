import { UserModel } from "../models/user.model.js";
import { SkillModel } from "../models/user_skills_model.js";

// POST /api/skills → crear una nueva skill
export const createSkill = async (req, res) => {
  try {
    const { name } = req.body;

    // Validación mínima
    if (!name || typeof name !== "string" || name.trim() === "") {
      return res.status(400).json({ message: "Nombre de skill inválido" });
    }

    const skill = await SkillModel.create({ name });
    return res.status(201).json({ message: "Skill creada con éxito", skill });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

export const getAllSkills = async (req, res) => {
  try {
    const skills = await SkillModel.findAll({
      include: {
        model: UserModel,
        as: "users",
        attributes: ["id", "name", "email"],
        through: { attributes: [] },
      },
    });
    return res.status(200).json({ skills });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
