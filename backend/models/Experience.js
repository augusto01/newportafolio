const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  puesto: { type: String, required: true },
  empresa: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: String, required: true }, 
  fechaFin: { type: String, default: "" }, 
  actual: { type: Boolean, default: false },
  tecnologias: [String], // Array de strings para el multi-select
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', ExperienceSchema);