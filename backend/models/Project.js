const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  tecnologias: [String],
  linkRepo: String,
  linkDemo: String,
  imagenUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);