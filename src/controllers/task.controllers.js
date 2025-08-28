import { TaskModel } from "../models/task.model.js";
import { UserModel } from "../models/user.model.js";
export const getAllTasks = async (req, res) => {
  try {
    const traerTareas = await TaskModel.findAll();
    if (!traerTareas) {
      return res.status(404).json({ Message: "No se encontraron Tareas" });
    }
    return res.status(200).json({ Message: "Tareas encontradas", traerTareas });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

export const getTask = async (req, res) => {
  try {
    //Para buscar por id
    const { id } = req.params;
    const taskId = await TaskModel.findOne({ where: { id } });
    if (!taskId) {
      return res.status(404).json({ Message: "No se encontro la tarea" });
    }
    return res.status(200).json({ Message: "Tarea encontrada", taskId });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Crear una nueva Tarea
export const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { userId } = req.params;
    //Validacion para campos obligatorios
    if (!title || !description) {
      return res.status(400).json({ Message: "Los campos son obligatorios" });
    }

    // Validar usuario existente
    const usuario = await UserModel.findOne({ where: { id: userId } });
    if (!usuario) {
      return res
        .status(404)
        .json({ Message: "No se encontró el usuario asociado" });
    }
    //Validacion para tarea unica
    const tareaUnico = await TaskModel.findOne({ where: { title } });
    if (tareaUnico) {
      return res.status(400).json({ Message: "La tarea ya existe" });
    }
    if (
      !title ||
      typeof title !== "string" ||
      title.trim() === "" ||
      title.length > 100
    ) {
      return res.status(400).json({ message: "Titulo inválido" });
    }
    if (
      !description ||
      typeof description !== "string" ||
      description.trim() === "" ||
      description.length > 100
    ) {
      return res.status(400).json({ message: "descipcion inválida" });
    }

    const crearTarea = await TaskModel.create({
      title,
      description,
      user_id: userId,
    });
    return res
      .status(201)
      .json({ Message: "Tarea creada con exito", crearTarea });
  } catch (error) {
    console.error(message.error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = await TaskModel.findOne({ where: { id } });
    if (!taskId) {
      return res.status(404).json({ Message: "No se encontro la Tarea" });
    }
    const eliminarTarea = TaskModel.destroy({ where: { id } });
    return res.status(200).json({ Message: "Se elimino la Tarea!" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

//Actualizar o editar una Tarea
export const updateTask = async (req, res) => {
  try {
    const { title, description, isComplete } = req.body;

    //Validacion de existencia
    const { id } = req.params;
    const taskId = await TaskModel.findOne({ where: { id } });
    if (!taskId) {
      return res.status(404).json({ Message: "No se encontro la Tarea" });
    }
    //Validacion para title unico

    if (description) {
      if (
        !description ||
        typeof description !== "string" ||
        description.trim() === "" ||
        description.length > 100
      ) {
        return res.status(400).json({ message: "descipcion inválida" });
      }
    }
    if (title) {
      const tareaUnica = await TaskModel.findOne({ where: { title } });

      if (
        !title ||
        typeof title !== "string" ||
        title.trim() === "" ||
        title.length > 100
      ) {
        return res.status(400).json({ message: "Titulo inválido" });
      }
    }
    if (isComplete) {
      if (typeof isComplete !== "boolean")
        return res
          .status(400)
          .json({ Message: "El valor debe ser verdadero o falso" });
    }

    const actualizarUser = TaskModel.update(
      { title, description, isComplete },
      { where: { id } }
    );

    return res.status(200).json({ Message: "Tarea actualizada" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};
