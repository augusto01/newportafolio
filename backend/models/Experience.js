const ExperienceSchema = new mongoose.Schema({
  puesto: { type: String, required: true },
  empresa: { type: String, required: true },
  descripcion: { type: String, required: true },
  fechaInicio: { type: String, required: true }, 
  // Al ser String, acepta tanto "2023-05-10" como "Presente" o ""
  fechaFin: { type: String, default: "" }, 
  actual: { type: Boolean, default: false },
  tecnologias: [String],
  activo: { type: Boolean, default: true }
}, { strict: false }); // Agregamos strict: false temporalmente si hay registros viejos