const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// --- MIDDLEWARES ---
app.use(cors()); // Permite que tu React (puerto 3000) se comunique con este server
app.use(express.json()); // Permite recibir datos en formato JSON

// --- RUTAS (Endpoints) ---
// Agrupamos todas las rutas bajo el prefijo /api
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/projects'));
app.use('/api/certificados', require('./routes/certificates'));
app.use('/api/experiencia', require('./routes/experience'));
app.use('/api/users', require('./routes/users'));

// Ruta base para verificar que el servidor está vivo
app.get('/', (req, res) => {
  res.send('API de Mi Portafolio funcionando 🚀');
});

// --- CONEXIÓN A BASE DE DATOS ---
// Usamos el MONGO_URI definido en tu .env (local o atlas)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Conectado con éxito 🔥'))
  .catch(err => {
    console.error('❌ Error al conectar a MongoDB:');
    console.error(err.message);
    process.exit(1); // Detener el servidor si no hay base de datos
  });

// --- INICIO DEL SERVIDOR ---
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log('-------------------------------------------');
  console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);
  console.log(`📁 API Base: http://localhost:${PORT}/api`);
  console.log('-------------------------------------------');
});