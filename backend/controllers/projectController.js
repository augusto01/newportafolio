const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.getAll = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    if (projects.length === 0) {
      return res.status(200).json({ msg: 'No hay proyectos para mostrar aún', data: [] });
    }
    res.json(projects);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener proyectos' });
  }
};

exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ msg: 'Faltan datos obligatorios', errors: errors.array() });

  try {
    const project = new Project(req.body);
    await project.save();
    res.status(201).json({ msg: 'Proyecto creado con éxito', project });
  } catch (err) {
    res.status(500).json({ msg: 'Error de servidor' });
  }
};


exports.update = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!project) return res.status(404).json({ msg: 'Proyecto no encontrado' });
    res.json(project);
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar' });
  }
};

// Asegúrate de tener también el delete
exports.delete = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Proyecto eliminado' });
  } catch (err) {
    res.status(500).json({ msg: 'Error al eliminar' });
  }
};