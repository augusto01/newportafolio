const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true },
  nombre: { type: String, default: "" },
  apellido: { type: String, default: "" },
  tituloProfesional: { type: String, default: "Full Stack Developer" },
  bio: { type: String, default: "" },
  celular: { type: String, default: "" },
  avatarUrl: { type: String, default: "" },
  redesSociales: {
    linkedin: { type: String, default: "" },
    github: { type: String, default: "" },
    instagram: { type: String, default: "" },
    twitter: { type: String, default: "" }
  },
  activo: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});


UserSchema.methods.comparePassword = async function (passwordIngresada) {
  return await bcrypt.compare(passwordIngresada, this.password);
};

module.exports = mongoose.model('User', UserSchema);