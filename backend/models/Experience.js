const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  puesto: { type: String, required: true },
  empresa: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaFin: { type: Date }, // Puede ser null si es el trabajo actual
  actual: { type: Boolean, default: false },
  tecnologias: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Experience', ExperienceSchema);