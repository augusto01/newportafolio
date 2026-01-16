const User = require('../models/User');
const { validationResult } = require('express-validator');

// @desc    Registrar usuario (ABM: Create) - Sin entrega de Token
const bcrypt = require('bcryptjs'); // <--- Importamos bcrypt aquí

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, password, nombre, apellido, celular } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'El email ya está registrado' });

    user = new User({ username, email, password, nombre, apellido, celular });

    // --- HASHEO MANUAL EN EL CONTROLADOR ---
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    // ---------------------------------------

    await user.save();

    res.status(201).json({ 
      msg: 'Usuario creado con éxito. Inicia sesión con tus credenciales.' 
    });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al registrar usuario' });
  }
};

// @desc    Obtener datos del perfil (ABM: Read)
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.user.id, activo: true }).select('-password');
    
    if (!user) {
      return res.status(404).json({ msg: 'El perfil no existe o ha sido borrado' });
    }
    
    res.json(user);
  } catch (err) {
    res.status(500).json({ msg: 'Error al obtener datos' });
  }
};

// @desc    Actualizar perfil (ABM: Update)
exports.updateProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ msg: 'Datos de actualización no válidos', errors: errors.array() });
  }

  try {
    const { 
      nombre, apellido, tituloProfesional, bio, celular, avatarUrl,
      linkedin, github, instagram, twitter 
    } = req.body;

    // Construimos el objeto de actualización con los nuevos campos
    const updateFields = {
      nombre,
      apellido,
      tituloProfesional,
      bio,
      celular,
      avatarUrl,
      redesSociales: {
        linkedin,
        github,
        instagram,
        twitter
      }
    };

    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: updateFields },
      { new: true } // Para que retorne el documento actualizado
    ).select('-password');

    res.json({ msg: 'Perfil actualizado correctamente', user });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al actualizar el perfil' });
  }
};

// @desc    Baja Lógica del Usuario (ABM: Delete)
// @desc    Baja Lógica del Usuario (Desactivar cuenta)
exports.softDeleteProfile = async (req, res) => {
  try {
    // Buscamos al usuario por el ID del token y cambiamos su estado
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { $set: { activo: false } },
      { new: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({ msg: 'Usuario no encontrado' });
    }

    res.json({ 
      msg: 'Cuenta desactivada con éxito (Baja Lógica). Los datos permanecen, pero el acceso está restringido.' 
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Error al procesar la baja lógica' });
  }
};