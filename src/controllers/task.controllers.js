import { taskModel } from "../models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const traerTareas = await taskModel.findAll();
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
    const taskId = await taskModel.findOne({ where: { id } });
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
    const { title, description, isComplete } = req.body;
    //Validacion para campos obligatorios
    if (!title || !description || !isComplete) {
      return res.status(400).json({ Message: "Los campos son obligatorios" });
    }
    //Validacion para name unico
    const tareaUnico = await taskModel.findOne({ where: { title } });
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

    const crearTarea = await taskModel.create({
      title,
      description,
      isComplete,
    });
    return res
      .status(201)
      .json({ Message: "Tarea creada con exito", crearTarea });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const taskId = await taskModel.findOne({ where: { id } });
    if (!taskId) {
      return res.status(404).json({ Message: "No se encontro la Tarea" });
    }
    const eliminarTarea = taskModel.destroy({ where: { id } });
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

    //Validacion para campos obligatorios
    if (!title || !description || !isComplete) {
      return res.status(400).json({ Message: "Los campos son obligatorios" });
    }
    //Validacion de existencia
    const { id } = req.params;
    const taskId = await taskModel.findOne({ where: { id } });
    if (!taskId) {
      return res.status(404).json({ Message: "No se encontro la Tarea" });
    }
    //Validacion para title unico
    const tareaUnica = await taskModel.findOne({ where: { title } });
    if (tareaUnica) {
      return res.status(400).json({ Message: "El nombre ya existe,use otro" });
    }
    const actualizarUser = taskModel.update(
      { title, description, isComplete },
      { where: { id } }
    );

    return res.status(200).json({ Message: "Tarea actualizada" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Message: "Error en el servidor" });
  }
};
