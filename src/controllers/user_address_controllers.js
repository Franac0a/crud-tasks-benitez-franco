import { UserModel } from "../models/user.model.js";
import { UserAddressModel } from "../models/user_address_model.js";

// POST /api/user_address → crear una nueva dirección
export const createAddress = async (req, res) => {
  try {
    const { user_id, street, city, country } = req.body;

    // Validar usuario
    const user = await UserModel.findByPk(user_id);
    if (!user)
      return res.status(404).json({ message: "Usuario no encontrado" });

    // Evitar que tenga más de una dirección
    const existingAddress = await UserAddressModel.findOne({
      where: { user_id },
    });
    if (existingAddress) {
      return res
        .status(400)
        .json({ message: "El usuario ya tiene una dirección" });
    }

    const address = await UserAddressModel.create({
      street,
      city,
      country,
      user_id,
    });
    return res
      .status(201)
      .json({ message: "Dirección creada con éxito", address });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};

// GET /api/user_address → obtener todas las direcciones con el usuario asociado
export const getAllAddresses = async (req, res) => {
  try {
    const addresses = await UserAddressModel.findAll({
      include: {
        model: UserModel,
        as: "user",
        attributes: ["id", "name", "email"], // solo info esencial
      },
    });
    return res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Error en el servidor" });
  }
};
