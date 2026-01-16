const User = require('../models/User');
const { validationResult } = require('express-validator');

// @desc    Obtener el perfil del usuario autenticado
exports.getProfile = async (req, res) => {
  try {
    // req.user.id viene del middleware de auth
    const user = await User.findById(req.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener los datos del usuario' });
  }
};

// @desc    Actualizar datos personales y redes sociales
exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: 'Faltan datos o el formato es incorrecto', errors: errors.array() });
  }

  try {
    // Buscamos y actualizamos
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: req.body },
      { new: true }
    ).select('-password');

    res.json({ msg: 'Perfil actualizado con éxito', user });
  } catch (err) {
    res.status(500).json({ msg: 'Error al actualizar el perfil' });
  }
};