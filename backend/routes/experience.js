const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const expController = require('../controllers/experienceController');
const auth = require('../middleware/auth');

// @route   GET api/experiencia
router.get('/', expController.getAll);

// @route   POST api/experiencia
router.post('/', 
  [
    auth,
    [
      check('puesto', 'El puesto ocupado es obligatorio').not().isEmpty().trim(),
      check('empresa', 'El nombre de la empresa es obligatorio').not().isEmpty().trim(),
      check('fechaInicio', 'La fecha de inicio es requerida').not().isEmpty()
    ]
  ], 
  expController.create
);

// --- ORDEN CRÍTICO AQUÍ ---

// 1. Ruta específica para BAJA LÓGICA (Primero)
router.put('/baja/:id', auth, expController.delete); 

// 2. Ruta genérica para ACTUALIZAR (Después)
router.put('/:id', auth, expController.update);

module.exports = router;