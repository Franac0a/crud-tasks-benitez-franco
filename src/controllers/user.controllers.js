import { userModel } from "../models/user.model.js";

//Traer todos los usuarios
export const getAllUsers = async (req, res) => {
  try {
    const traerUsers = await userModel.findAll();
    if (!traerUsers) {
      return res.status(404).json({ Message: "No se encontraron usuarios" });
    }
    return res
      .status(200)
      .json({ Message: "Usuarios encontrados", traerUsers });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Traer usuario por id
export const getUserId = async (req, res) => {
  try {
    //Para buscar por id
    const { id } = req.params;
    const userId = await userModel.findOne({ where: { id } });
    if (!userId) {
      return res.status(404).json({ Message: "No se encontro el usuario" });
    }
    return res.status(200).json({ Message: "Usuario encontrado", userId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //Validacion para campos obligatorios
    if (!name || !email || !password) {
      return res.status(400).json({ Message: "Los campos son obligatorios" });
    }
    //Validacion para name unico
    const usuarioUnico = await userModel.findOne({ where: { name } });
    if (usuarioUnico) {
      return res.status(400).json({ Message: "El nombre ya existe,use otro" });
    }
    if (!name || typeof name !== "string" || name.length > 100) {
      return res.status(400).json({ message: "Nombre inválido" });
    }
    if (!email || typeof email !== "string" || email.length > 100) {
      return res.status(400).json({ message: "Email inválido" });
    }
    if (!password || typeof password !== "string" || password.length > 100) {
      return res.status(400).json({ message: "Contraseña inválida" });
    }

    const crearUser = await userModel.create({
      name,
      email,
      password,
    });
    return res
      .status(201)
      .json({ Message: "Usuario creado con exito", crearUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    //Para buscar por id
    const { id } = req.params;
    const userId = await userModel.findOne({ where: { id } });
    if (!userId) {
      return res.status(404).json({ Message: "No se encontro el usuario" });
    }
    const eliminarUsuario = userModel.destroy({ where: { id } });
    return res.status(200).json({ Message: "Se elimino el usuario!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Actualizar o editar un usuario
export const updateUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    //Validacion para campos obligatorios
    if (!name || !email || !password) {
      return res.status(400).json({ Message: "Los campos son obligatorios" });
    }
    //Validacion de existencia
    const { id } = req.params;
    const userId = await userModel.findOne({ where: { id } });
    if (!userId) {
      return res.status(404).json({ Message: "No se encontro el usuario" });
    }
    //Validacion para name unico
    const userUnico = await userModel.findOne({ where: { name } });
    if (userUnico) {
      return res.status(400).json({ Message: "El nombre ya existe,use otro" });
    }
    const actualizarUser = userModel.update(
      { name, email, password },
      { where: { id } }
    );

    return res.status(200).json({ Message: "Usuario actualizado" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};
