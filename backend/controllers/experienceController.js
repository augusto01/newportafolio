const Experience = require('../models/Experience');
const { validationResult } = require('express-validator');

// @desc    Obtener todas las experiencias
exports.getAll = async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ fechaInicio: -1 });
    
    // Si la base de datos está vacía, avisamos con un mensaje claro
    if (experiences.length === 0) {
      return res.status(200).json({ 
        msg: 'No hay experiencias laborales para mostrar', 
        data: [] 
      });
    }

    res.json(experiences);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al obtener experiencias' });
  }
};

// @desc    Crear una nueva experiencia
exports.create = async (req, res) => {
  // Revisamos si las validaciones de la ruta detectaron errores
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      msg: 'Error: Faltan datos obligatorios', 
      errors: errors.array() 
    });
  }

  try {
    const newExp = new Experience(req.body);
    const exp = await newExp.save();
    res.status(201).json({ msg: 'Experiencia agregada correctamente', exp });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al guardar la experiencia' });
  }
};

// @desc    Actualizar experiencia
exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: 'Datos de actualización no válidos', errors: errors.array() });
  }

  try {
    let exp = await Experience.findById(req.params.id);
    
    // Si el ID no existe en la DB
    if (!exp) {
      return res.status(404).json({ msg: 'La experiencia que intentas editar no existe' });
    }

    exp = await Experience.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }
    );
    res.json({ msg: 'Experiencia actualizada con éxito', exp });
  } catch (err) {
    // Si el ID tiene un formato incorrecto (ej: falta un caracter)
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'ID no válido' });
    res.status(500).json({ msg: 'Error al actualizar' });
  }
};

// @desc    Eliminar experiencia
exports.delete = async (req, res) => {
  try {
    const exp = await Experience.findById(req.params.id);
    
    if (!exp) {
      return res.status(404).json({ msg: 'La experiencia que intentas borrar no existe' });
    }

    await Experience.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Experiencia eliminada correctamente de tu historial' });
  } catch (err) {
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'ID no válido' });
    res.status(500).json({ msg: 'Error al eliminar' });
  }
};