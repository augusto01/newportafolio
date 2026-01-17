const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  tech: [String], // Array de tecnologías
  link: { type: String },
  github: { type: String },
  image: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);