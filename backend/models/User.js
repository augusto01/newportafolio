const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  // --- Datos de acceso ---
  username: { 
    type: String, 
    required: [true, 'El nombre de usuario es obligatorio'], 
    unique: true,
    trim: true 
  },
  email: { 
    type: String, 
    required: [true, 'El correo electrónico es obligatorio'], 
    unique: true, 
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, ingresa un email válido']
  },
  password: { 
    type: String, 
    required: [true, 'La contraseña es obligatoria'],
    minlength: 6 
  },

  // --- Datos personales adicionales ---
  nombreCompleto: {
    type: String,
    trim: true
  },
  celular: {
    type: String,
    trim: true
  },
  fechaNacimiento: {
    type: Date
  },
  avatarUrl: {
    type: String,
    default: 'https://via.placeholder.com/150' // Imagen por defecto
  },
  
  // --- Redes Sociales (Opcional, útil para el footer del portafolio) ---
  redesSociales: {
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    instagram: { type: String, default: '' }
  },

  // --- Metadatos de sistema ---
  rol: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'admin'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Encriptación automática de la contraseña antes de guardar
UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Método para comparar contraseñas
UserSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);    