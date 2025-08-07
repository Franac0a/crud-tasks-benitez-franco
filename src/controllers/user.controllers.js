import { user } from "../models/user.model.js";

//Traer todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};
