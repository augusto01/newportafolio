const Certificate = require('../models/Certificate');
const { validationResult } = require('express-validator');

// @desc    Obtener todos los certificados
exports.getAll = async (req, res) => {
  try {
    const certs = await Certificate.find().sort({ fecha: -1 });
    if (certs.length === 0) {
      return res.status(200).json({ msg: 'No se encontraron certificados cargados', data: [] });
    }
    res.json(certs);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener certificados' });
  }
};

// @desc    Crear un nuevo certificado
exports.create = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: 'Datos incompletos para el certificado', errors: errors.array() });
  }

  try {
    const cert = new Certificate(req.body);
    await cert.save();
    res.status(201).json({ msg: 'Certificado guardado correctamente', cert });
  } catch (err) {
    res.status(500).json({ msg: 'Error de servidor' });
  }
};

// @desc    Actualizar un certificado existente
exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: 'Error en los datos de actualización', errors: errors.array() });
  }

  try {
    let cert = await Certificate.findById(req.params.id);
    if (!cert) return res.status(404).json({ msg: 'Certificado no encontrado' });

    cert = await Certificate.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.json({ msg: 'Certificado actualizado', cert });
  } catch (err) {
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'ID de certificado no válido' });
    res.status(500).json({ msg: 'Error al actualizar' });
  }
};

// @desc    Eliminar un certificado
exports.delete = async (req, res) => {
  try {
    const cert = await Certificate.findById(req.params.id);
    if (!cert) return res.status(404).json({ msg: 'Certificado no encontrado' });

    await Certificate.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Certificado eliminado con éxito' });
  } catch (err) {
    if (err.kind === 'ObjectId') return res.status(404).json({ msg: 'ID de certificado no válido' });
    res.status(500).json({ msg: 'Error al eliminar certificado' });
  }
};