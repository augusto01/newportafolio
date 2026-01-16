const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
  titulo: { 
    type: String, 
    required: true,
    trim: true 
  },
  institucion: { 
    type: String, 
    required: true 
  },
  fecha: { 
    type: Date 
  },
  imagenUrl: { 
    type: String, 
    default: "" 
  },
  credencialUrl: { 
    type: String, 
    default: "" 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  }
});

module.exports = mongoose.model('Certificate', CertificateSchema);