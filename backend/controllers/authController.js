const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Función para el Login
exports.login = async (req, res) => {
  const { identifier, password } = req.body;
  try {
    // Buscar por email o username
    let user = await User.findOne({ 
      $or: [{ email: identifier }, { username: identifier }] 
    });

    if (!user) return res.status(400).json({ msg: 'Usuario no encontrado' });

    // Usamos el método que creaste en el Schema
    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(400).json({ msg: 'Contraseña incorrecta' });

    const payload = { user: { id: user.id } };

    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '8h' }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    res.status(500).send('Error en el servidor');
  }
};

// Función para obtener los datos del usuario logueado
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    res.status(500).send('Error al obtener usuario');
  }
};